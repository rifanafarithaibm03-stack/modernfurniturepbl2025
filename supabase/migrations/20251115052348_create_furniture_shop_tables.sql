/*
  # Furniture Shop Database Schema

  1. New Tables
    - `categories`
      - `id` (uuid, primary key)
      - `name` (text, unique)
      - `description` (text)
      - `slug` (text, unique)
      - `image_url` (text)
      - `created_at` (timestamptz)
    
    - `products`
      - `id` (uuid, primary key)
      - `category_id` (uuid, foreign key to categories)
      - `name` (text)
      - `description` (text)
      - `price` (numeric)
      - `image_url` (text)
      - `features` (text array)
      - `in_stock` (boolean)
      - `slug` (text, unique)
      - `created_at` (timestamptz)

  2. Security
    - Enable RLS on both tables
    - Add policies for public read access (furniture shop is public)

  3. Sample Data
    - Insert sample categories and products for demonstration
*/

CREATE TABLE IF NOT EXISTS categories (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text UNIQUE NOT NULL,
  description text NOT NULL DEFAULT '',
  slug text UNIQUE NOT NULL,
  image_url text NOT NULL DEFAULT '',
  created_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS products (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  category_id uuid NOT NULL REFERENCES categories(id) ON DELETE CASCADE,
  name text NOT NULL,
  description text NOT NULL DEFAULT '',
  price numeric(10,2) NOT NULL,
  image_url text NOT NULL DEFAULT '',
  features text[] DEFAULT '{}',
  in_stock boolean DEFAULT true,
  slug text UNIQUE NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE products ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public can view categories"
  ON categories FOR SELECT
  TO anon
  USING (true);

CREATE POLICY "Public can view products"
  ON products FOR SELECT
  TO anon
  USING (true);

INSERT INTO categories (name, description, slug, image_url) VALUES
  ('Living Room', 'Comfortable and stylish furniture for your living space', 'living-room', 'https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=800'),
  ('Bedroom', 'Create your perfect sanctuary with our bedroom collection', 'bedroom', 'https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=800'),
  ('Dining', 'Elegant dining furniture for memorable meals', 'dining', 'https://images.pexels.com/photos/1395967/pexels-photo-1395967.jpeg?auto=compress&cs=tinysrgb&w=800'),
  ('Office', 'Productive and comfortable workspace solutions', 'office', 'https://images.pexels.com/photos/667838/pexels-photo-667838.jpeg?auto=compress&cs=tinysrgb&w=800');

INSERT INTO products (category_id, name, description, price, image_url, features, in_stock, slug)
SELECT 
  c.id,
  'Modern Velvet Sofa',
  'Luxurious 3-seater sofa with deep cushioning and elegant design',
  1299.99,
  'https://images.pexels.com/photos/1648776/pexels-photo-1648776.jpeg?auto=compress&cs=tinysrgb&w=800',
  ARRAY['Premium velvet fabric', 'Hardwood frame', 'Deep seating', 'Available in 5 colors'],
  true,
  'modern-velvet-sofa'
FROM categories c WHERE c.slug = 'living-room';

INSERT INTO products (category_id, name, description, price, image_url, features, in_stock, slug)
SELECT 
  c.id,
  'Minimalist Coffee Table',
  'Sleek oak coffee table with clean lines and hidden storage',
  449.99,
  'https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg?auto=compress&cs=tinysrgb&w=800',
  ARRAY['Solid oak wood', 'Hidden storage compartment', 'Easy assembly', 'Scratch-resistant finish'],
  true,
  'minimalist-coffee-table'
FROM categories c WHERE c.slug = 'living-room';

INSERT INTO products (category_id, name, description, price, image_url, features, in_stock, slug)
SELECT 
  c.id,
  'Luxury Platform Bed',
  'Contemporary king-size platform bed with upholstered headboard',
  1599.99,
  'https://images.pexels.com/photos/1743231/pexels-photo-1743231.jpeg?auto=compress&cs=tinysrgb&w=800',
  ARRAY['King size', 'Upholstered headboard', 'Solid wood slats', 'No box spring needed'],
  true,
  'luxury-platform-bed'
FROM categories c WHERE c.slug = 'bedroom';

INSERT INTO products (category_id, name, description, price, image_url, features, in_stock, slug)
SELECT 
  c.id,
  'Classic Wooden Dresser',
  '6-drawer dresser with vintage-inspired brass hardware',
  799.99,
  'https://images.pexels.com/photos/1756311/pexels-photo-1756311.jpeg?auto=compress&cs=tinysrgb&w=800',
  ARRAY['6 spacious drawers', 'Solid wood construction', 'Soft-close drawers', 'Brass hardware'],
  true,
  'classic-wooden-dresser'
FROM categories c WHERE c.slug = 'bedroom';

INSERT INTO products (category_id, name, description, price, image_url, features, in_stock, slug)
SELECT 
  c.id,
  'Extendable Dining Table',
  'Beautiful walnut dining table that seats 6-10 guests',
  1199.99,
  'https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=800',
  ARRAY['Extends from 6 to 10 seats', 'Solid walnut', 'Smooth mechanism', 'Easy maintenance'],
  true,
  'extendable-dining-table'
FROM categories c WHERE c.slug = 'dining';

INSERT INTO products (category_id, name, description, price, image_url, features, in_stock, slug)
SELECT 
  c.id,
  'Upholstered Dining Chairs',
  'Set of 4 comfortable dining chairs with elegant fabric',
  599.99,
  'https://images.pexels.com/photos/1027516/pexels-photo-1027516.jpeg?auto=compress&cs=tinysrgb&w=800',
  ARRAY['Set of 4 chairs', 'Padded seats', 'Sturdy wooden legs', 'Stain-resistant fabric'],
  true,
  'upholstered-dining-chairs'
FROM categories c WHERE c.slug = 'dining';

INSERT INTO products (category_id, name, description, price, image_url, features, in_stock, slug)
SELECT 
  c.id,
  'Executive Office Desk',
  'Spacious L-shaped desk with cable management system',
  899.99,
  'https://images.pexels.com/photos/667838/pexels-photo-667838.jpeg?auto=compress&cs=tinysrgb&w=800',
  ARRAY['L-shaped design', 'Cable management', 'Scratch-resistant surface', 'Ample workspace'],
  true,
  'executive-office-desk'
FROM categories c WHERE c.slug = 'office';

INSERT INTO products (category_id, name, description, price, image_url, features, in_stock, slug)
SELECT 
  c.id,
  'Ergonomic Office Chair',
  'Premium mesh chair with lumbar support and adjustable features',
  449.99,
  'https://images.pexels.com/photos/276534/pexels-photo-276534.jpeg?auto=compress&cs=tinysrgb&w=800',
  ARRAY['Adjustable lumbar support', 'Breathable mesh', 'Height adjustable', 'Swivel base'],
  true,
  'ergonomic-office-chair'
FROM categories c WHERE c.slug = 'office';
