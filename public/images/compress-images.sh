#!/bin/bash

# Image Compression Script for SKMLN Gallery
# This script compresses all images in the public/images folder

echo "🖼️  SKMLN Image Compression Script"
echo "=================================="
echo ""

# Check if ImageMagick is installed
if ! command -v convert &> /dev/null && ! command -v magick &> /dev/null; then
    echo "❌ ImageMagick is not installed."
    echo ""
    echo "Please install it first:"
    echo "  macOS: brew install imagemagick"
    echo "  Linux: sudo apt-get install imagemagick"
    echo ""
    exit 1
fi

# Navigate to images directory
cd "$(dirname "$0")" || exit

# Create backup directory
if [ ! -d "originals" ]; then
    mkdir originals
    echo "📁 Created 'originals' folder for backups"
fi

# Count images
image_count=$(find . -maxdepth 1 \( -iname "*.jpg" -o -iname "*.jpeg" -o -iname "*.png" \) | wc -l)

if [ "$image_count" -eq 0 ]; then
    echo "No images found to compress!"
    exit 0
fi

echo "Found $image_count image(s) to compress"
echo ""

total_before=0
total_after=0

# Process each image
for img in *.{jpg,jpeg,png,JPG,JPEG,PNG}; do
    # Skip if file doesn't exist (handles glob pattern not matching)
    [ -e "$img" ] || continue
    
    # Skip if already processed
    if [ -f "originals/$img" ]; then
        echo "⏭️  Skipping $img (already compressed)"
        continue
    fi
    
    # Get original size
    size_before=$(stat -f%z "$img" 2>/dev/null || stat -c%s "$img" 2>/dev/null)
    size_before_mb=$(echo "scale=2; $size_before/1024/1024" | bc)
    
    # Backup original
    cp "$img" "originals/$img"
    
    # Compress based on file type
    if [[ $img =~ \.(jpg|jpeg|JPG|JPEG)$ ]]; then
        # For JPEG: reduce quality and resize if needed
        convert "$img" -quality 80 -resize '1920x1920>' "$img"
    else
        # For PNG: convert to JPEG and compress
        convert "$img" -quality 80 -resize '1920x1920>' "${img%.*}.jpg"
        rm "$img"
        img="${img%.*}.jpg"
    fi
    
    # Get new size
    size_after=$(stat -f%z "$img" 2>/dev/null || stat -c%s "$img" 2>/dev/null)
    size_after_kb=$(echo "scale=2; $size_after/1024" | bc)
    
    # Calculate savings
    savings=$(echo "scale=1; ($size_before-$size_after)*100/$size_before" | bc)
    
    echo "✅ $img: ${size_before_mb}MB → ${size_after_kb}KB (saved ${savings}%)"
    
    total_before=$((total_before + size_before))
    total_after=$((total_after + size_after))
done

echo ""
echo "=================================="

if [ $total_before -gt 0 ]; then
    total_before_mb=$(echo "scale=2; $total_before/1024/1024" | bc)
    total_after_mb=$(echo "scale=2; $total_after/1024/1024" | bc)
    total_savings=$(echo "scale=1; ($total_before-$total_after)*100/$total_before" | bc)
    
    echo "📊 Total: ${total_before_mb}MB → ${total_after_mb}MB"
    echo "💾 Saved: ${total_savings}%"
    echo ""
    echo "✅ Compression complete!"
    echo "📁 Original images backed up in 'originals/' folder"
else
    echo "No new images were compressed."
fi

echo ""
