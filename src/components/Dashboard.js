import React, { useState, useEffect } from 'react';
import { getAnalyticsSummary } from '../lib/analytics';
import './Dashboard.css';

function Dashboard() {
  const [analytics, setAnalytics] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    loadAnalytics();
    // Refresh analytics every 30 seconds
    const interval = setInterval(loadAnalytics, 30000);
    return () => clearInterval(interval);
  }, []);

  const loadAnalytics = async () => {
    try {
      setLoading(true);
      const data = await getAnalyticsSummary();
      setAnalytics(data);
      setError(null);
    } catch (err) {
      console.error('Error loading analytics:', err);
      setError('Failed to load analytics data');
    } finally {
      setLoading(false);
    }
  };

  if (loading && !analytics) {
    return (
      <div className="dashboard">
        <div className="dashboard-loading">
          <div className="spinner"></div>
          <p>Loading analytics...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="dashboard">
        <div className="dashboard-error">
          <p>❌ {error}</p>
          <button onClick={loadAnalytics}>Retry</button>
        </div>
      </div>
    );
  }

  const conversionRate = analytics.totalInquiries > 0 
    ? ((analytics.totalInquiries / analytics.totalPageViews) * 100).toFixed(2)
    : 0;

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h1>📊 Analytics Dashboard</h1>
        <button onClick={loadAnalytics} className="refresh-btn">
          🔄 Refresh
        </button>
      </div>

      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-icon">👥</div>
          <div className="stat-content">
            <h3>Total Visitors</h3>
            <p className="stat-number">{analytics.totalVisitors}</p>
            <span className="stat-label">Unique visitors</span>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon">👁️</div>
          <div className="stat-content">
            <h3>Page Views</h3>
            <p className="stat-number">{analytics.totalPageViews}</p>
            <span className="stat-label">Total views</span>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon">📧</div>
          <div className="stat-content">
            <h3>Inquiries</h3>
            <p className="stat-number">{analytics.totalInquiries}</p>
            <span className="stat-label">Form submissions</span>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon">📈</div>
          <div className="stat-content">
            <h3>Conversion Rate</h3>
            <p className="stat-number">{conversionRate}%</p>
            <span className="stat-label">Inquiry rate</span>
          </div>
        </div>
      </div>

      <div className="analytics-section">
        <h2>🔥 Top Pages</h2>
        <div className="table-container">
          <table className="analytics-table">
            <thead>
              <tr>
                <th>Page</th>
                <th>Views</th>
                <th>Percentage</th>
              </tr>
            </thead>
            <tbody>
              {analytics.topPages && analytics.topPages.length > 0 ? (
                analytics.topPages.map((page, index) => (
                  <tr key={index}>
                    <td>{page.page_name}</td>
                    <td>{page.views}</td>
                    <td>
                      <div className="percentage-bar">
                        <div 
                          className="percentage-fill" 
                          style={{ 
                            width: `${(page.views / analytics.totalPageViews) * 100}%` 
                          }}
                        ></div>
                        <span>{((page.views / analytics.totalPageViews) * 100).toFixed(1)}%</span>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="3" style={{ textAlign: 'center', padding: '2rem', color: '#64748b' }}>
                    No page views yet
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      <div className="analytics-section">
        <h2>⭐ Popular Features</h2>
        <div className="table-container">
          <table className="analytics-table">
            <thead>
              <tr>
                <th>Feature</th>
                <th>Action</th>
                <th>Interactions</th>
              </tr>
            </thead>
            <tbody>
              {analytics.topFeatures && analytics.topFeatures.length > 0 ? (
                analytics.topFeatures.map((feature, index) => (
                  <tr key={index}>
                    <td>{feature.feature_name}</td>
                    <td className="action-detail">{feature.action_detail}</td>
                    <td>
                      <span className="interaction-badge">{feature.interactions}</span>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="3" style={{ textAlign: 'center', padding: '2rem', color: '#64748b' }}>
                    No feature interactions yet
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      <div className="analytics-section">
        <h2>🌍 Visitor Locations</h2>
        <div className="table-container">
          <table className="analytics-table">
            <thead>
              <tr>
                <th>Country</th>
                <th>City</th>
                <th>Device</th>
                <th>Visits</th>
              </tr>
            </thead>
            <tbody>
              {analytics.topLocations && analytics.topLocations.length > 0 ? (
                analytics.topLocations.map((location, index) => (
                  <tr key={index}>
                    <td>{location.country || 'Unknown'}</td>
                    <td>{location.city || 'Unknown'}</td>
                    <td>
                      <span className="device-badge" data-device={location.device_type}>
                        {location.device_type === 'mobile' ? '📱' : '💻'} {location.device_type || 'unknown'}
                      </span>
                    </td>
                    <td>
                      <span className="interaction-badge">{location.visits}</span>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4" style={{ textAlign: 'center', padding: '2rem', color: '#64748b' }}>
                    No location data yet
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      <div className="analytics-section">
        <h2>📝 Recent Inquiries</h2>
        <div className="table-container">
          <table className="analytics-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Phone</th>
                <th>Message</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {analytics.recentInquiries && analytics.recentInquiries.length > 0 ? (
                analytics.recentInquiries.map((inquiry, index) => (
                  <tr key={index}>
                    <td>{inquiry.name}</td>
                    <td><a href={`tel:${inquiry.phone}`}>{inquiry.phone}</a></td>
                    <td className="message-cell">{inquiry.message}</td>
                    <td className="date-cell">
                      {new Date(inquiry.created_at).toLocaleDateString('en-IN', {
                        day: 'numeric',
                        month: 'short',
                        hour: '2-digit',
                        minute: '2-digit'
                      })}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4" style={{ textAlign: 'center', padding: '2rem', color: '#64748b' }}>
                    No inquiries yet
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      <div className="dashboard-footer">
        <p>Last updated: {new Date().toLocaleString('en-IN')}</p>
      </div>
    </div>
  );
}

export default Dashboard;
