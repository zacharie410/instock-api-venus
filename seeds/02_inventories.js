/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('inventories').del();
  await knex('inventories').insert([
    {
      id: '9b4f79ea-0e6c-4e59-8e05-afd933d0b3d3',
      warehouse_id: '2922c286-16cd-4d43-ab98-c79f698aeab0',
      item_name: 'Television',
      description:
        'This 50", 4K LED TV provides a crystal-clear picture and vivid colors.',
      category: 'Electronics',
      status: 'In Stock',
      quantity: 500,
    },
    {
      id: '83433026-ca32-4c6d-bd86-a39ee8b7303e',
      warehouse_id: '2922c286-16cd-4d43-ab98-c79f698aeab0',
      item_name: 'Gym Bag',
      description:
        'Made out of military-grade synthetic materials, this gym bag is highly durable, water resistant, and easy to clean.',
      category: 'Gear',
      status: 'Out of Stock',
      quantity: 0,
    },
    {
      id: 'a193a6a7-42ab-4182-97dc-555ee85e7486',
      warehouse_id: '2922c286-16cd-4d43-ab98-c79f698aeab0',
      item_name: 'Hoodie',
      description:
        'A simple 100% cotton hoodie, this is an essential piece for any wardrobe.',
      category: 'Apparel',
      status: 'Out of Stock',
      quantity: 0,
    },
    {
      id: '8f16bd30-bab5-40af-aca2-b63d5fdd1acc',
      warehouse_id: '2922c286-16cd-4d43-ab98-c79f698aeab0',
      item_name: 'Keychain',
      description:
        'Made from 100% genuine leather, this keychain will keep your keys organized while keeping a classic, professional look.',
      category: 'Accessories',
      status: 'In Stock',
      quantity: 2000,
    },
    {
      id: 'bdc6bb69-e09c-498d-8abd-be2792504d00',
      warehouse_id: '2922c286-16cd-4d43-ab98-c79f698aeab0',
      item_name: 'Shampoo',
      description: 'Natural shampoo made from 99% biodegradable ingredients.',
      category: 'Health',
      status: 'In Stock',
      quantity: 4350,
    },
    {
      id: '3ce124a4-78b0-4d80-91b9-11f9ced631a7',
      warehouse_id: '2922c286-16cd-4d43-ab98-c79f698aeab0',
      item_name: 'Phone Charger',
      description:
        'This USB-C phone charger features fast charging for the latest devices.',
      category: 'Electronics',
      status: 'In Stock',
      quantity: 10000,
    },
    {
      id: '4dd464d6-90b8-4330-91e0-bd1217811bd9',
      warehouse_id: '2922c286-16cd-4d43-ab98-c79f698aeab0',
      item_name: 'Tent',
      description:
        'Perfect for spring or summer camping, this 1-person tent is easy to pack and has the option to become modular when used with other products.',
      category: 'Gear',
      status: 'In Stock',
      quantity: 800,
    },
    {
      id: 'c0ba64a8-0ecb-4a7d-ab7f-2dbbd1d437b1',
      warehouse_id: '2922c286-16cd-4d43-ab98-c79f698aeab0',
      item_name: 'Winter Jacket',
      description:
        'Made with a durable 100% waterproof shell, and breathable layers without a ton of vents and perforations. breathable layers without a ton of vents and perforations.',
      category: 'Apparel',
      status: 'Out of Stock',
      quantity: 0,
    },
    {
      id: 'd9ef9352-2367-4272-8884-70cf80cb7a38',
      warehouse_id: '2922c286-16cd-4d43-ab98-c79f698aeab0',
      item_name: 'Watch',
      description:
        'Crafted from premium materials including a full-grain leather strap and a stainless steel case, this watch features swiss movement and is waterproof up to 5 ATM.',
      category: 'Accessories',
      status: 'Out of Stock',
      quantity: 0,
    },
    {
      id: 'b70067d1-49c9-4925-b830-67b3e98005d5',
      warehouse_id: '2922c286-16cd-4d43-ab98-c79f698aeab0',
      item_name: 'Soap',
      description:
        'Organic and hypoallergenic, this soap is safe to use for all skin types.',
      category: 'Health',
      status: 'In Stock',
      quantity: 12500,
    },
    {
      id: '7c79d334-6b90-4052-9def-aa9b8519c9fb',
      warehouse_id: '5bf7bd6c-2b16-4129-bddc-9d37ff8539e9',
      item_name: 'Monitor',
      description:
        'A 32" IPS LED ultrawide monitor, perfect for work or gaming.',
      category: 'Electronics',
      status: 'Out of Stock',
      quantity: 0,
    },
    {
      id: 'eafcb711-a726-4b3c-adec-704e3265c47d',
      warehouse_id: '5bf7bd6c-2b16-4129-bddc-9d37ff8539e9',
      item_name: 'Backpack',
      description:
        'This sleek, 40L backpack is completely waterproof making it perfect for adventures or the daily commute.',
      category: 'Gear',
      status: 'Out of Stock',
      quantity: 0,
    },
    {
      id: '72c826ba-fde0-4aae-9aaf-95c6072946cd',
      warehouse_id: '5bf7bd6c-2b16-4129-bddc-9d37ff8539e9',
      item_name: 'T-Shirt',
      description:
        'Breathable, and made of 100% organic cotton, this is an essential piece for any wardrobe',
      category: 'Apparel',
      status: 'Out of Stock',
      quantity: 0,
    },
    {
      id: '019da03d-1162-48a4-ad48-ed655e3d7301',
      warehouse_id: '5bf7bd6c-2b16-4129-bddc-9d37ff8539e9',
      item_name: 'Belt',
      description:
        'Made from 100% full grain leather this belt will go with any dress or casual outfit.',
      category: 'Accessories',
      status: 'Out of Stock',
      quantity: 0,
    },
    {
      id: '705b808f-d8a0-4713-a796-8653c5c5952b',
      warehouse_id: '5bf7bd6c-2b16-4129-bddc-9d37ff8539e9',
      item_name: 'Toothpaste',
      description:
        'This toothpaste is specially formulated to protect enamel and whiten teeth with natural ingredients.',
      category: 'Health',
      status: 'In Stock',
      quantity: 4000,
    },
    {
      id: 'f19b0b8a-9cca-4567-9af7-4016a15e038a',
      warehouse_id: '5bf7bd6c-2b16-4129-bddc-9d37ff8539e9',
      item_name: 'Mouse',
      description:
        'With a 1-month battery life this mouse is perfect for travel and productivity.',
      category: 'Electronics',
      status: 'In Stock',
      quantity: 785,
    },
    {
      id: '2cba0296-c77d-4758-9115-bd98ac18f2c0',
      warehouse_id: '5bf7bd6c-2b16-4129-bddc-9d37ff8539e9',
      item_name: 'Sleeping Bag',
      description:
        'This ultra-light sleeping bag is packed with an eco-friendly fill. Best used in spring or summer temperatures.',
      category: 'Gear',
      status: 'In Stock',
      quantity: 987,
    },
    {
      id: 'e202e167-d242-4d7f-b8fc-68caffef9e01',
      warehouse_id: '5bf7bd6c-2b16-4129-bddc-9d37ff8539e9',
      item_name: 'Windbreaker',
      description:
        'Made from waterproof material, this windbreaker is best layered on top of a sweater to keep warm in inclement conditions.',
      category: 'Apparel',
      status: 'In Stock',
      quantity: 1185,
    },
    {
      id: '079c88df-ed32-4d88-a9b7-eaebc85c4ce2',
      warehouse_id: '5bf7bd6c-2b16-4129-bddc-9d37ff8539e9',
      item_name: 'Water Bottle',
      description:
        'With a 1-litre capacity and BPA-free, this water-bottle is perfect for long days out.',
      category: 'Accessories',
      status: 'Out of Stock',
      quantity: 0,
    },
    {
      id: '56c8e94c-777d-4176-b7fd-02f0806f614a',
      warehouse_id: '5bf7bd6c-2b16-4129-bddc-9d37ff8539e9',
      item_name: 'Protein Powder',
      description:
        '100% natural plant-based protein powder from organic ingredients.',
      category: 'Health',
      status: 'Out of Stock',
      quantity: 0,
    },
    {
      id: '2c0185c7-89ef-48ad-a22f-9fc022a5c90c',
      warehouse_id: '90ac3319-70d1-4a51-b91d-ba6c2464408c',
      item_name: 'Television',
      description:
        'This 50", 4K LED TV provides a crystal-clear picture and vivid colors.',
      category: 'Electronics',
      status: 'Out of Stock',
      quantity: 0,
    },
    {
      id: 'f3e13429-b5e9-4a50-b01c-75fb07cefded',
      warehouse_id: '90ac3319-70d1-4a51-b91d-ba6c2464408c',
      item_name: 'Gym Bag',
      description:
        'Made out of military-grade synthetic materials, this gym bag is highly durable, water resistant, and easy to clean.',
      category: 'Gear',
      status: 'In Stock',
      quantity: 565,
    },
    {
      id: '3b042051-f18c-4a16-a393-68ceba87277a',
      warehouse_id: '90ac3319-70d1-4a51-b91d-ba6c2464408c',
      item_name: 'Hoodie',
      description:
        'A simple 100% cotton hoodie, this is an essential piece for any wardrobe.',
      category: 'Apparel',
      status: 'In Stock',
      quantity: 245,
    },
    {
      id: '4d6ce289-eb58-45a1-bae3-e3874290ee48',
      warehouse_id: '90ac3319-70d1-4a51-b91d-ba6c2464408c',
      item_name: 'Keychain',
      description:
        'Made from 100% genuine leather, this keychain will keep your keys organized while keeping a classic, professional look.',
      category: 'Accessories',
      status: 'Out of Stock',
      quantity: 0,
    },
    {
      id: 'd3c08f85-4570-48e1-88df-610614477359',
      warehouse_id: '90ac3319-70d1-4a51-b91d-ba6c2464408c',
      item_name: 'Shampoo',
      description: 'Natural shampoo made from 99% biodegradable ingredients.',
      category: 'Health',
      status: 'In Stock',
      quantity: 209,
    },
    {
      id: '043a70e2-cf28-4ce1-a9a4-e5b3fac9c593',
      warehouse_id: '90ac3319-70d1-4a51-b91d-ba6c2464408c',
      item_name: 'Phone Charger',
      description:
        'This USB-C phone charger features fast charging for the latest devices.',
      category: 'Electronics',
      status: 'Out of Stock',
      quantity: 0,
    },
    {
      id: '66327933-ce38-47e0-9bfe-5d29048bacae',
      warehouse_id: '90ac3319-70d1-4a51-b91d-ba6c2464408c',
      item_name: 'Tent',
      description:
        'Perfect for spring or summer camping, this 1-person tent is easy to pack and has the option to become modular when used with other products.',
      category: 'Gear',
      status: 'Out of Stock',
      quantity: 0,
    },
    {
      id: '70ca48a6-93e2-4ff0-b3a2-f5a38f1a043e',
      warehouse_id: '90ac3319-70d1-4a51-b91d-ba6c2464408c',
      item_name: 'Winter Jacket',
      description:
        'Made with a durable 100% waterproof shell, and breathable layers without a ton of vents and perforations. ',
      category: 'Apparel',
      status: 'In Stock',
      quantity: 125,
    },
    {
      id: 'e02f302a-c67c-4600-bf12-e364b59b80ea',
      warehouse_id: '90ac3319-70d1-4a51-b91d-ba6c2464408c',
      item_name: 'Watch',
      description:
        'Crafted from premium materials including a full-grain leather strap and a stainless steel case, this watch features swiss movement and is waterproof up to 5 ATM.',
      category: 'Accessories',
      status: 'In Stock',
      quantity: 123,
    },
    {
      id: 'd3d7aa3c-6e27-4ab0-9496-f95faa5042f0',
      warehouse_id: '90ac3319-70d1-4a51-b91d-ba6c2464408c',
      item_name: 'Soap',
      description:
        'Organic and hypoallergenic, this soap is safe to use for all skin types.',
      category: 'Health',
      status: 'In Stock',
      quantity: 863,
    },
    {
      id: '828c12d1-c0dd-4fd4-b8db-ac8eb493f8f8',
      warehouse_id: 'bfc9bea7-66f1-44e9-879b-4d363a888eb4',
      item_name: 'Monitor',
      description:
        'A 32" IPS LED ultrawide monitor, perfect for work or gaming.',
      category: 'Electronics',
      status: 'In Stock',
      quantity: 50,
    },
    {
      id: 'b6abe52c-05be-4c90-b39a-d9decefd4274',
      warehouse_id: 'bfc9bea7-66f1-44e9-879b-4d363a888eb4',
      item_name: 'Backpack',
      description:
        'This sleek, 40L backpack is completely waterproof making it perfect for adventures or the daily commute.',
      category: 'Gear',
      status: 'Out of Stock',
      quantity: 0,
    },
    {
      id: '226fd4a6-863c-459d-b69c-007262a64015',
      warehouse_id: 'bfc9bea7-66f1-44e9-879b-4d363a888eb4',
      item_name: 'T-Shirt',
      description:
        'Breathable, and made of 100% organic cotton, this is an essential piece for any wardrobe',
      category: 'Apparel',
      status: 'Out of Stock',
      quantity: 0,
    },
    {
      id: 'f516e1c9-486a-40c2-9bed-c8eba070f1f6',
      warehouse_id: 'bfc9bea7-66f1-44e9-879b-4d363a888eb4',
      item_name: 'Belt',
      description:
        'Made from 100% full grain leather this belt will go with any dress or casual outfit.',
      category: 'Accessories',
      status: 'Out of Stock',
      quantity: 0,
    },
    {
      id: '5c2000b8-f8c4-461f-935c-66eaeb52c561',
      warehouse_id: 'bfc9bea7-66f1-44e9-879b-4d363a888eb4',
      item_name: 'Toothpaste',
      description:
        'This toothpaste is specially formulated to protect enamel and whiten teeth with natural ingredients.',
      category: 'Health',
      status: 'In Stock',
      quantity: 400,
    },
    {
      id: '0716ecfc-e296-4f9f-906b-45e84030285b',
      warehouse_id: 'bfc9bea7-66f1-44e9-879b-4d363a888eb4',
      item_name: 'Mouse',
      description:
        'With a 1-month battery life this mouse is perfect for travel and productivity.',
      category: 'Electronics',
      status: 'In Stock',
      quantity: 1275,
    },
    {
      id: '9fe106e0-d719-4963-9f5b-c9321b786064',
      warehouse_id: 'bfc9bea7-66f1-44e9-879b-4d363a888eb4',
      item_name: 'Sleeping Bag',
      description:
        'This ultra-light sleeping bag is packed with an eco-friendly fill. Best used in spring or summer temperatures.',
      category: 'Gear',
      status: 'In Stock',
      quantity: 5672,
    },
    {
      id: '4b6a7565-077e-4595-a317-c53095fd5dad',
      warehouse_id: 'bfc9bea7-66f1-44e9-879b-4d363a888eb4',
      item_name: 'Windbreaker',
      description:
        'Made from waterproof material, this windbreaker is best layered on top of a sweater to keep warm in inclement conditions.',
      category: 'Apparel',
      status: 'In Stock',
      quantity: 374,
    },
    {
      id: '9abbf2d2-45d5-463c-8429-ca5454d971d4',
      warehouse_id: 'bfc9bea7-66f1-44e9-879b-4d363a888eb4',
      item_name: 'Water Bottle',
      description:
        'With a 1-litre capacity and BPA-free, this water-bottle is perfect for long days out.',
      category: 'Accessories',
      status: 'In Stock',
      quantity: 9875,
    },
    {
      id: '462e4097-ae85-4771-ba42-d28393e39e03',
      warehouse_id: 'bfc9bea7-66f1-44e9-879b-4d363a888eb4',
      item_name: 'Protein Powder',
      description:
        '100% natural plant-based protein powder from organic ingredients.',
      category: 'Health',
      status: 'Out of Stock',
      quantity: 0,
    },
    {
      id: 'ae986f59-8c40-480c-bd28-ee6068cd3617',
      warehouse_id: '89898957-04ba-4bd0-9f5c-a7aea7447963',
      item_name: 'Television',
      description:
        'This 50", 4K LED TV provides a crystal-clear picture and vivid colors.',
      category: 'Electronics',
      status: 'Out of Stock',
      quantity: 0,
    },
    {
      id: 'd1c7d5b5-129d-44e1-8bda-974a90f4b920',
      warehouse_id: '89898957-04ba-4bd0-9f5c-a7aea7447963',
      item_name: 'Gym Bag',
      description:
        'Made out of military-grade synthetic materials, this gym bag is highly durable, water resistant, and easy to clean.',
      category: 'Gear',
      status: 'In Stock',
      quantity: 1895,
    },
    {
      id: 'cadc66b1-8b45-4499-a44d-fa02f1e01a04',
      warehouse_id: '89898957-04ba-4bd0-9f5c-a7aea7447963',
      item_name: 'Hoodie',
      description:
        'A simple 100% cotton hoodie, this is an essential piece for any wardrobe.',
      category: 'Apparel',
      status: 'Out of Stock',
      quantity: 0,
    },
    {
      id: '94dbc0b0-85a0-4853-9439-616d46d7c662',
      warehouse_id: '89898957-04ba-4bd0-9f5c-a7aea7447963',
      item_name: 'Keychain',
      description:
        'Made from 100% genuine leather, this keychain will keep your keys organized while keeping a classic, professional look.',
      category: 'Accessories',
      status: 'Out of Stock',
      quantity: 0,
    },
    {
      id: '2165edfe-b836-40ce-90cb-3bc9746fe948',
      warehouse_id: '89898957-04ba-4bd0-9f5c-a7aea7447963',
      item_name: 'Shampoo',
      description: 'Natural shampoo made from 99% biodegradable ingredients.',
      category: 'Health',
      status: 'In Stock',
      quantity: 4774,
    },
    {
      id: 'ef53825b-8e42-4525-8357-2981bd9c84f9',
      warehouse_id: '89898957-04ba-4bd0-9f5c-a7aea7447963',
      item_name: 'Phone Charger',
      description:
        'This USB-C phone charger features fast charging for the latest devices.',
      category: 'Electronics',
      status: 'In Stock',
      quantity: 9872,
    },
    {
      id: '5ac5c1fc-7785-4870-85bc-39e07e57863d',
      warehouse_id: '89898957-04ba-4bd0-9f5c-a7aea7447963',
      item_name: 'Tent',
      description:
        'Perfect for spring or summer camping, this 1-person tent is easy to pack and has the option to become modular when used with other products.',
      category: 'Gear',
      status: 'In Stock',
      quantity: 3349,
    },
    {
      id: '9ed031c0-c0ad-4a5d-87f0-9fdb4cf0ff48',
      warehouse_id: '89898957-04ba-4bd0-9f5c-a7aea7447963',
      item_name: 'Winter Jacket',
      description:
        'Made with a durable 100% waterproof shell, and breathable layers without a ton of vents and perforations. ',
      category: 'Apparel',
      status: 'Out of Stock',
      quantity: 0,
    },
    {
      id: 'd0b01bdb-fbde-40c2-90ea-10750db5e442',
      warehouse_id: '89898957-04ba-4bd0-9f5c-a7aea7447963',
      item_name: 'Watch',
      description:
        'Crafted from premium materials including a full-grain leather strap and a stainless steel case, this watch features swiss movement and is waterproof up to 5 ATM.',
      category: 'Accessories',
      status: 'In Stock',
      quantity: 2997,
    },
    {
      id: 'cb460eb8-861a-45e6-8ce8-8ee9b8efabcf',
      warehouse_id: '89898957-04ba-4bd0-9f5c-a7aea7447963',
      item_name: 'Soap',
      description:
        'Organic and hypoallergenic, this soap is safe to use for all skin types.',
      category: 'Health',
      status: 'Out of Stock',
      quantity: 0,
    },
    {
      id: '2c66cfb9-0136-4e79-a6cd-c7802fa245f3',
      warehouse_id: 'ade0a47b-cee6-4693-b4cd-a7e6cb25f4b7',
      item_name: 'Monitor',
      description:
        'A 32" IPS LED ultrawide monitor, perfect for work or gaming.',
      category: 'Electronics',
      status: 'Out of Stock',
      quantity: 0,
    },
    {
      id: '3563eb2f-372d-4cf4-a4d9-cbb7851738d2',
      warehouse_id: 'ade0a47b-cee6-4693-b4cd-a7e6cb25f4b7',
      item_name: 'Backpack',
      description:
        'This sleek, 40L backpack is completely waterproof making it perfect for adventures or the daily commute.',
      category: 'Gear',
      status: 'In Stock',
      quantity: 607,
    },
    {
      id: '98d370dc-6c7c-4bb3-90df-4e7c96fd2bf4',
      warehouse_id: 'ade0a47b-cee6-4693-b4cd-a7e6cb25f4b7',
      item_name: 'T-Shirt',
      description:
        'Breathable, and made of 100% organic cotton, this is an essential piece for any wardrobe',
      category: 'Apparel',
      status: 'In Stock',
      quantity: 1205,
    },
    {
      id: '50b19654-6990-4905-8e6b-933682a8d445',
      warehouse_id: 'ade0a47b-cee6-4693-b4cd-a7e6cb25f4b7',
      item_name: 'Belt',
      description:
        'Made from 100% full grain leather this belt will go with any dress or casual outfit.',
      category: 'Accessories',
      status: 'In Stock',
      quantity: 9863,
    },
    {
      id: '579c61d0-d9f7-422e-8902-6416a2298ff2',
      warehouse_id: 'ade0a47b-cee6-4693-b4cd-a7e6cb25f4b7',
      item_name: 'Toothpaste',
      description:
        'This toothpaste is specially formulated to protect enamel and whiten teeth with natural ingredients.',
      category: 'Health',
      status: 'In Stock',
      quantity: 1230,
    },
    {
      id: '8ea3f172-14d2-4c04-8d9e-528547781516',
      warehouse_id: 'ade0a47b-cee6-4693-b4cd-a7e6cb25f4b7',
      item_name: 'Mouse',
      description:
        'With a 1-month battery life this mouse is perfect for travel and productivity.',
      category: 'Electronics',
      status: 'Out of Stock',
      quantity: 0,
    },
    {
      id: 'f3260a1e-0671-466e-8a3d-e49279ea0a1a',
      warehouse_id: 'ade0a47b-cee6-4693-b4cd-a7e6cb25f4b7',
      item_name: 'Sleeping Bag',
      description:
        'This ultra-light sleeping bag is packed with an eco-friendly fill. Best used in spring or summer temperatures.',
      category: 'Gear',
      status: 'Out of Stock',
      quantity: 0,
    },
    {
      id: '332d998f-24eb-45d4-9559-2535d36f6489',
      warehouse_id: 'ade0a47b-cee6-4693-b4cd-a7e6cb25f4b7',
      item_name: 'Windbreaker',
      description:
        'Made from waterproof material, this windbreaker is best layered on top of a sweater to keep warm in inclement conditions.',
      category: 'Apparel',
      status: 'In Stock',
      quantity: 4508,
    },
    {
      id: '1d62e3c8-68dc-4fcd-8604-d63d950dd4ce',
      warehouse_id: 'ade0a47b-cee6-4693-b4cd-a7e6cb25f4b7',
      item_name: 'Water Bottle',
      description:
        'With a 1-litre capacity and BPA-free, this water-bottle is perfect for long days out.',
      category: 'Accessories',
      status: 'In Stock',
      quantity: 2500,
    },
    {
      id: 'd2e9bca4-0c88-4104-82a6-18eecf49ef07',
      warehouse_id: 'ade0a47b-cee6-4693-b4cd-a7e6cb25f4b7',
      item_name: 'Protein Powder',
      description:
        '100% natural plant-based protein powder from organic ingredients.',
      category: 'Health',
      status: 'Out of Stock',
      quantity: 0,
    },
    {
      id: 'cd12eee6-135a-4356-8641-c7a4ee1c1116',
      warehouse_id: 'bb1491eb-30e6-4728-a5fa-72f89feaf622',
      item_name: 'Television',
      description:
        'This 50", 4K LED TV provides a crystal-clear picture and vivid colors.',
      category: 'Electronics',
      status: 'In Stock',
      quantity: 1300,
    },
    {
      id: 'c1fd4dd3-35dd-444f-90fc-a2583804e8df',
      warehouse_id: 'bb1491eb-30e6-4728-a5fa-72f89feaf622',
      item_name: 'Gym Bag',
      description:
        'Made out of military-grade synthetic materials, this gym bag is highly durable, water resistant, and easy to clean.',
      category: 'Gear',
      status: 'Out of Stock',
      quantity: 0,
    },
    {
      id: '29749454-055c-4013-8d77-3a77a9cbf752',
      warehouse_id: 'bb1491eb-30e6-4728-a5fa-72f89feaf622',
      item_name: 'Hoodie',
      description:
        'A simple 100% cotton hoodie, this is an essential piece for any wardrobe.',
      category: 'Apparel',
      status: 'Out of Stock',
      quantity: 0,
    },
    {
      id: 'f6fbc40a-0471-4557-a073-e7e88ede2ebc',
      warehouse_id: 'bb1491eb-30e6-4728-a5fa-72f89feaf622',
      item_name: 'Keychain',
      description:
        'Made from 100% genuine leather, this keychain will keep your keys organized while keeping a classic, professional look.',
      category: 'Accessories',
      status: 'In Stock',
      quantity: 298,
    },
    {
      id: '2d373704-0ca6-4d7c-ba90-8be47eb47c7c',
      warehouse_id: 'bb1491eb-30e6-4728-a5fa-72f89feaf622',
      item_name: 'Shampoo',
      description: 'Natural shampoo made from 99% biodegradable ingredients.',
      category: 'Health',
      status: 'In Stock',
      quantity: 2888,
    },
    {
      id: '5b03fb06-bbc0-4814-8a12-6f1f4e1223f5',
      warehouse_id: 'bb1491eb-30e6-4728-a5fa-72f89feaf622',
      item_name: 'Phone Charger',
      description:
        'This USB-C phone charger features fast charging for the latest devices.',
      category: 'Electronics',
      status: 'In Stock',
      quantity: 983,
    },
    {
      id: '02a8c481-4474-4bb8-998b-64f206bcefdb',
      warehouse_id: 'bb1491eb-30e6-4728-a5fa-72f89feaf622',
      item_name: 'Tent',
      description:
        'Perfect for spring or summer camping, this 1-person tent is easy to pack and has the option to become modular when used with other products.',
      category: 'Gear',
      status: 'In Stock',
      quantity: 1406,
    },
    {
      id: 'eb647e6c-8673-4520-9155-3cec6f7a120d',
      warehouse_id: 'bb1491eb-30e6-4728-a5fa-72f89feaf622',
      item_name: 'Winter Jacket',
      description:
        'Made with a durable 100% waterproof shell, and breathable layers without a ton of vents and perforations. ',
      category: 'Apparel',
      status: 'Out of Stock',
      quantity: 0,
    },
    {
      id: '4040cfae-39bb-403b-80fa-b770642800b6',
      warehouse_id: 'bb1491eb-30e6-4728-a5fa-72f89feaf622',
      item_name: 'Watch',
      description:
        'Crafted from premium materials including a full-grain leather strap and a stainless steel case, this watch features swiss movement and is waterproof up to 5 ATM.',
      category: 'Accessories',
      status: 'Out of Stock',
      quantity: 0,
    },
    {
      id: '853bcd65-b0b3-4f9c-844f-8b4133d7df6f',
      warehouse_id: 'bb1491eb-30e6-4728-a5fa-72f89feaf622',
      item_name: 'Soap',
      description:
        'Organic and hypoallergenic, this soap is safe to use for all skin types.',
      category: 'Health',
      status: 'Out of Stock',
      quantity: 0,
    },
  ]);
};
