# Bsale test - backend.

Api rest creada con NodeJS, Express y MySQL.

En esta API, el servidor se comunicara con la base de datos mediente el medulo MySQL2.

## Estructura JSON.

Al realizar un peticion HTTP, el servidor retornara un JSON con la siguiente estructura:

 ### Get Products

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

 ### Get Categories
```
[
  {
    "id": 1,
    "name": "bebida energetica"
  },
  {
    "id": 2,
    "name": "pisco"
  },
  {
    "id": 3,
    "name": "ron"
  },
  {
    "id": 4,
    "name": "bebida"
  },
  {
    "id": 5,
    "name": "snack"
  },
  {
    "id": 6,
    "name": "cerveza"
  },
  {
    "id": 7,
    "name": "vodka"
  }
]
```
- id: id de la categoria(int)
- name: nombre de la categoria(varchar)

## GET Products

`https://bsaletest-backend-production.up.railway.app/api`  
Retorna todos los productos existentes.

```
[
  {
    "id": 5,
    "name": "ENERGETICA MR BIG",
    "price": 1490,
    "discount": 20,
    "image": "https://dojiw2m9tvv09.cloudfront.net/11132/product/misterbig3308256.jpg",
    "category": "bebida energetica"
  },
  {
    "id": 6,
    "name": "ENERGETICA RED BULL",
    "price": 1490,
    "discount": 0,
    "image": "https://dojiw2m9tvv09.cloudfront.net/11132/product/redbull8381.jpg",
    "category": "bebida energetica"
  },
  ...
]
  ```

## GET Categories
`https://bsaletest-backend-production.up.railway.app/api/categories`  
Retorna todas las categorias existentes.
```
[
  {
    "id": 1,
    "name": "bebida energetica"
  },
  {
    "id": 2,
    "name": "pisco"
  },
  {
    "id": 3,
    "name": "ron"
  },
  {
    "id": 4,
    "name": "bebida"
  },
  {
    "id": 5,
    "name": "snack"
  },
  {
    "id": 6,
    "name": "cerveza"
  },
  {
    "id": 7,
    "name": "vodka"
  }
]
```

## GET Products For Category

- `https://bsaletest-backend-production.up.railway.app/api/:idCategoria`  
Retorna todos los profuctos que pertenescan a dicha categoria.  

**Ejemplo:**  
- `https://bsaletest-backend-production.up.railway.app/api/5`  

  Respuesta:
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

## GET  Products For name
- `https://bsaletest-backend-production.up.railway.app/api/search/name`  
Retorna todos los productos que coincidan con el nombre.  

  **Ejemplo :**  
  Desde el front end se envia JSON con la siguiente estructura:
```
...
   body: {
      "name":"papa"
    }
```
  Respuesta:
```
[
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
