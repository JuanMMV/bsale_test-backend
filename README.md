# Bsale test - backend.

Api rest creada con NodeJS, Express y MySQL.

En esta API, el servidor se comunicara con la base de datos mediente el medulo MySQL2.

## Estructura JSON.

Al realizar un peticion HTTP, el servidor retornara un JSON con la siguiente estructura:

```
[
  {
    "id": 5,
    "name": "ENERGETICA MR BIG",
    "price": 1490,
    "discount": 20,
    "image": "https://dojiw2m9tvv09.cloudfront.net/11132/product/misterbig3308256.jpg",
    "category": "bebida energetica"
  }
]
```

- id: id del producto(int)
- name: nombre del producto(varchar)
- price: Pecio del producto(float)
- discount: Porcentaje de decuento del producto(int)
- Image: ulr de la imagen del producto(varchar)
- Category: Nombre de la categoria del producto(varchar)

## GET Products

`http://host:port/api`
retorna todos los productos.

## GET Products For Category

`http://host:port/api/idCategoria `

retorna todos los profuctos que pertenescan a dicha categoria.

```
[
  {
    "id": 47,
    "name": "Maní salado",
    "price": 600,
    "discount": 0,
    "image": "https://dojiw2m9tvv09.cloudfront.net/11132/product/manisaladomp4415.jpg",
    "category": "snack"
  },
  {
    "id": 53,
    "name": "Mani Sin Sal",
    "price": 500,
    "discount": 0,
    "image": "https://dojiw2m9tvv09.cloudfront.net/11132/product/manisinsalmp6988.jpg",
    "category": "snack"
  },
  {
    "id": 54,
    "name": "Papas Fritas Lisas Bolsa Grande",
    "price": 1490,
    "discount": 0,
    "image": "https://dojiw2m9tvv09.cloudfront.net/11132/product/papaslisasgrande7128.jpg",
    "category": "snack"
  },
  {
    "id": 55,
    "name": "Papas Fritas Bolsa Pequeña",
    "price": 500,
    "discount": 0,
    "image": "https://dojiw2m9tvv09.cloudfront.net/11132/product/papaslisas7271.jpg",
    "category": "snack"
  },
  {
    "id": 56,
    "name": "Papas Fritas Tarro",
    "price": 1990,
    "discount": 0,
    "image": "https://dojiw2m9tvv09.cloudfront.net/11132/product/78028005335657432.jpg",
    "category": "snack"
  }
]
```

## GET Products

`http://host:port/api`
retorna todos los productos.
