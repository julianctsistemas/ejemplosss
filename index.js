const express = require('express');
const app = express();
const path  = require('path');
const hbs = require('hbs');


const port = 8080;

// Definición carpeta documentos estáticos
app.use(express.static('public'));

// Configuración motor de plantillas
app.set('views', path.join(__dirname + '/public/views'));

app.set('view engine', 'hbs');

// Definición ruta de documentos parciales
hbs.registerPartials(__dirname + '/public/views/partials');

app.listen(port, () => {
    console.log('listening on port ' + port);
});

// Página de login

app.get('/', (req, res) => {
    
    res.render('login', { 
        titulo: 'CosmeTIC',
        user_name: 'Julian Carreño', 
        consecutivo: 'Login'
    });
})


// Página de login

app.get('/dashboard', (req, res) => {
    
    res.render('dashboard', { 
        titulo: 'CosmeTIC',
        user_name: 'Julian Carreño', 
        consecutivo: 'Login',
        subtitulo:'Dashboard'
    });
})

// Página de inicio

app.get('/home', (req, res) => {
    
    res.render('home', { 
        titulo : 'CosmeTIC',
        user_name : 'Julian Carreño', 
        consecutivo: 'Home'
    });
})


// Página de Registro de empleado

app.get('/registroEmpleados', (req, res) => {
    
    res.render('registroEmpleados', { 
        titulo : 'CosmeTIC',
        user_name : 'Julian Carreño', 
        consecutivo: 'registroEmpleados',
        subtitulo:'Registro de Empleados'
    });
})

// Página de Registro de producto
app.get('/registroProductos', (req, res) => {
    
    res.render('registroProductos', { 
        titulo : 'CosmeTIC',
        user_name : 'Julian Carreño', 
        consecutivo: 'registroProductos',
        subtitulo:'Registro de Productos'
    });
})




// Página de Empleados

app.get('/empleados', (req, res) => {

    const empleados = [
    { 
        id_Empleado: 1, 
        cedula:11519353,
        nombre_Empleado: 'julian',  
        correo:'julian@gmail.com',
        direccion:'avenida 32#49a-135',
        telefono:'315809981',
        estado_Empleado: 'Activo',
        observacion:'esta laborando actualmente'
    },{ 
        id_Empleado: 2, 
        cedula:11519353,
        nombre_Empleado: 'julian',  
        correo:'julian@gmail.com',
        direccion:'avenida 32#49a-135',
        telefono:'3158099813',
        estado_Empleado: 'Activo',
        observacion:'esta laborando actualmente'
    },{ 
        id_Empleado: 3, 
        cedula:11519353,
        nombre_Empleado: 'julian',  
        correo:'julian@gmail.com',
        direccion:'avenida 32#49a-135',
        telefono:'3158099813',
        estado_Empleado: 'Activo',
        observacion:'esta laborando actualmente'
    }];
    res.render('empleados', { 
        titulo : 'CosmeTIC',
        user_name : 'Julian Carreño', 
        consecutivo: 'Empleados',
        lista_empleados: empleados
    });
})

// Página de Productos

app.get('/productos', (req, res) => {

    const productos = [
    { 
        id_Producto: 1, 
        id_Categoria: 1, 
        nombre_Producto: 'labial',  
        cantidad:6,
        stock_Maximo:30,
        stock_Minimo:10,
        precio_Costo:10000,
        precio_Venta:15000,
        ganancia:5000,
        estado_Producto: 'Activo'
    },{ 
        id_Producto: 1, 
        id_Categoria: 1, 
        nombre_Producto: 'base',  
        cantidad:6,
        stock_Maximo:30,
        stock_Minimo:10,
        precio_Costo:10000,
        precio_Venta:15000,
        ganancia:5000,
        estado_Producto: 'Activo'
    },{ 
        id_Producto: 1, 
        id_Categoria: 1, 
        nombre_Producto: 'pestañina',  
        cantidad:6,
        stock_Maximo:30,
        stock_Minimo:10,
        precio_Costo:10000,
        precio_Venta:15000,
        ganancia:5000,
        estado_Producto: 'Activo'
    }];
    res.render('productos', { 
        titulo : 'CosmeTIC',
        user_name : 'Julian Carreño', 
        consecutivo: 'Productos',
        lista_productos: productos
    });

    
})

//pagina registro Catergoria
app.get('/registrocategorias', (req, res) => {
    
    res.render('registrocategorias', { 
        titulo : 'CosmeTIC',
        user_name : 'Marcela Morales', 
        consecutivo: 'registroCategorias'
    });
})



// pagina de categorias

app.get('/categorias', (req, res) => {

    const Categorias = [
    { 
        id_proveedor: 1,
        nombre_categoria: 'Labiales',  
        estado_categoria: 'Activo',
        observacion:'esta laborando actualmente'
    },{ 
        id_proveedor: 2,
        nombre_categoria: 'Bases',  
        estado_categoria: 'Activo',
        observacion:'esta laborando actualmente'
    },{ 
        id_proveedor: 3,
        nombre_categoria: 'Cuidado Personal',  
        estado_categoria: 'Activo',
        observacion:'esta laborando actualmente'
    }];
    res.render('categorias', { 
        titulo : 'CosmeTIC | Categorias',
        user_name : 'Marcela Morales', 
        consecutivo: 'Categorias',
        lista_categorias: Categorias
    });
})

// compras

app.get('/compras', (req, res) => {

    const compras = [
    { 
        id_compra: 1, 
        id_proveedor: 'Marcela Morales', 
        numero_factura: 1229,  
        fecha_compra:02-05-2023,
        fecha_registro:03-05-2023,
        total_compra:102.000,
        estado_compra: 'Activo'
    },{ 
        id_compra: 2, 
        id_proveedor: 'Natalia Marulanda', 
        numero_factura: 1230,  
        fecha_compra:02-03-2023,
        fecha_registro:03-03-2023,
        total_compra:234.000,
        estado_compra: 'Activo'
    },{ 
        id_compra: 3, 
        id_proveedor: 'Andres Jaramillo', 
        numero_factura: 1231,  
        fecha_compra:05-04-2023,
        fecha_registro:06-04-2023,
        total_compra:420.000,
        estado_compra: 'Activo'
    }];
    res.render('compras', { 
        titulo : 'CosmeTIC | Productos',
        user_name : 'Marcela Morales', 
        consecutivo: 'Compras',
        lista_compras: compras
    });
})

// Página de Compra
app.get('/registrarCompra', (req, res) => {
    
    res.render('registrarCompra', { 
        titulo : 'CosmeTIC',
        user_name : 'Julian Carreño', 
        consecutivo: 'registrarCompra',
        subtitulo:'Registro Compras'
    });
})

//Página de proveeedores
app.get('/proveedores', (req, res) => {

    const proveedores = [
    { 
        id_Proveedor: 1, 
        cedula:634596335,
        nombre_Proveedor: 'Avon',  
        correo:'colanta@gmail.com',
        direccion:'crra 54 #318',
        telefono:'7479316',
        estado_Proveedor: 'Activo',
        observacion:'descripción'
    },{ 
        id_Proveedor: 2, 
        cedula:634354516,
        nombre_Proveedor: 'Coco Chanel',  
        correo:'cocochangmail.com',
        direccion:'Avenida 87 con 80',
        telefono:'85989542',
        estado_Proveedor: 'Activo',
        observacion:'descripción'
    },{ 
        id_Proveedor: 3, 
        cedula:155263435,
        nombre_Proveedor: 'shwarckof',  
        correo:'shwarckof@gmail.com',
        direccion:'Crra 89 #785 b sur',
        telefono:'5846215',
        estado_Proveedor: 'Activo',
        observacion:'descripción'
    }];
    res.render('proveedores', { 
        titulo : 'CosmeTIC',
        user_name : 'Juan Sebastián', 
        consecutivo: 'Proveedores',
        lista_proveedores: proveedores
    });
})

app.get('/registroProveedores', (req, res) => {
    
    res.render('registroProveedores', { 
        titulo : 'CosmeTIC',
        user_name : 'Juan Sebastián', 
        consecutivo: 'registroProveedores',
        subtitulo:'Registro Proveedores'
    });
})

//Página de pagos

app.get('/pagos', (req, res) => {

    const pagos = [
    { 
        id_Pago: 1, 
        nombre_Cliente:'Carlos Castro',
        fecha: '2023-06-03',  
        num_Factura:'00001',
        cantidad_pago:'200000',
        cantidad_restante:'400000',
        total_venta: '600000',
    },{ 
        id_Pago: 2,
        nombre_Cliente:'Maria José',
        fecha: '2023-08-12',  
        num_Factura:'00122',
        cantidad_pago:'500000',
        cantidad_restante:'1000000',
        total_venta: '1500000',
    },{ 
        id_Pago: 3, 
        nombre_Cliente:'Juan Alberto',
        fecha: '2023-15-07',  
        num_Factura:'04521',
        cantidad_pago:'1000000',
        cantidad_restante:'2000000',
        total_venta: '3000000',
    },{ 
        id_Pago: 4, 
        nombre_Cliente:'Ruben Doblas',
        fecha: '2023-12-30',  
        num_Factura:'84521',
        cantidad_pago:'20000000',
        cantidad_restante:'0',
        total_venta: '20000000',
    }
];
    res.render('pagos', { 
        titulo : 'CosmeTIC',
        user_name : 'Juan Sebastián', 
        consecutivo: 'Pagos',
        lista_pagos: pagos
    });
})

app.get('/registroPagos', (req, res) => {
    
    res.render('registroPagos', { 
        titulo : 'CosmeTIC',
        user_name : 'Juan Sebastián', 
        consecutivo: 'registroPagos',
        subtitulo:'Registro Pagos'
    });
})

//pagina de comisioines

app.get('/comisiones', (req, res) => {

    const comisiones = [
    { 
        id_Comision: 1, 
        nombre:'Juan Camilo',
        total_ventas: '3200000',  
        porcentaje:'5',
        comision:160000,
        fecha:'2023-06-31',
        observacion:'descripción'
    },{ 
        id_Comision: 2, 
        nombre:'Juana Maria',
        total_ventas: '5000000',  
        porcentaje:'2',
        comision:100000,
        fecha:'2023-06-31',
        observacion:'descripción'
    },{ 
        id_Comision: 3, 
        nombre:'Jose Jose',
        total_ventas: '1200000',  
        porcentaje:'4',
        comision:48000,
        fecha:'2023-06-31',
        observacion:'descripción'
    }];
    res.render('comisiones', { 
        titulo : 'CosmeTIC',
        user_name : 'Juan Sebastián', 
        consecutivo: 'Comisiones',
        lista_comisiones: comisiones
    });
})

app.get('/registroComisiones', (req, res) => {
    
    res.render('registroComisiones', { 
        titulo : 'CosmeTIC',
        user_name : 'Juan Sebastián', 
        consecutivo: 'registroComisiones',
        subtitulo:'Registro Comisiones'
    });
})



// Página de Usuarios

app.get('/usuarios', (req, res) => {

    const usuarios = [
    { 
        id_Usuario: 1, 
        id_Rol:1,
        id_Empleado: 1,  
        nombre_Usuario:'magasi10',
        correo_Usuario :'mariana@gmail.com',
        estado_Usuario: 'Activo',
        observacion:'esta laborando actualmente'
    },{ 
        id_Usuario: 2, 
        id_Rol:2,
        id_Empleado: 2,  
        nombre_Usuario:'macelita9',
        correo_Usuario :'marcela@gmail.com',
        estado_Usuario: 'Activo',
        observacion:'esta laborando actualmente'
    },{ 
        id_Usuario: 3, 
        id_Rol:3,
        id_Empleado: 3,  
        nombre_Usuario:'julianC1',
        correo_Usuario :'julian@gmail.com',
        estado_Usuario: 'Activo',
        observacion:'esta laborando actualmente'
    }];
    res.render('usuarios', { 
        titulo : 'CosmeTIC',
        user_name : 'Mariana Granados', 
        consecutivo: 'Usuarios',
        lista_usuarios: usuarios
    });
})


// Página de clientes

app.get('/clientes', (req, res) => {

    const clientes = [
    { 
        id_Cliente: 1, 
        nit_O_Cedula_Cliente :1000438876,
        nombre_Cliente: 'Carlos Emilio ',  
        apellido_Cliente:'Jaramillo Caicedo',
        correo_Cliente :'carlos@gmail.com',
        telefono_Cliente: 3218505801,
        direccion_Cliente:'calle 55 #44-56',
        estado_Cliente: 'Activo',
        observacion:'ninguna'
    },{ 
        id_Cliente: 2, 
        nit_O_Cedula_Cliente :9830438876,
        nombre_Cliente: 'Variedades la negra ',  
        apellido_Cliente:'Variedades la negra',
        correo_Cliente :'variedadeslanegra@gmail.com',
        telefono_Cliente: 3218505802,
        direccion_Cliente:'calle 44 #64-56',
        estado_Cliente: 'Activo',
        observacion:'ninguna'
    },{ 
        id_Cliente: 3, 
        nit_O_Cedula_Cliente :9693456723,
        nombre_Cliente: 'Casa de lau ',  
        apellido_Cliente:'Casa de lau',
        correo_Cliente :'casadelau@gmail.com',
        telefono_Cliente: 3218505861,
        direccion_Cliente:'calle 13 #44-56',
        estado_Cliente: 'Activo',
        observacion:'ninguna'
    }];
    res.render('clientes', { 
        titulo : 'CosmeTIC',
        user_name : 'Mariana Granados', 
        consecutivo: 'Clientes',
        lista_clientes: clientes
    });
})


// Página de devoluciones

app.get('/devoluciones', (req, res) => {

    const devoluciones = [
    { 
        id_Devolucion: 1, 
        fecha_Devolucion:'10/05/2023',
        id_Detalle_Venta: 1,  
        id_Producto:1,
        cantidad_Devuelta :1,
        motivo_Devolucion: 'Malo',
        devolver_Inventario:'Si'
    },{ 
        id_Devolucion: 2, 
        fecha_Devolucion:'11/05/2023',
        id_Detalle_Venta: 2,  
        id_Producto:2,
        cantidad_Devuelta :2,
        motivo_Devolucion: 'Malo',
        devolver_Inventario:'Si'
    },{ 
        id_Devolucion: 3, 
        fecha_Devolucion:'12/05/2023',
        id_Detalle_Venta: 3,  
        id_Producto:3,
        cantidad_Devuelta :3,
        motivo_Devolucion: 'Quebrado',
        devolver_Inventario:'Si'
    }];
    res.render('devoluciones', { 
        titulo : 'CosmeTIC',
        user_name : 'Mariana Granados', 
        consecutivo: 'Devoluciones',
        lista_devoluciones: devoluciones
    });
})

// Página de Registro de usuario

app.get('/registroUsuario', (req, res) => {
    
    res.render('registroUsuario', { 
        titulo : 'CosmeTIC',
        user_name : 'Mariana Granados', 
        consecutivo: 'registroUsuario',
        subtitulo:'Registro de Usuario'
    });
})


//Registro de Clientes 
app.get('/registroClientes', (req, res) => {
    
    res.render('registroClientes', { 
        titulo : 'CosmeTIC',
        user_name : 'Mariana Granados', 
        consecutivo: 'registroClientes',
        subtitulo:'Registro Clientes'
    });
})


//Registro de Devoluciones 
app.get('/registroDevoluciones', (req, res) => {
    
    res.render('registroDevoluciones', { 
        titulo : 'CosmeTIC',
        user_name : 'Mariana Granados', 
        consecutivo: 'registroDevoluciones',
        subtitulo:'Registro Devoluciones'
    });
})