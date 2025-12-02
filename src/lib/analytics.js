import { supabase } from './supabase';

// Get visitor fingerprint (simple IP-based for now)
const getVisitorId = () => {
  let visitorId = sessionStorage.getItem('visitor_id');
  if (!visitorId) {
    visitorId = `visitor_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    sessionStorage.setItem('visitor_id', visitorId);
  }
  return visitorId;
};

// Track page view
export const trackPageView = async (pageName, path) => {
  try {
    const visitorId = getVisitorId();
    
    const { error } = await supabase
      .from('page_views')
      .insert({
        visitor_id: visitorId,
        page_name: pageName,
        page_path: path || window.location.pathname,
        timestamp: new Date().toISOString(),
        user_agent: navigator.userAgent,
        screen_width: window.screen.width,
        screen_height: window.screen.height,
        device_type: /Mobile|Android|iPhone/i.test(navigator.userAgent) ? 'mobile' : 'desktop'
      });

    if (error) console.error('Error tracking page view:', error);
  } catch (err) {
    console.error('Analytics error:', err);
  }
};

// Get location data using IP geolocation API
const getLocationData = async () => {
  try {
    const response = await fetch('https://ipapi.co/json/');
    const data = await response.json();
    return {
      country: data.country_name,
      city: data.city,
      region: data.region,
      timezone: data.timezone,
      ip: data.ip
    };
  } catch (error) {
    return {
      country: 'Unknown',
      city: 'Unknown',
      region: 'Unknown',
      timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
      ip: 'Unknown'
    };
  }
};

// Track visitor (unique visits)
export const trackVisitor = async () => {
  try {
    const visitorId = getVisitorId();
    
    // Check if visitor already tracked today
    const today = new Date().toISOString().split('T')[0];
    const existingVisit = sessionStorage.getItem(`visit_${today}`);
    
    if (!existingVisit) {
      const locationData = await getLocationData();
      
      const { error } = await supabase
        .from('visitors')
        .insert({
          visitor_id: visitorId,
          timestamp: new Date().toISOString(),
          user_agent: navigator.userAgent,
          referrer: document.referrer || 'direct',
          country: locationData.country,
          city: locationData.city,
          region: locationData.region,
          timezone: locationData.timezone,
          ip_address: locationData.ip,
          device_type: /Mobile|Android|iPhone/i.test(navigator.userAgent) ? 'mobile' : 'desktop',
          language: navigator.language
        });

      if (!error) {
        sessionStorage.setItem(`visit_${today}`, 'true');
      }
    }
  } catch (err) {
    console.error('Visitor tracking error:', err);
  }
};

// Track inquiry submission
export const trackInquiry = async (formData) => {
  try {
    const visitorId = getVisitorId();
    
    const { error } = await supabase
      .from('inquiries')
      .insert({
        visitor_id: visitorId,
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        message: formData.message,
        timestamp: new Date().toISOString()
      });

    if (error) console.error('Error tracking inquiry:', error);
  } catch (err) {
    console.error('Inquiry tracking error:', err);
  }
};

// Track feature interaction
export const trackFeature = async (featureName, action) => {
  try {
    const visitorId = getVisitorId();
    
    const { error } = await supabase
      .from('feature_interactions')
      .insert({
        visitor_id: visitorId,
        feature_name: featureName,
        action_detail: action,
        timestamp: new Date().toISOString()
      });

    if (error) console.error('Error tracking feature:', error);
  } catch (err) {
    console.error('Feature tracking error:', err);
  }
};

// Get analytics summary
export const getAnalyticsSummary = async () => {
  try {
    // Get total visitors count
    const { count: visitorsCount, error: visitorsError } = await supabase
      .from('visitors')
      .select('*', { count: 'exact', head: true });

    if (visitorsError) console.error('Visitors count error:', visitorsError);

    // Get total page views count
    const { count: pageViewsCount, error: pageViewsError } = await supabase
      .from('page_views')
      .select('*', { count: 'exact', head: true });

    if (pageViewsError) console.error('Page views count error:', pageViewsError);

    // Get total inquiries count
    const { count: inquiriesCount, error: inquiriesError } = await supabase
      .from('inquiries')
      .select('*', { count: 'exact', head: true });

    if (inquiriesError) console.error('Inquiries count error:', inquiriesError);

    // Get page views data for top pages
    const { data: pageViewsData, error: pagesError } = await supabase
      .from('page_views')
      .select('page_name')
      .order('created_at', { ascending: false })
      .limit(1000);

    if (pagesError) console.error('Pages data error:', pagesError);

    // Count page views by page name
    const pageCounts = {};
    pageViewsData?.forEach(view => {
      pageCounts[view.page_name] = (pageCounts[view.page_name] || 0) + 1;
    });

    const topPages = Object.entries(pageCounts)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 5)
      .map(([page_name, views]) => ({ page_name, views }));

    // Get top features
    const { data: featuresData, error: featuresError } = await supabase
      .from('feature_interactions')
      .select('feature_name, action_detail')
      .order('created_at', { ascending: false })
      .limit(1000);

    if (featuresError) console.error('Features data error:', featuresError);

    const featureCounts = {};
    featuresData?.forEach(feature => {
      const key = `${feature.feature_name}|${feature.action_detail}`;
      featureCounts[key] = (featureCounts[key] || 0) + 1;
    });

    const topFeatures = Object.entries(featureCounts)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 10)
      .map(([key, interactions]) => {
        const [feature_name, action_detail] = key.split('|');
        return { feature_name, action_detail, interactions };
      });

    // Get recent inquiries
    const { data: recentInquiries, error: recentError } = await supabase
      .from('inquiries')
      .select('*')
      .order('created_at', { ascending: false })
      .limit(10);

    if (recentError) console.error('Recent inquiries error:', recentError);

    // Get visitor locations
    const { data: locationsData, error: locationsError } = await supabase
      .from('visitors')
      .select('country, city, device_type')
      .order('created_at', { ascending: false })
      .limit(1000);

    if (locationsError) console.error('Locations data error:', locationsError);

    const locationCounts = {};
    locationsData?.forEach(visitor => {
      const key = `${visitor.country}|${visitor.city}|${visitor.device_type}`;
      locationCounts[key] = (locationCounts[key] || 0) + 1;
    });

    const topLocations = Object.entries(locationCounts)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 10)
      .map(([key, visits]) => {
        const [country, city, device_type] = key.split('|');
        return { country, city, device_type, visits };
      });

    const summary = {
      totalVisitors: visitorsCount || 0,
      totalPageViews: pageViewsCount || 0,
      totalInquiries: inquiriesCount || 0,
      topPages: topPages || [],
      topFeatures: topFeatures || [],
      recentInquiries: recentInquiries || [],
      topLocations: topLocations || []
    };

    return summary;
  } catch (err) {
    console.error('Error fetching analytics:', err);
    return {
      totalVisitors: 0,
      totalPageViews: 0,
      totalInquiries: 0,
      topPages: [],
      topFeatures: [],
      recentInquiries: [],
      topLocations: []
    };
  }
};
