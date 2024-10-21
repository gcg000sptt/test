create extension if not exists "pgcrypto"

SET TIMEZONE = 'Asia/Bangkok';

-- CREATE TYPE user_status AS ENUM ('active', 'inactive', 'suspended');
-- CREATE TYPE order_status AS ENUM ('pending', 'processing', 'shipped', 'delivered', 'cancelled');

create table admin_type(
  id uuid primary key default gen_random_uuid(),
  admin_type varchar(50) not null,
  permissions varchar(50) not null,
  created_at timestamp default current_timestamp,
  modified_at timestamp default current_timestamp,
  deleted_at timestamp
);

create table administrators(
  id uuid primary key default gen_random_uuid(),
  type_id uuid,
  username varchar(50) not null unique,
  password text not null,
  last_login timestamp default current_timestamp,
  created_at timestamp default current_timestamp,
  modified_at timestamp default current_timestamp,
  deleted_at timestamp,
  foreign key (type_id) references admin_type(id)
);

create table users(
  id uuid primary key default gen_random_uuid(),
  username varchar(50) not null,
  password text not null,
  first_name varchar(50) not null,
  last_name varchar(50) not null,
  email varchar(50) unique not null unique,
  avatar varchar(100),
  phone_number varchar(10),
  created_at timestamp default current_timestamp,
  modified_at timestamp default current_timestamp,
  deleted_at timestamp
);

create table addresses(
  id uuid primary key default gen_random_uuid(),
  user_id uuid,
  address_line1 varchar(100),
  address_line2 varchar(100),
  country varchar(50),
  city varchar(50),
  postal_code varchar(10),
  phone_number varchar(10),
  created_at timestamp default current_timestamp,
  modified_at timestamp default current_timestamp,
  deleted_at timestamp,
  foreign key (user_id) references users(id)
);

create table payments(
  id uuid primary key default gen_random_uuid(),
  user_id uuid,
  payment_type varchar(25),
  provider varchar(25),
  account_no varchar(25),
  expiry date,
  foreign key (user_id) references users(id)
);

create table discount(
  id uuid primary key default gen_random_uuid(),
  name varchar(100),
  description text,
  discount_percent decimal,
  active boolean,
  created_at timestamp default current_timestamp,
  modified_at timestamp default current_timestamp,
  deleted_at timestamp
);

create table categories(
  id uuid primary key default gen_random_uuid(),
  name varchar(100) not null,
  description text,
  created_at timestamp default current_timestamp,
  modified_at timestamp default current_timestamp,
  deleted_at timestamp
);

create table sub_categories(
  id uuid primary key default gen_random_uuid(),
  parent_id uuid,
  name varchar(100) not null,
  description text,
  created_at timestamp default current_timestamp,
  modified_at timestamp default current_timestamp,
  deleted_at timestamp,
  foreign key (parent_id) references categories(id)
);

create table products(
  id uuid primary key default gen_random_uuid(),
  name varchar(100) not null,
  description text,
  cover_url text,
  categories_id uuid,
  discount_id uuid,
  created_at timestamp default current_timestamp,
  modified_at timestamp default current_timestamp,
  deleted_at timestamp,
  foreign key (categories_id) references sub_categories(id),
  foreign key (discount_id) references discount(id)
);

create table products_sku(
  id uuid primary key default gen_random_uuid(),
  products_id uuid,
  sku varchar(10) not null,
  cover_url text,
  price decimal(10,2) not null,
  quantity int not null,
  created_at timestamp default current_timestamp,
  modified_at timestamp default current_timestamp,
  deleted_at timestamp,
  foreign key (products_id) references products(id)
);

create table reviews(
  id uuid primary key default gen_random_uuid(),
  user_id uuid,
  products_id uuid,
  rating int check (rating between 1 and 5),
  comment text,
  created_at timestamp default current_timestamp,
  modified_at timestamp default current_timestamp,
  deleted_at timestamp,
  foreign key (user_id) references users(id),
  foreign key (products_id) references products(id)
);

create table wishlists(
  id uuid primary key default gen_random_uuid(),
  user_id uuid,
  products_id uuid,
  products_sku_id uuid,
  created_at timestamp default current_timestamp,
  modified_at timestamp default current_timestamp,
  deleted_at timestamp,
  foreign key (user_id) references users(id),
  foreign key (products_id) references products(id),
  foreign key (products_sku_id) references products_sku(id)
);

create table cart(
  id uuid primary key default gen_random_uuid(),
  user_id uuid,
  total int not null,
  created_at timestamp default current_timestamp,
  modified_at timestamp default current_timestamp,
  deleted_at timestamp,
  foreign key (user_id) references users(id)
);

create table cart_item(
  id uuid primary key default gen_random_uuid(),
  quantity int not null,
  cart_id uuid,
  products_id uuid,
  products_sku_id uuid,
  created_at timestamp default current_timestamp,
  modified_at timestamp default current_timestamp,
  deleted_at timestamp,
  foreign key (cart_id) references cart(id),
  foreign key (products_id) references products(id),
  foreign key (products_sku_id) references products_sku(id)
);

create table user_order(
  id uuid primary key default gen_random_uuid(),
  order_date date,
  total_price decimal(10,2),
  user_id uuid,
  user_payment uuid,
  addresses_id uuid,
  created_at timestamp default current_timestamp,
  modified_at timestamp default current_timestamp,
  deleted_at timestamp,
  foreign key (user_id) references users(id),
  foreign key (user_payment) references payments(id),
  foreign key (addresses_id) references addresses(id)
);

create table order_item(
  id uuid primary key default gen_random_uuid(),
  order_id uuid,
  products_id uuid,
  products_sku_id uuid,
  quantity int,
  created_at timestamp default current_timestamp,
  modified_at timestamp default current_timestamp,
  deleted_at timestamp,
  foreign key (order_id) references user_order(id),
  foreign key (products_id) references products(id),
  foreign key (products_sku_id) references products_sku(id)
);

CREATE INDEX idx_products_categories ON products(categories_id);
CREATE INDEX idx_order_user ON user_order(user_id);
CREATE INDEX idx_cart_user ON cart(user_id);
CREATE INDEX idx_wishlist_user ON wishlists(user_id);

--CREATE INDEX idx_order_status ON orders(status);