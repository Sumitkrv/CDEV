#!/usr/bin/env python3
"""
Image Compression Script for EV Website
Compresses all images to be site-friendly and prevents site hanging
"""

import os
from pathlib import Path
from PIL import Image
import sys

def compress_image(input_path, output_path, quality=85, max_width=1920):
    """
    Compress and optimize image for web use
    
    Args:
        input_path: Source image path
        output_path: Destination image path
        quality: JPEG quality (1-100, default 85)
        max_width: Maximum width in pixels (default 1920)
    """
    try:
        with Image.open(input_path) as img:
            # Convert RGBA to RGB if necessary (for JPEG)
            if img.mode in ('RGBA', 'LA', 'P'):
                background = Image.new('RGB', img.size, (255, 255, 255))
                if img.mode == 'P':
                    img = img.convert('RGBA')
                background.paste(img, mask=img.split()[-1] if img.mode in ('RGBA', 'LA') else None)
                img = background
            elif img.mode != 'RGB':
                img = img.convert('RGB')
            
            # Resize if image is too large
            if img.width > max_width:
                ratio = max_width / img.width
                new_height = int(img.height * ratio)
                img = img.resize((max_width, new_height), Image.LANCZOS)
            
            # Save with optimization
            img.save(
                output_path,
                'JPEG',
                quality=quality,
                optimize=True,
                progressive=True
            )
            
            # Get file sizes
            input_size = os.path.getsize(input_path) / (1024 * 1024)  # MB
            output_size = os.path.getsize(output_path) / (1024 * 1024)  # MB
            reduction = ((input_size - output_size) / input_size * 100) if input_size > 0 else 0
            
            return {
                'success': True,
                'input_size': input_size,
                'output_size': output_size,
                'reduction': reduction
            }
    except Exception as e:
        return {
            'success': False,
            'error': str(e)
        }

def main():
    # Define paths
    base_dir = Path(__file__).parent
    public_dir = base_dir / 'public'
    cd_ev_dir = public_dir / 'CD_EV'
    compressed_dir = public_dir / 'CD_EV_compressed'
    
    # Create compressed directory
    compressed_dir.mkdir(exist_ok=True)
    
    # Get all image files
    image_extensions = {'.jpg', '.jpeg', '.png', '.webp'}
    
    # Process PNG images in public root
    print("🔄 Compressing PNG images in public folder...")
    root_images = [f for f in public_dir.iterdir() if f.suffix.lower() in image_extensions and f.is_file()]
    
    for img_path in root_images:
        output_path = compressed_dir / f"{img_path.stem}.jpg"
        print(f"  Processing: {img_path.name}")
        result = compress_image(img_path, output_path)
        
        if result['success']:
            print(f"    ✅ {result['input_size']:.2f}MB → {result['output_size']:.2f}MB ({result['reduction']:.1f}% reduction)")
        else:
            print(f"    ❌ Error: {result['error']}")
    
    # Process CD_EV folder images
    if cd_ev_dir.exists():
        print(f"\n🔄 Compressing images in CD_EV folder...")
        cd_ev_images = [f for f in cd_ev_dir.iterdir() if f.suffix.lower() in image_extensions and f.is_file()]
        
        total_images = len(cd_ev_images)
        total_input_size = 0
        total_output_size = 0
        successful = 0
        
        for idx, img_path in enumerate(cd_ev_images, 1):
            output_path = compressed_dir / f"{img_path.stem}.jpg"
            
            if idx % 10 == 0 or idx == 1:
                print(f"  Progress: {idx}/{total_images} ({idx/total_images*100:.1f}%)")
            
            result = compress_image(img_path, output_path, quality=82, max_width=1920)
            
            if result['success']:
                total_input_size += result['input_size']
                total_output_size += result['output_size']
                successful += 1
            else:
                print(f"    ❌ Failed: {img_path.name} - {result['error']}")
        
        print(f"\n✅ Compression Complete!")
        print(f"   Processed: {successful}/{total_images} images")
        print(f"   Total original size: {total_input_size:.2f}MB")
        print(f"   Total compressed size: {total_output_size:.2f}MB")
        print(f"   Total saved: {total_input_size - total_output_size:.2f}MB ({(total_input_size - total_output_size)/total_input_size*100:.1f}% reduction)")
        print(f"   Output folder: {compressed_dir}")
    else:
        print(f"\n⚠️  CD_EV folder not found at {cd_ev_dir}")

if __name__ == '__main__':
    print("🚀 Starting Image Compression...")
    print("=" * 60)
    main()
    print("=" * 60)
    print("✨ Done! Your images are now site-friendly and won't hang the site!")
