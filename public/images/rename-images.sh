#!/bin/bash

# Image Renaming Script for SKMLN Gallery
# Place this script in the public/images folder and run it after adding your images

echo "🏠 SKMLN Image Renaming Script"
echo "================================"
echo ""

# Array of target filenames
declare -a target_names=(
  "building-exterior-1.jpg"
  "building-exterior-2.jpg"
  "building-entrance.jpg"
  "living-room-1.jpg"
  "bedroom-1.jpg"
  "bedroom-2.jpg"
  "bedroom-3.jpg"
  "living-area.jpg"
  "rooftop-1.jpg"
  "rooftop-2.jpg"
)

# Get all image files in the current directory
files=(*.jpg *.jpeg *.png *.JPG *.JPEG *.PNG 2>/dev/null)

# Filter out already renamed files and this script
source_files=()
for file in "${files[@]}"; do
  if [[ ! " ${target_names[@]} " =~ " ${file} " ]] && [[ "$file" != "rename-images.sh" ]]; then
    source_files+=("$file")
  fi
done

echo "Found ${#source_files[@]} image(s) to rename"
echo ""

if [ ${#source_files[@]} -eq 0 ]; then
  echo "No images found to rename!"
  echo "Please add your images to this folder first."
  exit 0
fi

# Display images for user to map
echo "Please match each image to its correct name:"
echo ""

for i in "${!source_files[@]}"; do
  echo "[$((i+1))] ${source_files[$i]}"
done

echo ""
echo "Target names:"
for i in "${!target_names[@]}"; do
  echo "[$((i+1))] ${target_names[$i]}"
done

echo ""
echo "Automatic renaming (renaming in order found):"
echo ""

# Rename files
for i in "${!source_files[@]}"; do
  if [ $i -lt ${#target_names[@]} ]; then
    source="${source_files[$i]}"
    target="${target_names[$i]}"
    
    # Get file extension
    ext="${source##*.}"
    target_base="${target%.*}"
    target_with_ext="${target_base}.${ext}"
    
    echo "Renaming: $source → $target_with_ext"
    mv "$source" "$target_with_ext"
  fi
done

echo ""
echo "✅ Renaming complete!"
echo "Please check the renamed files and refresh your browser."
