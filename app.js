/* INGNEX: tienda de programas para HP Prime. Generado a partir del diseño. */
(function () {
var __h = preact.h, __F = preact.Fragment, render = preact.render;
var DCLogic = preact.Component;
class Component extends DCLogic {

  money(c) { return 'S/ ' + (c / 100).toFixed(2); }

  norm(t) { return String(t || '').toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, ''); }

  amt(c) { return (c / 100).toFixed(2); }

  catMeta() {
    const B = 'img/';
    return {
      'Ingeniería civil': { color: '#5EC4F0', rgb: '94,196,240', icon: B + 'ic-civ.svg' },
      'Estructuras': { color: '#6E9BFF', rgb: '110,155,255', icon: B + 'ic-est.svg' },
      'Hidráulica y saneamiento': { color: '#2CC9C0', rgb: '44,201,192', icon: B + 'ic-hid.svg' },
      'Vías y transporte': { color: '#F0B357', rgb: '240,179,87', icon: B + 'ic-via.svg' },
      'Topografía': { color: '#8BD17C', rgb: '139,209,124', icon: B + 'ic-top.svg' },
      'Cálculo y análisis': { color: '#B39DFA', rgb: '179,157,250', icon: B + 'ic-cal.svg' },
      'Utilidades': { color: '#F08AA8', rgb: '240,138,168', icon: B + 'ic-uti.svg' }
    };
  }

  meta(cat) {
    const m = this.catMeta()[cat] || this.catMeta()['Ingeniería civil'];
    return { color: m.color, icon: m.icon, tint: 'rgba(' + m.rgb + ',.13)', glow: 'rgba(' + m.rgb + ',.28)', line: 'rgba(' + m.rgb + ',.5)' };
  }

  extras() {
    const T = '[COMPLETAR: ejemplo de uso]';
    return {
      nodo: { benefit: 'Resuelve vigas, pórticos y armaduras planas en minutos.', ex: 'Pórtico de 3 pisos y 2 vanos (ejemplo incluido): reacciones Ry de 21.5, 42.7 y 16.8 tonf, momento máximo de −6.36 tonf·m en la barra B10 y deformada máxima de 1.57 mm.' },
      hcnet: { benefit: 'Resuelve redes cerradas de agua por Hardy Cross en minutos.', ex: 'Ejercicio 1 del manual: red de 4 nudos y 2 mallas con 40 L/s de entrada en A y 20 mca. Converge en la iteración 3: AB lleva 25.98 L/s a 0.80 m/s y las presiones quedan en 17.77, 15.70 y 14.75 mca en B, C y D.' },
      hardy: { benefit: 'Resuelve la distribución de momentos de vigas y pórticos en minutos.', ex: 'Viga continua ABC: el diagrama de momentos marca −30 kN·m en A, 15.38 kN·m en el tramo AB y −15 kN·m en B, con la tabla de distribución completa.' },
      pend: { benefit: 'Resuelve vigas y pórticos por pendiente-deflexión en minutos.', ex: 'Viga de 3 barras en kip·ft: el programa plantea las ecuaciones ΣM en B y en C y las resuelve: EIθB = −90 y EIθC = 78.75.' },
      rigidez: { benefit: 'Resuelve vigas continuas y pórticos por el método de rigidez en minutos.', ex: 'Ejercicio 15-12 de Hibbeler: grados de libertad, matriz K de 3 × 3, reacciones y diagrama de momentos, cada paso en su propia pantalla.' },
      flex: { benefit: 'Resuelve vigas continuas y pórticos por el método de flexibilidad en minutos.', ex: 'Viga continua de tres tramos: matriz de flexibilidad de 2 × 2 y momentos de −28.7 kN·m en los apoyos interiores y 27.55 kN·m en el tramo central.' },
      vigas: { benefit: 'Resuelve la flecha y la pendiente de vigas en minutos.', ex: T },
      porticos: { benefit: 'Resuelve desplazamientos y giros de vigas y pórticos en minutos.', ex: 'Pórtico ABCD con una carga horizontal de 20 kN en B: desplazamiento horizontal del nudo B de 4.2667 mm, con su control por rigidez matricial.' },
      castigliano: { benefit: 'Resuelve deflexiones de armaduras por Castigliano en minutos.', ex: 'Armadura de 3 barras: deflexión del nudo C de 0.2025 mm hacia la derecha, con Σ N·(∂N/∂P)·L = 81 kN·m y AE = 400 000 kN.' },
      tvirtual: { benefit: 'Resuelve desplazamientos de armaduras por trabajo virtual en minutos.', ex: 'Armadura de 3 barras con carga virtual horizontal en C: Σ n·N·L = 81 kN²·m y desplazamiento de 0.2025 mm hacia la derecha.' },
      vigaca: { benefit: 'Resuelve el diseño de vigas de concreto armado en minutos.', ex: 'Viga simple de 6 m, 30 × 60 cm, f\'c = 210 y fy = 4200 kgf/cm²: con Mu = 20.25 tonf·m al centro, el esquema da 6 Ø 5/8" inferiores corridos, 2 Ø 3/4" superiores y estribos de 3/8": 1 @ 5, 12 @ 25.' },
      edif3d: { benefit: 'Resuelve el análisis sísmico de un edificio en minutos.', ex: 'Edificio de 3 pisos con ejes A a D y 1 a 3: pesos por piso de 1227, 1209 y 1011 kN, 3446 kN en total.' },
      caminos: { benefit: 'Resuelve curvas circulares y la transición del peralte en minutos.', ex: 'Curva circular con R = 150 m y Δ = 106.5°: T = 200.874 m, PC en 6+382.056 y PT en 6+660.872; transición del peralte con Lt = 52.36 m.' },
      terraplen: { benefit: 'Resuelve el terraplén por capas en minutos.', ex: 'Con los datos de la especificación del curso: 15 758.42 m³ de corte en cantera, 1 623.21 m³ de agua en obra y 34.2 % de la cantera explotada.' },
      abastos: { benefit: 'Resuelve un sistema de abastecimiento de agua en minutos.', ex: 'Proyecto de ejemplo: población futura de 16 957 hab al 2037 (método aritmético), Qmd = 38.27 L/s, Qmh = 52.99 L/s, HDT de 57.3 m y reservorio de 690 m³.' },
      redagua: { benefit: 'Resuelve redes de agua a presión en minutos.', ex: 'Ejemplo incluido: red de 9 nudos, 14 tubos y 2 reservorios. El resultado muestra el caudal de cada tubo en L/s y si la red cumple la norma OS.050.' },
      alcant: { benefit: 'Resuelve el diseño de colectores de alcantarillado en minutos.', ex: 'Ejemplo incluido: red de 7 buzones y 6 colectores. El diseño entrega colectores de 200 mm con su pendiente, su tirante y el perfil longitudinal.' },
      hoja: { benefit: 'Lleva tus hojas de cálculo a la HP Prime en minutos.', ex: 'Ejemplo incluido Curva masa con área media: la celda F19 calcula ((D18+D19)/2)*C19 y el diagrama de masas se grafica en la misma calculadora.' },
      fotos: { benefit: 'Lleva tus fotos y apuntes a la HP Prime en minutos.', ex: 'La demo incluida trae 5 fotos de ejemplo listas para ver en la galería, a pantalla completa y con zoom.' }
    };
  }

  catalog() {
    const B = 'img/';
    const EST = 'Estructuras', HID = 'Hidráulica y saneamiento', VIA = 'Vías y transporte', CAL = 'Cálculo y análisis', UTI = 'Utilidades';
    const T = '[COMPLETAR]';
    const list = [
      { id: 'nodo', name: 'Nodo A', code: 'NODO_A2', ver: '2.0', cat: EST, civil: true, price: 1999, ts: 1793596092, img: B + 'nodo.png',
        alts: ['Diagrama de momentos de un pórtico en Nodo A', 'Modelo de un pórtico de 3 pisos en Nodo A', 'Deformada del pórtico en Nodo A'],
        short: 'Arma vigas, pórticos y armaduras con el dedo y obtén reacciones y diagramas N, V y M.',
        desc: 'Analiza vigas, pórticos y armaduras planas por rigidez matricial 2D. Dibujas la estructura en la pantalla y el programa calcula reacciones, fuerzas internas, deformada y deflexiones.',
        problem: 'Resolver una estructura plana a mano y dibujar sus diagramas toma tiempo, y un signo equivocado cambia todo el resultado.',
        inputs: ['Nudos y barras dibujados en la pantalla', 'Apoyos y rótulas', 'Cargas en nudos, distribuidas, puntuales y momentos'],
        results: ['Reacciones en los apoyos', 'Diagramas N, V y M con valores en extremos, máximos y mínimos', 'Deformada y deflexiones', '54 ranuras de guardado con nombre'],
        guarda: 'NODOA_GUARDA', fn: 'NodoA2()', rel: ['porticos', 'rigidez', 'hardy'] },
      { id: 'hcnet', name: 'HCNET / Cross Redes', code: 'CROSSREDES', ver: '1.2', cat: HID, civil: true, price: 1999, ts: 1793662686, img: B + 'hcnet.png', logo: B + 'hcnet-logo.png',
        alts: ['Esquema de una red con los caudales calculados en Cross Redes', 'Red de cuatro nudos y dos mallas dibujada en Cross Redes', 'Verificaciones de pérdida, velocidad y presión en Cross Redes'],
        short: 'Resuelve redes cerradas de agua por Hardy Cross y revisa la tabla de cada iteración.',
        desc: 'Hardy Cross por mallas en redes cerradas de agua: reparto inicial guiado, tabla de cada iteración, verificaciones y tabla de presiones. Puedes dibujar la red con el dedo.',
        problem: 'Iterar una red cerrada a mano significa repetir la misma tabla varias veces sin equivocarse en un solo caudal.',
        inputs: ['Nudos: cota, demanda, entrada de caudal y presión conocida', 'Tramos: diámetro, longitud y C', 'Mallas, escritas por ti o armadas automáticamente', 'Reparto inicial de caudales, guiado o recomendado'],
        results: ['Tabla de cada iteración con hp, hp/Q y dQ', 'Verificaciones de pérdida, velocidad y presión', 'Tabla de presiones por nudo', 'Esquema con caudales y presiones'],
        note: 'Hasta 26 nudos, 40 tramos y 8 mallas.',
        guarda: 'CROSSREDES_GUARDA', fn: 'CrossRedesApp()', rel: ['redagua', 'abastos', 'alcant'] },
      { id: 'hardy', name: 'Hardy Cross', code: 'HARDYPANEL', ver: '1.2', cat: EST, civil: true, price: 1999, ts: 1793669818, img: B + 'hardy.png',
        alts: ['Diagrama de momentos de una viga en Hardy Cross', 'Tabla de distribución de momentos en Hardy Cross', 'Diagrama de cortante en Hardy Cross'],
        short: 'Distribución de momentos en vigas y pórticos, con la tabla del método y los diagramas V y M.',
        desc: 'Método de Cross (distribución de momentos) para vigas y pórticos. Muestra la tabla de distribución y los diagramas de cortante y momento con sus valores.',
        problem: 'La tabla de distribución de momentos es larga y un error en un ciclo se arrastra hasta el final.',
        inputs: ['Barras, apoyos y rótulas', 'Cargas en barras (q, P y M) y en nudos'],
        results: ['Tabla de distribución de momentos', 'Diagramas de cortante V y momento M', 'Reacciones', '54 ranuras de guardado con nombre'],
        guarda: 'HARDYPANEL_GUARDA', fn: 'Hpan()', rel: ['pend', 'rigidez', 'nodo'] },
      { id: 'pend', name: 'Pendiente-Deflexión', code: 'PENDPANEL', ver: '2.0', cat: EST, civil: true, price: 1999, ts: 1793423592, img: B + 'pend.png',
        alts: ['Diagrama de momentos de un pórtico con ladeo', 'Ecuaciones del método de pendiente-deflexión', 'Diagrama de momentos de una viga continua'],
        short: 'Plantea y resuelve las ecuaciones de pendiente-deflexión, con ladeo y asentamientos.',
        desc: 'Método de pendiente-deflexión para vigas y pórticos, incluidos los casos con ladeo y con asentamientos de apoyo. Muestra las ecuaciones y los diagramas.',
        problem: 'Plantear y resolver a mano las ecuaciones de pendiente-deflexión consume buena parte del tiempo de un examen.',
        inputs: ['Barras, apoyos y cargas', 'Asentamientos de apoyo', T + ': otros datos'],
        results: ['Ecuaciones del método y su solución', 'Momentos finales', 'Diagramas V y M y reacciones'],
        guarda: 'PENDPANEL_GUARDA', fn: 'Ppan()', rel: ['hardy', 'rigidez', 'flex'] },
      { id: 'rigidez', name: 'Rigidez', code: 'RIGIDEZ', ver: '1.0', cat: EST, civil: true, price: 1999, ts: 1793507523, img: B + 'rigidez.png',
        alts: ['Diagrama de momentos por el método de rigidez', 'Matriz K de la estructura', 'Modelo de una viga en Rigidez'],
        short: 'Método de rigidez paso a paso para vigas continuas y pórticos 2D, como se resuelve en clase.',
        desc: 'Método de rigidez para vigas continuas y pórticos 2D. Recorre los pasos del método: grados de libertad, matriz k de cada barra, matriz K de la estructura y fuerzas de empotramiento.',
        problem: 'Ensamblar matrices de rigidez a mano es lento y propenso a errores de signo y de índice.',
        inputs: ['Nudos, barras y apoyos', 'Propiedades E e I de las barras', 'Cargas'],
        results: ['Grados de libertad numerados', 'Matriz k de cada barra y matriz K de la estructura', 'Reacciones y diagramas V, M y N', 'Deformada'],
        note: 'Comparte las ranuras de guardado con Flexibilidad.',
        guarda: 'RIGFLEX_GUARDA', fn: 'Rigi()', rel: ['flex', 'nodo', 'pend'] },
      { id: 'flex', name: 'Flexibilidad', code: 'FLEXIBILIDAD', ver: '1.0', cat: EST, civil: true, price: 1999, ts: 1793507523, img: B + 'flex.png',
        alts: ['Diagrama de momentos por el método de flexibilidad', 'Matriz de flexibilidad F', 'Modelo de una viga continua en Flexibilidad'],
        short: 'Método de flexibilidad para vigas continuas y pórticos 2D, con cada paso a la vista.',
        desc: 'Método de flexibilidad (de las fuerzas) para vigas continuas y pórticos 2D. Muestra el grado de indeterminación, la estructura primaria, los diagramas y la matriz de flexibilidad.',
        problem: 'El método de flexibilidad exige varios diagramas e integrales por cada redundante.',
        inputs: ['Nudos, barras y apoyos', 'Propiedades E e I de las barras', 'Cargas'],
        results: ['Grado de indeterminación y estructura primaria', 'Diagramas M0 y m de cada redundante', 'Matriz de flexibilidad F', 'Reacciones y diagramas V, M y N'],
        note: 'Comparte las ranuras de guardado con Rigidez.',
        guarda: 'RIGFLEX_GUARDA', fn: 'Flexi()', rel: ['rigidez', 'pend', 'hardy'] },
      { id: 'vigas', name: 'Vigas', code: 'VIGASV2', ver: '2.0', cat: EST, civil: true, price: 1999, ts: 0, img: '',
        alts: [],
        short: 'Flecha y pendiente de vigas por trabajo virtual y Castigliano.',
        desc: 'Calcula la flecha y la pendiente de vigas por trabajo virtual y por el teorema de Castigliano.',
        problem: 'Calcular flechas y pendientes a mano obliga a integrar diagramas en cada ejercicio.',
        inputs: [T + ': datos que ingresa el usuario'],
        results: ['Flecha y pendiente en el punto elegido', T + ': otros resultados'],
        guarda: 'VIGAS_GUARDA', fn: '', rel: ['porticos', 'castigliano', 'tvirtual'] },
      { id: 'porticos', name: 'Pórticos', code: 'PORTICOS2', ver: '2.0', cat: EST, civil: true, price: 1999, ts: 1793577925, img: B + 'porticos.png',
        alts: ['Diagrama de momentos de un pórtico', 'Pórtico dibujado con su carga', 'Desplazamiento calculado en un nudo'],
        short: 'Desplazamientos y giros de vigas y pórticos por trabajo virtual y Castigliano.',
        desc: 'Desplazamientos y giros de vigas y pórticos por trabajo virtual y por Castigliano. Eliges el punto del resultado y ves los diagramas reales y virtuales.',
        problem: 'Hallar un desplazamiento por trabajo virtual implica integrar M y m en cada barra.',
        inputs: ['Dibujo de la estructura, apoyos y rótulas', 'Cargas y propiedades E, I y A', 'Punto donde se pide el resultado'],
        results: ['Desplazamiento o giro en el punto elegido', 'Diagramas M, V, N y m', 'Deformada', '54 ranuras de guardado con nombre'],
        guarda: 'PORTICOS_GUARDA', fn: 'Port2()', rel: ['vigas', 'castigliano', 'nodo'] },
      { id: 'castigliano', name: 'Castigliano', code: 'CASTIGLIANO2', ver: '2.0', cat: EST, civil: true, price: 1999, ts: 1793596140, img: B + 'castigliano.png',
        alts: ['Fuerzas axiales de una armadura', 'Tabla del método de Castigliano', 'Deflexión calculada en un nudo'],
        short: 'Deflexiones de armaduras 2D por el teorema de Castigliano, con la tabla del método.',
        desc: 'Deflexiones de armaduras 2D por el teorema de Castigliano. Muestra la tabla por barra y la deflexión en el punto y la dirección que elijas.',
        problem: 'Derivar la energía respecto a P en cada barra de una armadura es largo y repetitivo.',
        inputs: ['Armadura, apoyos y cargas en nudos', 'A y E generales o por barra', 'Punto y dirección de la deflexión'],
        results: ['Tabla del método por barra', 'Deflexión en el punto elegido', 'Fuerzas axiales N y reacciones'],
        guarda: 'CASTIGLIANO_GUARDA', fn: 'Casti2()', rel: ['tvirtual', 'porticos', 'nodo'] },
      { id: 'tvirtual', name: 'Trabajo Virtual', code: 'TRABAJOVIRTUAL2', ver: '2.0', cat: EST, civil: true, price: 1999, ts: 1793578711, img: B + 'tvirtual.png',
        alts: ['Armadura Warren con sus cargas', 'Tabla del método de trabajo virtual', 'Desplazamiento calculado en un nudo'],
        short: 'Desplazamientos de armaduras 2D por trabajo virtual, con la tabla n·N·L lista.',
        desc: 'Desplazamientos de armaduras 2D por el método del trabajo virtual. Eliges el nudo y la dirección de la carga virtual y ves la tabla del método.',
        problem: 'La tabla de trabajo virtual crece con cada barra y cualquier error cambia el desplazamiento.',
        inputs: ['Armadura, apoyos y cargas en nudos', 'Carga virtual: nudo y dirección', 'A y E por barra'],
        results: ['Tabla del método por barra', 'Desplazamiento en el nudo elegido', 'Fuerzas axiales N y reacciones'],
        guarda: 'TRABAJOVIRTUAL_GUARDA', fn: 'Virt2()', rel: ['castigliano', 'porticos', 'nodo'] },
      { id: 'vigaca', name: 'Viga CA', code: 'VIGACA', ver: '1.0', cat: EST, civil: true, price: 1999, ts: 1793249517, img: B + 'vigaca.png',
        alts: ['Esquema de una viga con su acero y estribos', 'Pantalla principal de Viga CA', 'Resultados de flexión de una viga'],
        short: 'Diseña vigas rectangulares de concreto armado y mira el acero dibujado en la pantalla.',
        desc: 'Diseño de vigas rectangulares de concreto armado: flexión, corte (estribos y zonas de confinamiento), torsión, anclajes y empalmes, deflexiones y fisuración, con un esquema de la viga y su acero.',
        problem: 'Diseñar una viga implica revisar flexión, corte, torsión, anclajes y servicio, cada uno con sus propias fórmulas.',
        inputs: ['Luz y apoyos', 'Cargas y momentos', 'Armadura'],
        results: ['Diseño por flexión', 'Corte: estribos y zonas de confinamiento', 'Torsión, anclajes y empalmes', 'Deflexiones y fisuración', 'Esquema de la viga con su acero'],
        note: 'Norma usada: propuesta E.060 de 2019.',
        guarda: 'CONCRETO_GUARDA', fn: 'VigaCAApp()', rel: ['nodo', 'edif3d', 'hardy'] },
      { id: 'edif3d', name: 'Edif3D', code: 'EDIF3D', ver: '1.1', cat: EST, civil: true, price: 1999, soon: true, ts: 1793682252, img: B + 'edif3d.png',
        alts: ['Vista 3D de un edificio en Edif3D', 'Planta del edificio con sus losas', 'Tabla de pesos y masas por piso'],
        short: 'Análisis sísmico de edificios 3D con la norma E.030-2018, en la pantalla de tu calculadora.',
        desc: 'Análisis sísmico de edificios 3D con la norma E.030-2018. Modelas el edificio por pisos y ejes y revisas los resultados en vistas 3D, planta y elevación.',
        problem: 'El análisis sísmico de un edificio no se resuelve a mano en un tiempo razonable.',
        inputs: ['Pisos, ejes y secciones', 'Losas', T + ': parámetros sísmicos'],
        results: ['Pesos y masas por piso', 'Formas modales y derivas', 'Diagramas de pórticos', T + ': otros resultados'],
        guarda: 'EDIF3D_GUARDA', fn: 'Edif()', rel: ['vigaca', 'nodo', 'rigidez'] },
      { id: 'caminos', name: 'Caminos', code: 'CAMINOS2', ver: '2.0', cat: VIA, civil: true, price: 1999, ts: 1793576305, img: B + 'caminos.png',
        alts: ['Gráfico de una curva circular con sus elementos', 'Pantalla de inicio de Caminos con cuatro módulos', 'Secciones de la transición del peralte'],
        short: 'Curva circular, transición del peralte y memoria de cálculo, con las fórmulas del curso a la mano.',
        desc: 'Biblioteca de fórmulas del curso de Diseño Geométrico de Carreteras, curva circular simple, transición del peralte y memoria de cálculo.',
        problem: 'Las fórmulas del diseño geométrico son muchas y la memoria de cálculo debe seguir un formato.',
        inputs: ['Curva: sentido, ángulo Δ, radio y progresiva del PI', 'Peralte: V, B, e y n'],
        results: ['Elementos de la curva, con gráfico y pasos', 'Transición del peralte por secciones', 'Biblioteca de fórmulas con sus valores', 'Memoria de cálculo'],
        guarda: 'CAMINOS_GUARDA', fn: 'Cam2()', rel: ['terraplen', 'hoja', 'abastos'] },
      { id: 'terraplen', name: 'Terraplén', code: 'TERRAPLEN2', ver: '2.0', cat: VIA, civil: true, price: 1999, ts: 1793669864, img: B + 'terraplen.png',
        alts: ['Sección transversal del terraplén con corona y cuerpo', 'Pantalla de inicio de Terraplén con seis módulos', 'Gráfico de volúmenes por capa'],
        short: 'Terraplén por capas con corrección por sobretamaño: volúmenes, agua, transporte y cantera.',
        desc: 'Terraplén por capas con corrección por sobretamaño, para el curso Caminos II. Calcula el volumen de corte en cantera, el agua en obra, el transporte y el porcentaje de cantera explotada.',
        problem: 'La corrección por sobretamaño encadena muchos valores intermedios por cada capa.',
        inputs: ['Granulometría de la cantera y propiedades del suelo', 'Corona, talud, longitud y espesores', 'Volquete, cisterna, distancia y costo'],
        results: ['Volumen de corte en cantera y agua en obra', 'Transporte: volquetes, cisternas y costo', 'Porcentaje de cantera explotada', 'Memoria de cálculo paso a paso'],
        guarda: 'TERRAPLEN_GUARDA', fn: 'Terra2()', rel: ['caminos', 'hoja', 'abastos'] },
      { id: 'abastos', name: 'Abastos', code: 'ABASTOS2', ver: '2.0', cat: HID, civil: true, price: 1999, ts: 1793576306, img: B + 'abastos.png',
        alts: ['Pantalla de inicio de Abastos con sus siete módulos', 'Resultados del volumen del reservorio', 'Perfil de la línea de conducción'],
        short: 'Un sistema de abastecimiento de agua completo en siete módulos que se pasan los datos entre sí.',
        desc: 'Sistema de abastecimiento de agua en siete módulos: población, caudales, conducción, impulsión, reservorio, golpe de ariete y sistema de localidades.',
        problem: 'Un sistema de abastecimiento encadena población, caudales, conducción, impulsión y reservorio; cambiar un dato obliga a rehacer todo.',
        inputs: ['Población: censos y método de proyección', 'Dotación, coeficientes y pérdidas', 'Perfil de la línea de conducción', 'Datos de bombeo y del reservorio'],
        results: ['Población futura por cuatro métodos', 'Caudales Qprom, Qmd, Qmh y de diseño', 'Conducción por Hazen-Williams con su gradiente', 'Impulsión: diámetro, HDT y potencia', 'Reservorio y golpe de ariete'],
        guarda: 'ABASTOS_GUARDA', fn: 'Abast2()', rel: ['hcnet', 'redagua', 'alcant'] },
      { id: 'redagua', name: 'Red Agua', code: 'REDAGUA', ver: '2.0', cat: HID, civil: true, price: 1999, ts: 1793059249, img: B + 'redagua.png',
        alts: ['Esquema de una red con caudales en cada tramo', 'Pantalla de edición de Red Agua', 'Perfil de presiones de la ruta crítica'],
        short: 'Calcula redes de agua a presión con tuberías, bombas y válvulas, y revisa la norma OS.050.',
        desc: 'Redes de distribución de agua a presión con tuberías, bombas y válvulas. Calcula caudal, velocidad, pérdida de carga y presión con Hazen-Williams, por el método del gradiente o por Hardy Cross.',
        problem: 'Una red con bombas y válvulas no se resuelve a mano en un tiempo razonable.',
        inputs: ['Nudos: cota y demanda', 'Tanques y tramos: longitud, diámetro, material y C', 'Bombas y válvulas'],
        results: ['Caudal, velocidad y pérdida en cada tramo', 'Presión en cada nudo (m.c.a.)', 'Avisos de la norma OS.050', 'Perfil de la ruta crítica y gráficos'],
        guarda: 'REDAGUA_GUARDA', fn: 'RedAguaApp()', rel: ['hcnet', 'abastos', 'alcant'] },
      { id: 'alcant', name: 'Alcantarillado', code: 'ALCANT', ver: '1.2', cat: HID, civil: true, price: 1999, ts: 1793669272, img: B + 'alcant.png',
        alts: ['Esquema de colectores coloreado por tirante', 'Esquema de la red con longitudes y cotas', 'Perfil longitudinal de la ruta más larga'],
        short: 'Diseña o verifica colectores por gravedad y revisa tirante, velocidad y fuerza tractiva.',
        desc: 'Diseño o verificación de colectores de alcantarillado por gravedad, con Darcy-Weisbach o Manning (OS.070), esquema de la red y perfil longitudinal.',
        problem: 'Cada colector exige iterar tirante, velocidad y fuerza tractiva, y además revisar cotas y cobertura.',
        inputs: ['Buzones: cotas y aportes', 'Colectores: longitud y conexiones', 'Parámetros y límites'],
        results: ['Caudal acumulado, diámetro, pendiente y tirante y/D', 'Velocidad y fuerza tractiva', 'Cotas de fondo y cobertura', 'Perfil longitudinal'],
        guarda: 'ALCANT_GUARDA', fn: 'AlcantApp()', rel: ['hcnet', 'redagua', 'abastos'] },
      { id: 'hoja', name: 'Hoja', code: 'HOJA', ver: '3.0d', cat: CAL, civil: false, price: 2599, soon: true, ts: 1793686002, img: B + 'hoja.png', kw: 'excel hoja de calculo',
        alts: ['Diagrama de masas graficado en Hoja', 'Hoja de cálculo con el ejemplo de curva masa', 'Editor de fórmulas con teclado'],
        short: 'Una hoja de cálculo táctil en tu HP Prime, que abre tus libros de Excel convertidos en la PC.',
        desc: 'Hoja de cálculo táctil para la HP Prime: celdas con fórmulas, copiar y rellenar, varias hojas, gráficos, ordenar y buscar objetivo. Abre libros de Excel convertidos con la herramienta de PC incluida.',
        problem: 'Tus hojas de cálculo se quedan en la PC justo cuando las necesitas.',
        inputs: ['Datos y fórmulas en celdas', 'Libros de Excel convertidos con ExcelAHoja en tu PC'],
        results: ['Fórmulas calculadas en la calculadora', 'Gráficos', 'Varias hojas por libro', '54 ranuras de guardado'],
        install: ['Convierte tus libros de Excel en la PC con ExcelAHoja y abre HP Connectivity Kit con tu HP Prime conectada.', 'Arrastra HOJA y HOJA_LIBROS a Programas. Solo la primera vez, arrastra también HOJA_GUARDA: ahí se guardan tus libros.', 'Escribe HojaApp() en Inicio y presiona Enter.'],
        rel: ['caminos', 'terraplen', 'fotos'] },
      { id: 'fotos', name: 'Fotos', code: 'FOTOS_HP', ver: '2.0', cat: UTI, civil: false, price: 999, ts: 1792427723, img: B + 'fotos.png', kw: 'galeria imagenes visor',
        alts: ['Galería de miniaturas en Fotos', 'Visor con barra de botones', 'Foto a pantalla completa'],
        short: 'Lleva fotos, apuntes y láminas en tu HP Prime: galería, visor, presentación y zoom.',
        desc: 'Galería y visor de fotos para la HP Prime. Preparas tus fotos en la PC con la herramienta incluida y las ves en la calculadora con galería, visor a pantalla completa, presentación y zoom.',
        problem: 'La HP Prime no tiene cámara ni WiFi, así que no hay una forma directa de llevar tus imágenes.',
        inputs: ['Tus fotos, preparadas en la PC con FotosHP (Windows)'],
        results: ['Galería con miniaturas', 'Visor a pantalla completa', 'Presentación y zoom'],
        install: ['Abre FotosHP.exe en tu PC, agrega tus fotos y pulsa Crear programas para la Prime.', 'Con HP Connectivity Kit, arrastra FOTOS_HP y FOTOS_DAT a la calculadora.', 'Abre con Shift + 1 > FOTOS_HP > Ejecutar, o escribe Fotos() en Inicio.'],
        rel: ['hoja', 'nodo', 'abastos'] }
    ];
    const ex = this.extras();
    const pr = this.cfgPrices();
    return list.map(function (p) {
      Object.assign(p, ex[p.id] || {});
      p.listPrice = p.price; p.oldPrice = 0;
      const o = pr[p.id];
      if (o && o.precio > 0) { p.listPrice = o.precio; p.price = o.oferta || o.precio; p.oldPrice = o.oferta ? o.precio : 0; }
      return p;
    });
  }

  packsData() {
    const pr = this.cfgPrices();
    return this._packsBase().map(function (k) {
      const o = pr[k.id];
      if (o && o.precio > 0) { k.price = o.oferta || o.precio; k.oldPrice = o.oferta ? o.precio : 0; }
      return k;
    });
  }

  _packsBase() {
    return [
      { id: 'pack:estructuras', name: 'Pack Estructuras', cat: 'Estructuras', price: 4999, items: ['hardy', 'pend', 'rigidez', 'flex', 'castigliano', 'nodo'] },
      { id: 'pack:saneamiento', name: 'Pack Saneamiento', cat: 'Hidráulica y saneamiento', price: 2699, items: ['hcnet', 'alcant'] }
    ];
  }

  pmap() {
    const m = {};
    this.catalog().forEach(function (p) { m[p.id] = p; });
    return m;
  }

  installSteps(p) {
    if (p.install) return p.install;
    return [
      'Conecta tu HP Prime a la PC y abre HP Connectivity Kit.',
      'Arrastra ' + p.code + ' a Programas.' + (p.guarda ? ' Solo la primera vez, arrastra también ' + p.guarda + ': ahí se guardan tus trabajos y no se reinstala.' : ''),
      p.fn ? 'Abre con Shift + 1 > ' + p.code + ' > Ejecutar, o escribe ' + p.fn + ' en Inicio.' : 'Abre con Shift + 1 > ' + p.code + ' > Ejecutar.'
    ];
  }

  cartCalc(cart) {
    const map = this.pmap();
    const packs = this.packsData();
    const lines = [];
    let subtotal = 0, discount = 0;
    (cart || []).forEach(function (id) {
      if (String(id).indexOf('pack:') === 0) {
        const k = packs.filter(function (x) { return x.id === id; })[0];
        if (!k) return;
        const sum = k.items.reduce(function (a, pid) { return a + map[pid].price; }, 0);
        subtotal += sum;
        discount += sum - k.price;
        lines.push({ id: id, name: k.name, sub: k.items.map(function (pid) { return map[pid].name; }).join(', '), price: k.price, was: sum });
      } else if (map[id]) {
        subtotal += map[id].price;
        lines.push({ id: id, name: map[id].name, sub: map[id].code, price: map[id].price, was: 0 });
      }
    });
    return { lines: lines, subtotal: subtotal, discount: discount, total: subtotal - discount };
  }

  inAnyPack(cart, pid) {
    const packs = this.packsData();
    return (cart || []).some(function (id) {
      const k = packs.filter(function (x) { return x.id === id; })[0];
      return !!k && k.items.indexOf(pid) >= 0;
    });
  }

  st() {
    return Object.assign({
      demoPhase: 'idle', demoStep: 0, demoTab: 0,
      cats: [], price: '', sort: 'rel', q: '', showAll: false, filtersOpen: false, packFilter: '',
      cart: [], cartOpen: false, detailId: '', dpImg: 0, toast: '',
      ck: false, ckStep: 1, ckMode: 'crear', ckErr: '', ckNote: '', ckModel: '', ckMethod: '', ckEmail: '', ckDmail: '', ckSerial: '', voucher: '', capture: '', order: null, resent: false,
      sent: false, leadName: '', leadEmail: '', leadErr: '', leadBusy: false,
      cp: null, cps: [], cfg: null, cpErr: '', slRemote: null, slBusy: false, adPrices: null, adAj: null, adVend: null, adLoading: '', sellerOpen: false, sellerId: '', sellerErr: '', adminOpen: false, adminTab: 'orders', adminErr: '', adminMsg: '',
      policyOpen: false, mDays: 30, mRemote: null, mErr: '', mLoading: false,
      termsOpen: false, privOpen: false, noticeOpen: false,
      ckName: '', ckProof: null, trackOpen: false, trOrder: null, trErr: '', trMethod: '', trProof: null, trSent: false, trBusy: false,
      oFilter: 'por_verificar', oRemote: null, oErr: '', oLoading: false, oRejecting: '', oZoom: '', adminBusy: '',
      vendSent: false, vendErr: '', vendName: ''
    }, this.state || {});
  }

  val(id) {
    const el = document.getElementById(id);
    return el ? String(el.value || '').trim() : '';
  }

  setVal(id, v) {
    const el = document.getElementById(id);
    if (el) el.value = v;
  }

  isMail(t) { return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(t); }

  say(msg) {
    const self = this;
    if (self._toastT) clearTimeout(self._toastT);
    self.setState({ toast: msg });
    self._toastT = setTimeout(function () { if (!self._dead) self.setState({ toast: '' }); }, 2600);
  }

  addProduct(id) {
    const s = this.st();
    const p = this.pmap()[id];
    if (!p) return;
    if (p.soon) { this.say(p.name + ' estará disponible pronto.'); return; }
    if (s.cart.indexOf(id) >= 0) { this.say(p.name + ' ya está en tu carrito.'); return; }
    if (this.inAnyPack(s.cart, id)) { this.say(p.name + ' ya está en un pack de tu carrito.'); return; }
    this.setState({ cart: s.cart.concat([id]) });
    this.say('Agregado al carrito: ' + p.name);
    this.track('carrito', { p: id });
  }

  addPack(id) {
    const s = this.st();
    const k = this.packsData().filter(function (x) { return x.id === id; })[0];
    if (!k) return;
    if (s.cart.indexOf(id) >= 0) { this.say(k.name + ' ya está en tu carrito.'); return; }
    const rest = s.cart.filter(function (c) { return k.items.indexOf(c) < 0; });
    this.setState({ cart: rest.concat([id]) });
    this.say('Agregado al carrito: ' + k.name);
    this.track('carrito', { p: id });
  }

  removeLine(id) {
    const s = this.st();
    this.setState({ cart: s.cart.filter(function (c) { return c !== id; }) });
  }

  shopClosed() {
    return this.props.tiendaAbierta === false && !this.db().settings.adminKey;
  }

  openCheckout(extraId) {
    const s = this.st();
    if (this.shopClosed()) { this.say('Estamos preparando la tienda. Muy pronto podrás comprar.'); return; }
    let cart = s.cart;
    const xp = extraId ? this.pmap()[extraId] : null;
    if (xp && xp.soon) { this.say(xp.name + ' estará disponible pronto.'); return; }
    if (extraId && cart.indexOf(extraId) < 0 && !this.inAnyPack(cart, extraId)) cart = cart.concat([extraId]);
    if (!cart.length) { this.say('Tu carrito está vacío.'); return; }
    this.track('checkout');
    this.setState({ cart: cart, ck: true, cartOpen: false, detailId: '', filtersOpen: false, ckStep: 1, ckErr: '', ckNote: '', order: null, resent: false });
  }

  closeCheckout() {
    const s = this.st();
    this.setVal('ix-ck-pass', '');
    this.setState({ ck: false, ckErr: '', ckNote: '', ckStep: s.ckStep === 4 ? 1 : s.ckStep });
  }

  ckAccount() {
    const mail = this.val('ix-ck-email');
    const pass = this.val('ix-ck-pass');
    if (!this.isMail(mail)) { this.setState({ ckErr: 'Escribe un correo válido para tu cuenta.' }); return; }
    if (pass.length < 8) { this.setState({ ckErr: 'La contraseña debe tener al menos 8 caracteres.' }); return; }
    if (!this.val('ix-ck-dmail')) this.setVal('ix-ck-dmail', mail);
    this.setState({ ckEmail: mail, ckStep: 2, ckErr: '', ckNote: '' });
  }

  copy(text, label) {
    const self = this;
    try {
      navigator.clipboard.writeText(text)
        .then(function () { self.say(label + ' copiado: ' + text); })
        .catch(function () { self.say('No se pudo copiar. ' + label + ': ' + text); });
    } catch (e) {
      self.say('No se pudo copiar. ' + label + ': ' + text);
    }
  }

  viewIncluded(id) {
    const self = this;
    self.setVal('ix-q', '');
    self.setState({ packFilter: id, cats: [], price: '', q: '', showAll: true, detailId: '', cartOpen: false });
    setTimeout(function () {
      const el = document.getElementById('programas');
      if (el && el.scrollIntoView) el.scrollIntoView({ behavior: self.reducedMotion() ? 'auto' : 'smooth', block: 'start' });
    }, 40);
  }

  ckDelivery() {
    const s = this.st();
    const name = this.val('ix-ck-name');
    const mail = this.val('ix-ck-dmail');
    const serial = this.val('ix-ck-serial');
    if (name.length < 3) { this.setState({ ckErr: 'Escribe tu nombre completo.' }); return; }
    if (!this.isMail(mail)) { this.setState({ ckErr: 'Escribe el correo donde quieres recibir el programa.' }); return; }
    if (!s.ckModel) { this.setState({ ckErr: 'Elige el modelo de tu calculadora.' }); return; }
    if (serial.length < 6) { this.setState({ ckErr: 'Escribe el número de serie de tu HP Prime. Abajo te mostramos dónde encontrarlo.' }); return; }
    this.setState({ ckName: name, ckDmail: mail, ckSerial: serial.toUpperCase(), ckStep: 3, ckErr: '' });
  }

  postSheet(data) {
    const url = this.props.sheetsUrl;
    if (!url) return Promise.resolve(false);
    return fetch(url, { method: 'POST', mode: 'no-cors', headers: { 'Content-Type': 'text/plain;charset=utf-8' }, body: JSON.stringify(data) })
      .then(function () { return true; });
  }

  // Llamada que necesita leer la respuesta de la hoja (acciones de administración y consultas).
  callSheet(data) {
    const url = this.props.sheetsUrl;
    if (!url) return Promise.reject(new Error('sin hoja'));
    return fetch(url, { method: 'POST', body: JSON.stringify(data) }).then(function (r) { return r.json(); });
  }

  // Lee la captura o el voucher: las imágenes se reducen para que pesen poco; un PDF se guarda si pesa menos de 1.5 MB.
  readProof(e, target) {
    const self = this;
    const f = e && e.target && e.target.files && e.target.files[0];
    const patch = {};
    if (!f) { patch[target] = null; self.setState(patch); return; }
    const done = function (data) { patch[target] = { name: f.name, data: data }; self.setState(patch); };
    try {
      const rd = new FileReader();
      if (/^image\//.test(f.type)) {
        rd.onload = function () {
          const img = new Image();
          img.onload = function () {
            try {
              const k = Math.min(1, 1100 / Math.max(img.width, img.height));
              const cv = document.createElement('canvas');
              cv.width = Math.round(img.width * k); cv.height = Math.round(img.height * k);
              cv.getContext('2d').drawImage(img, 0, 0, cv.width, cv.height);
              done(cv.toDataURL('image/jpeg', 0.75));
            } catch (err) { done(''); }
          };
          img.onerror = function () { done(''); };
          img.src = rd.result;
        };
        rd.readAsDataURL(f);
      } else if (f.size < 1500000) {
        rd.onload = function () { done(String(rd.result || '')); };
        rd.readAsDataURL(f);
      } else {
        done('');
      }
    } catch (err) { done(''); }
  }

  expandPrograms(lines) {
    const map = this.pmap();
    const packs = this.packsData();
    const out = [];
    (lines || []).forEach(function (l) {
      const k = packs.filter(function (x) { return x.id === l.id; })[0];
      const ids = k ? k.items : [l.id];
      ids.forEach(function (pid) { if (map[pid] && !out.some(function (o) { return o.id === pid; })) out.push({ id: pid, name: map[pid].name, code: map[pid].code }); });
    });
    return out;
  }

  ckConfirm() {
    const s = this.st();
    if (this.shopClosed()) { this.setState({ ckErr: 'Estamos preparando la tienda. Muy pronto podrás comprar.' }); return; }
    const m = this.payMethods().filter(function (x) { return x.id === s.ckMethod; })[0];
    if (!m) { this.setState({ ckErr: 'Elige Yape, Plin o transferencia bancaria.' }); return; }
    const op = this.val('ix-ck-op');
    const proof = s.ckProof;
    if (op.length < 4 && !(proof && proof.name)) { this.setState({ ckErr: 'Envía el número de operación o captura de tu pago.' }); return; }
    const acc = document.getElementById('ix-ck-accept');
    if (!acc || !acc.checked) { this.setState({ ckErr: 'Para continuar, acepta los Términos y condiciones y la Política de privacidad.' }); return; }
    const calc = this.cartCalc(s.cart);
    if (!calc.lines.length) { this.setState({ ckErr: 'Tu carrito está vacío.' }); return; }
    const cps = this.cpsValid(s.cps, calc);
    const cpDisc = this.cpDiscOf(calc, cps);
    const total = Math.max(0, calc.total - cpDisc);
    const cpVal = this.cpValue();
    const lineOf = function (id) { return calc.lines.filter(function (l) { return l.id === id; })[0] || { name: id, price: 0 }; };
    const cpCodes = cps.map(function (c) { return c.code + ' (' + lineOf(c.line).name + ')'; }).join(', ');
    const cpTypes = cps.map(function (c) { return c.type === 'seller' ? 'Vendedor' : 'Comprador'; }).join(', ');
    const d = new Date();
    const pad = function (x) { return (x < 10 ? '0' : '') + x; };
    const num = 'INX-' + String(d.getFullYear()).slice(2) + pad(d.getMonth() + 1) + pad(d.getDate()) + '-' + Math.floor(1000 + Math.random() * 9000);
    const progs = this.expandPrograms(calc.lines);
    const now = d.toISOString();
    const rec = {
      num: num, fecha: now, estado: 'por_verificar', nombre: s.ckName, correoCuenta: s.ckEmail, correo: s.ckDmail,
      modelo: ({ g1: 'HP Prime G1', g2: 'HP Prime G2', virtual: 'HP Prime Virtual' })[s.ckModel] || 'HP Prime', serie: s.ckSerial,
      items: calc.lines.map(function (l) { return { name: l.name, sub: l.sub }; }), programas: progs.map(function (p) { return { name: p.name, code: p.code }; }),
      subtotal: calc.subtotal, descPack: calc.discount, codigo: cpCodes, tipoCodigo: cpTypes, descCodigo: cpDisc,
      total: total, metodo: m.label, operacion: op, captura: proof && proof.data ? proof.data : '', capturaNombre: proof ? proof.name : '',
      motivo: '', entregado: '', historial: [{ t: now, txt: 'Comprobante recibido. Pago por verificar.' }]
    };
    this.setVal('ix-ck-pass', '');
    this.setVal('ix-ck-op', '');
    this.setState({
      ckStep: 4, ckErr: '', cart: [], cp: null, cps: [], cpErr: '', ckProof: null,
      order: { num: num, lines: calc.lines, subtotal: calc.subtotal, discount: calc.discount, cpDisc: cpDisc, cpCode: cps.map(function (c) { return c.code; }).join(', '), total: total, mail: s.ckDmail, method: m.label, op: op }
    });
    this.track('pedido', { n: total });
    const self2 = this;
    const cpUsed = cps[0] || null;
    this.dbSet(function (db) {
      if (!Array.isArray(db.orders)) db.orders = [];
      db.orders.unshift(rec);
      if (cpUsed) {
        db.codes.forEach(function (c) { if (c.code === cpUsed.code) c.uses = (c.uses || 0) + 1; });
        // El crédito del vendedor queda pendiente hasta que lo apruebes en Administración.
        if (cpUsed.type === 'seller') db.sales.unshift({ id: self2.uid('v'), order: num, code: cpUsed.code, sellerId: cpUsed.sellerId, total: total, date: now, status: 'pendiente' });
      }
    });
    try {
      this.postSheet({
        tipo: 'pedido', pedido: num, nombre: rec.nombre, correoCuenta: rec.correoCuenta, correoEntrega: rec.correo,
        modelo: rec.modelo, serie: rec.serie,
        productos: calc.lines.map(function (l) { return l.name + ' (' + l.sub + ')'; }).join('; '),
        programas: progs.map(function (p) { return p.name + ' (' + p.code + ')'; }).join('; '),
        subtotal: this.amt(calc.subtotal), descuento: this.amt(calc.discount), total: this.amt(total),
        codigo: rec.codigo, tipoCodigo: rec.tipoCodigo, descuentoCodigo: this.amt(cpDisc),
        lineas: JSON.stringify(calc.lines.map(function (l) { return { id: l.id, p: l.price }; })),
        detalleCodigos: JSON.stringify(cps.map(function (c) { const l = lineOf(c.line); return { c: c.code, id: c.line, n: l.name, p: l.price, d: Math.min(cpVal, l.price) }; })),
        metodo: m.label, operacion: op, comprobante: rec.capturaNombre, captura: rec.captura
      }).catch(function () { /* el pedido sigue en pantalla y por WhatsApp */ });
    } catch (e) { /* sin conexión a la hoja */ }
  }

  payMethods() {
    return [
      { id: 'yape', label: 'Yape', kind: 'wallet' },
      { id: 'plin', label: 'Plin', kind: 'wallet' },
      { id: 'transfer', label: 'Transferencia bancaria', kind: 'bank' }
    ];
  }

  statusInfo(st, mail) {
    const I = {
      por_verificar: { admin: 'Pendiente de verificación', buyer: 'Estamos verificando tu pago', color: '#F2C879' },
      verificado: { admin: 'Pago verificado', buyer: 'Pago verificado. Tu programa será enviado a tu correo', color: '#6CC9F2' },
      enviado: { admin: 'Programa enviado', buyer: 'Tu programa fue enviado a ' + (mail || 'tu correo'), color: '#3DE0B8' },
      rechazado: { admin: 'Comprobante rechazado', buyer: 'Tu comprobante fue rechazado', color: '#F2A65A' }
    };
    return I[st] || I.por_verificar;
  }

  orders() {
    const s = this.st();
    if (s.oRemote) return s.oRemote;
    const db = this.db();
    return Array.isArray(db.orders) ? db.orders : [];
  }

  setOrderLocal(num, fn) {
    this.dbSet(function (db) {
      (db.orders || []).forEach(function (o) { if (o.num === num) fn(o); });
    });
  }

  patchRemoteOrder(num, fn) {
    const s = this.st();
    if (!s.oRemote) return;
    const copy = JSON.parse(JSON.stringify(s.oRemote));
    copy.forEach(function (o) { if (o.num === num) fn(o); });
    this.setState({ oRemote: copy });
  }

  loadRemoteOrders() {
    const self = this;
    const key = self.db().settings.adminKey;
    if (!self.props.sheetsUrl || !key) { self.setState({ oRemote: null, oErr: '' }); return; }
    self.setState({ oLoading: true, oErr: '' });
    self.callSheet({ tipo: 'admin', accion: 'pedidos', clave: key })
      .then(function (r) {
        if (!r || !r.ok) { self.setState({ oLoading: false, oRemote: null, oErr: (r && r.error) || 'La hoja no devolvió pedidos.' }); return; }
        self.setState({ oLoading: false, oRemote: r.pedidos || [], oErr: '' });
      })
      .catch(function () { self.setState({ oLoading: false, oRemote: null, oErr: 'No se pudo leer la hoja. Se muestran los pedidos de este navegador.' }); });
  }

  // Acciones del administrador. Con la hoja conectada, el cambio se hace allá primero (con tu clave);
  // en la vista previa solo cambia en este navegador y no se envía ningún correo.
  adminAction(num, accion, motivo) {
    const self = this;
    const now = new Date().toISOString();
    const o = self.orders().filter(function (x) { return x.num === num; })[0];
    if (!o) return;
    if (accion === 'enviar' && o.estado !== 'verificado') { self.setState({ adminErr: 'Primero verifica el pago del pedido ' + num + '.', adminMsg: '' }); return; }
    const apply = function (x, resp) {
      if (accion === 'verificar') { x.estado = 'verificado'; x.motivo = ''; if (resp && resp.carpeta) x.carpeta = resp.carpeta; x.historial = (x.historial || []).concat([{ t: now, txt: 'Pago verificado.' }]); }
      if (accion === 'rechazar') { x.estado = 'rechazado'; x.motivo = motivo; x.historial = (x.historial || []).concat([{ t: now, txt: 'Comprobante rechazado: ' + motivo }]); }
      if (accion === 'enviar') { x.estado = 'enviado'; x.entregado = (resp && resp.fecha) || now; x.historial = (x.historial || []).concat([{ t: x.entregado, txt: 'Programa enviado a ' + x.correo + '.' }]); }
    };
    const okMsg = accion === 'verificar' ? 'Pago verificado. Se creó la carpeta del pedido ' + num + ' en tu Drive: sube ahí el programa cifrado para la serie ' + o.serie + ' y luego toca Enviar programa.'
      : (accion === 'rechazar' ? 'Comprobante del pedido ' + num + ' rechazado. El comprador podrá subir uno nuevo.' : 'Tu programa fue enviado a ' + o.correo + '.');
    const key = self.db().settings.adminKey;
    if (self.props.sheetsUrl && key) {
      const payload = { tipo: 'admin', accion: accion, clave: key, pedido: num, motivo: motivo || '' };
      if (accion === 'enviar') {
        payload.programas = (o.programas || []).map(function (p) {
          const prod = self.catalog().filter(function (c) { return c.code === p.code; })[0];
          return { code: p.code, name: p.name, instrucciones: prod ? self.installSteps(prod) : [] };
        });
      }
      self.setState({ adminBusy: num, adminErr: '', adminMsg: '' });
      self.callSheet(payload)
        .then(function (r) {
          if (!r || !r.ok) { self.setState({ adminBusy: '', adminErr: (r && r.error) || 'La hoja no confirmó la acción.' }); return; }
          self.patchRemoteOrder(num, function (x) { apply(x, r); });
          self.setOrderLocal(num, function (x) { apply(x, r); });
          self.setState({ adminBusy: '', adminMsg: okMsg, oRejecting: '' });
        })
        .catch(function () { self.setState({ adminBusy: '', adminErr: 'No se pudo conectar con la hoja. No se hizo ningún cambio.' }); });
      return;
    }
    self.setOrderLocal(num, function (x) { apply(x, null); });
    self.setState({ adminMsg: okMsg + (accion === 'enviar' ? ' (Vista previa: no se envió ningún correo.)' : ''), adminErr: '', oRejecting: '' });
  }

  trackLookup() {
    const self = this;
    const num = self.val('ix-tr-num').toUpperCase().replace(/\s+/g, '');
    const mail = self.val('ix-tr-mail').toLowerCase();
    if (!num || !self.isMail(mail)) { self.setState({ trErr: 'Escribe tu número de pedido y el correo que usaste en la compra.', trOrder: null }); return; }
    const local = (self.db().orders || []).filter(function (o) { return o.num === num && String(o.correo).toLowerCase() === mail; })[0];
    if (self.props.sheetsUrl) {
      self.setState({ trBusy: true, trErr: '' });
      self.callSheet({ tipo: 'estado', pedido: num, correo: mail })
        .then(function (r) {
          if (r && r.ok && r.pedido) self.setState({ trBusy: false, trOrder: r.pedido, trErr: '' });
          else if (local) self.setState({ trBusy: false, trOrder: local, trErr: '' });
          else self.setState({ trBusy: false, trOrder: null, trErr: 'No encontramos un pedido con ese número y ese correo.' });
        })
        .catch(function () { self.setState({ trBusy: false, trOrder: local || null, trErr: local ? '' : 'No pudimos consultar tu pedido. Escríbenos por WhatsApp.' }); });
      return;
    }
    if (!local) { self.setState({ trErr: 'No encontramos un pedido con ese número y ese correo.', trOrder: null }); return; }
    self.setState({ trOrder: local, trErr: '' });
  }

  trackResubmit() {
    const self = this;
    const s = self.st();
    const o = s.trOrder;
    if (!o) return;
    const m = self.payMethods().filter(function (x) { return x.id === s.trMethod; })[0];
    if (!m) { self.setState({ trErr: 'Elige Yape, Plin o transferencia bancaria.' }); return; }
    const op = self.val('ix-tr-op');
    const proof = s.trProof;
    if (op.length < 4 && !(proof && proof.name)) { self.setState({ trErr: 'Envía el número de operación o captura de tu pago.' }); return; }
    const now = new Date().toISOString();
    const upd = function (x) {
      x.estado = 'por_verificar'; x.metodo = m.label; x.operacion = op; x.motivo = '';
      x.captura = proof && proof.data ? proof.data : ''; x.capturaNombre = proof ? proof.name : '';
      x.historial = (x.historial || []).concat([{ t: now, txt: 'Nuevo comprobante recibido. Pago por verificar.' }]);
    };
    const copy = JSON.parse(JSON.stringify(o));
    upd(copy);
    self.setOrderLocal(o.num, upd);
    try { self.postSheet({ tipo: 'comprobante', pedido: o.num, correo: o.correo, metodo: m.label, operacion: op, comprobante: copy.capturaNombre, captura: copy.captura }).catch(function () {}); } catch (e) { /* sin hoja */ }
    self.setVal('ix-tr-op', '');
    self.setState({ trOrder: copy, trProof: null, trErr: '', trSent: true });
  }

  orderVals(s) {
    const self = this;
    const accent = self.props.accent || '#0096D6';
    const PROOFS = function (o) {
      const d = o.captura || '';
      const isImg = /^data:image\//.test(d);
      const isLink = /^https?:\/\//.test(d);
      return { img: isImg ? d : '', hasImg: isImg, link: isLink ? d : '', hasLink: isLink, hasPdf: /^data:application\/pdf/.test(d), none: !d, name: o.capturaNombre || '' };
    };
    const fmtT = function (iso) {
      if (!iso) return '';
      const d = new Date(iso);
      return isNaN(d) ? String(iso) : self.fmtDate(iso) + ' ' + d.toLocaleTimeString('es-PE', { hour: '2-digit', minute: '2-digit' });
    };
    const methodBtns = function (key, setter) {
      return self.payMethods().map(function (m) {
        const on = key === m.id;
        return { label: m.label, pressed: on, bg: on ? accent : 'transparent', fg: on ? '#06121C' : '#C9D5E2', bd: on ? accent : '#2E3F53', pick: function () { setter(m.id); } };
      });
    };

    /* Pago en el checkout */
    const ckM = self.payMethods().filter(function (x) { return x.id === s.ckMethod; })[0];
    const ckProof = s.ckProof;

    /* Estado del pedido (comprador) */
    const t = s.trOrder;
    const ti = t ? self.statusInfo(t.estado, t.correo) : null;
    const trM = self.payMethods().filter(function (x) { return x.id === s.trMethod; })[0];

    /* Administración: pedidos */
    const all = self.orders();
    const counts = { por_verificar: 0, verificado: 0, enviado: 0, rechazado: 0 };
    all.forEach(function (o) { if (counts[o.estado] !== undefined) counts[o.estado] += 1; });
    const filt = s.oFilter || 'por_verificar';
    const fdefs = [['por_verificar', 'Por verificar'], ['verificado', 'Verificados'], ['enviado', 'Enviados'], ['rechazado', 'Rechazados'], ['todos', 'Historial completo']];
    const list = all.filter(function (o) { return filt === 'todos' || o.estado === filt; });

    return {
      payQrOn: !!ckM && ckM.kind === 'wallet', payBankOn: !!ckM && ckM.kind === 'bank', payNoneOn: !ckM,
      proofDisp: ckM ? 'flex' : 'none',
      onProof: function (e) { self.readProof(e, 'ckProof'); },
      proofTxt: ckProof ? 'Archivo listo: ' + ckProof.name + (ckProof.data ? '' : ' (no se pudo adjuntar; envíalo por WhatsApp)') : 'Imagen o PDF. Opcional si escribes el número de operación.',
      proofImg: ckProof && /^data:image\//.test(ckProof.data || '') ? ckProof.data : '', proofImgOn: !!(ckProof && /^data:image\//.test(ckProof.data || '')),

      trackDisp: s.trackOpen ? 'block' : 'none',
      openTrack: function () {
        const pre = s.order && s.order.num ? s.order : null;
        self.setState({ trackOpen: true, trErr: '', trSent: false, ck: false, cartOpen: false, detailId: '' });
        setTimeout(function () { if (pre) { self.setVal('ix-tr-num', pre.num); self.setVal('ix-tr-mail', pre.mail); } }, 30);
      },
      closeTrack: function () { self.setState({ trackOpen: false }); },
      trLookup: function () { self.trackLookup(); },
      trLookupTxt: s.trBusy ? 'Consultando…' : 'Consultar',
      trErr: s.trErr || '', trErrDisp: s.trErr ? 'block' : 'none',
      trHas: !!t, trNum: t ? t.num : '', trDate: t ? fmtT(t.fecha) : '', trState: ti ? ti.buyer : '', trColor: ti ? ti.color : '#9FB0C3',
      trTotal: t ? self.money(t.total || 0) : '', trMail: t ? t.correo : '',
      trItems: t ? (t.programas || []).map(function (p) { return { name: p.name, code: p.code }; }) : [],
      trWaiting: !!t && t.estado === 'por_verificar', trVerified: !!t && t.estado === 'verificado', trSentOk: !!t && t.estado === 'enviado', trRejected: !!t && t.estado === 'rechazado',
      trDelivered: t && t.entregado ? fmtT(t.entregado) : '', trMotivo: t ? (t.motivo || 'Sin detalle.') : '',
      trMethodBtns: methodBtns(s.trMethod, function (id) { self.setState({ trMethod: id, trErr: '' }); }),
      trPayInfoOn: !!trM,
      trPayInfo: trM ? (trM.kind === 'wallet' ? trM.label + ' al 944 542 116, a nombre de Elvis Arturo Sandoval Sosa.' : 'BCP ahorro soles 21570385264021 (CCI 00221517038526402126) o Scotiabank ahorro soles 7931208610 (CCI 00931320793120861083), a nombre de Elvis Arturo Sandoval Sosa.') : '',
      onTrProof: function (e) { self.readProof(e, 'trProof'); },
      trProofTxt: s.trProof ? 'Archivo listo: ' + s.trProof.name : 'Imagen o PDF. Opcional si escribes el número de operación.',
      trResubmit: function () { self.trackResubmit(); },
      trSentDisp: s.trSent ? 'block' : 'none',

      oFilters: fdefs.map(function (f) {
        const on = filt === f[0];
        const n = f[0] === 'todos' ? all.length : counts[f[0]];
        return { label: f[1] + ' (' + n + ')', pressed: on, bg: on ? '#7C5CFF' : 'transparent', fg: on ? '#FFFFFF' : '#C9D5E2', bd: on ? '#7C5CFF' : '#2E3F53', pick: function () { self.setState({ oFilter: f[0] }); } };
      }),
      oSource: s.oRemote ? 'Hoja de Google' : 'Este navegador (vista previa)', oSourceColor: s.oRemote ? '#3DE0B8' : '#F2C879',
      oLoadingDisp: s.oLoading ? 'inline' : 'none', oErr: s.oErr || '', oErrDisp: s.oErr ? 'block' : 'none',
      oRefresh: function () { self.loadRemoteOrders(); },
      oEmpty: list.length === 0, oHas: list.length > 0,
      adOrders: list.map(function (o) {
        const si = self.statusInfo(o.estado, o.correo);
        const pf = PROOFS(o);
        const busy = s.adminBusy === o.num;
        const rejecting = s.oRejecting === o.num;
        return {
          num: o.num, date: fmtT(o.fecha), stateTxt: si.admin, color: si.color,
          name: o.nombre || '—', mail: o.correo, account: o.correoCuenta || '—', model: o.modelo, serial: o.serie,
          method: o.metodo, op: o.operacion || '—', total: self.money(o.total || 0),
          coupon: o.codigo ? o.codigo + ' (' + o.tipoCodigo + ', −' + self.money(o.descCodigo || 0) + ')' : 'Ninguno',
          items: (o.items || []).map(function (i) { return i.name; }).join(', '),
          progs: (o.programas || []).map(function (p) { return { name: p.name, code: p.code }; }),
          proofImg: pf.img, hasImg: pf.hasImg, proofLink: pf.link, hasLink: pf.hasLink, hasPdf: pf.hasPdf, noProof: pf.none, proofName: pf.name || 'comprobante',
          zoomCls: s.oZoom === o.num ? 'proofimg big' : 'proofimg',
          zoom: function () { self.setState({ oZoom: s.oZoom === o.num ? '' : o.num }); },
          motivo: o.motivo || '', hasMotivo: o.estado === 'rechazado' && !!o.motivo,
          alert: o.alertas || '', hasAlert: !!o.alertas,
          delivered: o.entregado ? fmtT(o.entregado) : '', hasDelivered: !!o.entregado,
          hist: (o.historial || []).slice().reverse().map(function (h) { return { t: fmtT(h.t), txt: h.txt }; }),
          canVerify: o.estado === 'por_verificar' && !busy, canReject: (o.estado === 'por_verificar' || o.estado === 'verificado') && !busy,
          sendDisabled: o.estado !== 'verificado' || busy, sendTxt: busy ? 'Procesando…' : (o.estado === 'enviado' ? 'Programa enviado' : 'Enviar programa'),
          sendHint: o.estado === 'verificado' ? 'Antes de enviar, sube a la carpeta del pedido el archivo cifrado para la serie ' + o.serie + '.' : (o.estado === 'enviado' ? '' : 'Se habilita cuando verificas el pago.'),
          folder: o.carpeta || '', hasFolder: !!o.carpeta,
          verify: function () { self.adminAction(o.num, 'verificar'); },
          startReject: function () { self.setState({ oRejecting: rejecting ? '' : o.num }); setTimeout(function () { const el = document.getElementById('ix-rej'); if (el) el.focus(); }, 30); },
          rejecting: rejecting,
          confirmReject: function () {
            const why = self.val('ix-rej');
            if (why.length < 5) { self.setState({ adminErr: 'Escribe el motivo del rechazo para que el comprador sepa qué corregir.', adminMsg: '' }); return; }
            self.setVal('ix-rej', '');
            self.adminAction(o.num, 'rechazar', why);
          },
          send: function () { self.adminAction(o.num, 'enviar'); }
        };
      }),
      ordBadge: counts.por_verificar
    };
  }

  /* ===== Códigos, vendedores y créditos =====
     Todo se guarda por ahora en este navegador (localStorage), en un solo objeto "db".
     Para conectar una base de datos real, reemplaza dbLoad, dbSave y validateCode
     por llamadas a tu servidor; el resto de la página no necesita cambios. */

  cpValue() { const c = this.state && this.state.cfg; return (c && c.descuento > 0) ? c.descuento : 499; }

  cfgPrices() { const c = this.state && this.state.cfg; return (c && c.precios) || {}; }

  loadCfg() {
    const self = this;
    try { const c = JSON.parse(window.localStorage.getItem('ingnex-cfg-v1') || 'null'); if (c && c.precios) self.setState({ cfg: c }); } catch (e) { /* sin caché */ }
    if (!self.props.sheetsUrl || typeof fetch !== 'function') return;
    fetch(self.props.sheetsUrl + (self.props.sheetsUrl.indexOf('?') >= 0 ? '&' : '?') + 'accion=config')
      .then(function (r) { return r.json(); })
      .then(function (j) { if (j && j.ok) self.saveCfg(j); })
      .catch(function () { /* se usan los precios de siempre */ });
  }

  saveCfg(j) {
    const c = { precios: j.precios || {}, descuento: Number(j.descuento) || 499 };
    try { window.localStorage.setItem('ingnex-cfg-v1', JSON.stringify(c)); } catch (e) { /* sin almacenamiento */ }
    if (!this._dead) this.setState({ cfg: c });
  }

  // Códigos aplicados que siguen siendo válidos para el carrito actual (uno por programa).
  cpsValid(cps, calc) {
    const ids = calc.lines.map(function (l) { return l.id; });
    const seen = {};
    return (cps || []).filter(function (c) {
      if (ids.indexOf(c.line) < 0 || seen[c.line] || seen['@' + c.code]) return false;
      seen[c.line] = 1; seen['@' + c.code] = 1;
      return true;
    });
  }

  cpDiscOf(calc, cps) {
    const v = this.cpValue();
    return cps.reduce(function (a, c) {
      const l = calc.lines.filter(function (x) { return x.id === c.line; })[0];
      return a + (l ? Math.min(v, l.price) : 0);
    }, 0);
  }

  dbSeed() {
    const now = new Date().toISOString();
    return {
      codes: [],
      sellers: [],
      requests: [],
      orders: [],
      sales: [],
      redemptions: [],
      settings: { creditPerSale: '', storeUrl: '', adminKey: '' }
    };
  }

  dbLoad() {
    try {
      const raw = window.localStorage.getItem('ingnex-db-v1');
      const db = raw ? JSON.parse(raw) : null;
      if (db && Array.isArray(db.codes) && Array.isArray(db.sellers)) {
        if (!Array.isArray(db.orders)) db.orders = [];
        const real = function (a) { return (a || []).filter(function (x) { return !x.demo; }); };
        if (db.codes) db.codes = real(db.codes);
        if (db.sellers) db.sellers = real(db.sellers);
        return Object.assign(this.dbSeed(), db, { settings: Object.assign({ creditPerSale: '', storeUrl: '', adminKey: '' }, db.settings || {}) });
      }
    } catch (e) { /* sin almacenamiento local */ }
    return this.dbSeed();
  }

  dbSave(db) {
    try { window.localStorage.setItem('ingnex-db-v1', JSON.stringify(db)); } catch (e) { /* sin almacenamiento local */ }
  }

  db() { return (this.state && this.state.db) || this.dbSeed(); }

  dbSet(fn) {
    const next = JSON.parse(JSON.stringify(this.db()));
    fn(next);
    this.setState({ db: next });
  }

  uid(prefix) { return prefix + '-' + Date.now().toString(36) + Math.floor(Math.random() * 1296).toString(36); }

  fmtDate(iso) {
    try { return new Date(iso).toLocaleDateString('es-PE', { day: '2-digit', month: 'short', year: 'numeric' }); } catch (e) { return String(iso).slice(0, 10); }
  }

  cleanCode(t) { return String(t || '').toUpperCase().replace(/\s+/g, ''); }

  // Valida un código. Hoy revisa la lista local; mañana puede consultar tu servidor.
  validateCode(code) {
    const self = this;
    if (self.props.sheetsUrl) {
      return self.callSheet({ tipo: 'codigo', codigo: code }).then(function (r) {
        if (!r || !r.ok) throw new Error('hoja');
        if (r.valido && r.monto > 0 && self.state && self.state.cfg && self.state.cfg.descuento !== r.monto) self.setState({ cfg: Object.assign({}, self.state.cfg, { descuento: r.monto }) });
        return r.valido ? { code: r.codigo, type: r.tipo, sellerId: '', seller: r.vendedor || '' } : null;
      });
    }
    const db = this.db();
    const c = db.codes.filter(function (x) { return x.code === code; })[0];
    if (!c || !c.active) return Promise.resolve(null);
    if (c.type === 'seller') {
      const sl = db.sellers.filter(function (x) { return x.id === c.sellerId; })[0];
      if (!sl || !sl.active) return Promise.resolve(null);
    }
    return Promise.resolve({ code: c.code, type: c.type, sellerId: c.sellerId || '' });
  }

  applyCode(inputId, selId) {
    const self = this;
    const s = self.st();
    const calc = self.cartCalc(s.cart);
    if (!calc.lines.length) { self.setState({ cpErr: 'Agrega un programa al carrito antes de aplicar un código.' }); return; }
    const cps = self.cpsValid(s.cps, calc);
    const free = calc.lines.filter(function (l) { return !cps.some(function (c) { return c.line === l.id; }); });
    if (!free.length) { self.setState({ cpErr: 'Cada programa de tu carrito ya tiene un código.' }); return; }
    const code = self.cleanCode(self.val(inputId));
    if (!code) { self.setState({ cpErr: 'Escribe tu código de descuento.' }); return; }
    if (cps.some(function (c) { return c.code === code; })) { self.setState({ cpErr: 'Ese código ya está aplicado en esta compra. Usa un código distinto para cada programa.' }); return; }
    const want = selId ? self.val(selId) : '';
    const target = free.filter(function (l) { return l.id === want; })[0] || free[0];
    self.setState({ cpErr: '' });
    self.validateCode(code).then(function (res) {
      if (!res) { self.setState({ cpErr: 'Código no válido o expirado' }); return; }
      const now = self.cpsValid(self.st().cps, self.cartCalc(self.st().cart));
      if (now.some(function (c) { return c.line === target.id || c.code === res.code; })) return;
      self.setState({ cps: now.concat([{ line: target.id, code: res.code, type: res.type, seller: res.seller || '' }]), cpErr: '' });
      self.setVal(inputId, '');
      self.say('Descuento aplicado a ' + target.name + ': -' + self.money(Math.min(self.cpValue(), target.price)));
      self.track('codigo');
    }).catch(function () { self.setState({ cpErr: 'No pudimos revisar el código. Revisa tu conexión e inténtalo de nuevo.' }); });
  }

  creditPer() {
    const v = parseFloat(String(this.db().settings.creditPerSale || '').replace(',', '.'));
    return isFinite(v) && v > 0 ? Math.round(v * 100) : 0;
  }

  sellerStats(sellerId) {
    const db = this.db();
    const per = this.creditPer();
    const sales = db.sales.filter(function (x) { return x.sellerId === sellerId; });
    const approved = sales.filter(function (x) { return x.status === 'aprobada'; }).length;
    const pending = sales.filter(function (x) { return x.status === 'pendiente'; }).length;
    const reds = db.redemptions.filter(function (x) { return x.sellerId === sellerId; });
    const spent = reds.reduce(function (a, r) { return a + r.cost; }, 0);
    const earned = approved * per;
    return { sales: sales, reds: reds, approved: approved, pending: pending, earned: earned, spent: spent, balance: earned - spent, per: per };
  }

  shareMsg(code) {
    const url = this.db().settings.storeUrl;
    const link = url || (typeof window !== 'undefined' && window.location ? window.location.origin : '');
    return 'Usa mi código ' + code + ' en la tienda INGNEX y obtén ' + this.money(this.cpValue()) + ' de descuento en tu programa para HP Prime.' + (link ? ' ' + link : '');
  }

  makeSellerCode(name) {
    const db = this.db();
    const base = 'VEND-' + (this.norm(name).replace(/[^a-z]/g, '').toUpperCase().slice(0, 8) || 'INGNEX');
    let code = base;
    let n = 0;
    while (db.codes.some(function (c) { return c.code === code; })) { n += 1; code = base + (10 + Math.floor(Math.random() * 90)); if (n > 50) break; }
    return code;
  }

  approveRequest(id) {
    const self = this;
    self.dbSet(function (db) {
      const r = db.requests.filter(function (x) { return x.id === id; })[0];
      if (!r || r.status !== 'pendiente') return;
      const code = self.makeSellerCode(r.name);
      const sid = self.uid('s');
      r.status = 'aprobada';
      r.code = code;
      db.sellers.push({ id: sid, name: r.name, email: r.email, contact: r.contact, inst: r.inst, code: code, active: true, created: new Date().toISOString() });
      db.codes.push({ code: code, type: 'seller', sellerId: sid, active: true, uses: 0, created: new Date().toISOString() });
      self._adminMsg = 'Vendedor aprobado. Su código es ' + code + '. Envíaselo por su contacto: ' + r.contact;
    });
    self.setState({ adminMsg: self._adminMsg || '' });
  }

  createCode() {
    const self = this;
    const code = self.cleanCode(self.val('ix-ad-code'));
    const type = self.val('ix-ad-type') || 'promo';
    const sellerId = self.val('ix-ad-seller');
    const db = self.db();
    if (!/^[A-Z0-9-]{3,20}$/.test(code)) { self.setState({ adminErr: 'El código debe tener de 3 a 20 caracteres: letras, números o guiones.', adminMsg: '' }); return; }
    if (db.codes.some(function (c) { return c.code === code; })) { self.setState({ adminErr: 'Ese código ya existe.', adminMsg: '' }); return; }
    if (type === 'seller' && !sellerId) { self.setState({ adminErr: 'Elige el vendedor dueño del código.', adminMsg: '' }); return; }
    self.dbSet(function (d) { d.codes.unshift({ code: code, type: type, sellerId: type === 'seller' ? sellerId : '', active: true, uses: 0, created: new Date().toISOString() }); });
    self.setVal('ix-ad-code', '');
    self.setState({ adminErr: '', adminMsg: 'Código ' + code + ' creado y activo.' });
  }

  submitVendor(e) {
    if (e && e.preventDefault) e.preventDefault();
    const self = this;
    const name = self.val('ix-vd-nombre');
    const mail = self.val('ix-vd-correo');
    const contact = self.val('ix-vd-contacto');
    const inst = self.val('ix-vd-inst');
    if (!name) { self.setState({ vendErr: 'Escribe tu nombre.' }); return; }
    if (!self.isMail(mail)) { self.setState({ vendErr: 'Escribe un correo válido.' }); return; }
    if (contact.length < 5) { self.setState({ vendErr: 'Escribe tu WhatsApp o tu usuario de Telegram.' }); return; }
    self.dbSet(function (db) {
      db.requests.unshift({ id: self.uid('r'), name: name, email: mail, contact: contact, inst: inst, created: new Date().toISOString(), status: 'pendiente' });
    });
    try { self.postSheet({ tipo: 'vendedor', nombre: name, email: mail, contacto: contact, institucion: inst }).catch(function () {}); } catch (err) { /* sin hoja */ }
    self.track('vendedor');
    self.setState({ vendSent: true, vendErr: '', vendName: name.split(' ')[0] });
  }

  /* ===== Panel conectado a la hoja: ajustes, precios, vendedores ===== */
  ajFields() {
    return [
      ['descuento', 'Descuento por código (S/)', 'Lo que descuenta cada código en un programa.'],
      ['plata', 'Plata desde (S/ vendidos)', ''], ['oro', 'Oro desde (S/ vendidos)', ''], ['diamante', 'Diamante desde (S/ vendidos)', ''], ['vip', 'Ultra VIP desde (S/ vendidos)', ''],
      ['cCobre', 'Créditos por programa: Cobre', ''], ['cPlata', 'Créditos por programa: Plata', ''], ['cOro', 'Créditos por programa: Oro', ''], ['cDiamante', 'Créditos por programa: Diamante', ''],
      ['vipPct', 'Ultra VIP: % del precio en dinero', ''], ['valorCredito', 'Valor de 1 crédito (S/)', '']
    ];
  }

  adminCall(payload, busy) {
    const self = this;
    const key = self.db().settings.adminKey;
    if (!self.props.sheetsUrl || !key) { self.setState({ adminErr: 'Primero guarda tu clave de administración en Ajustes.', adminMsg: '' }); return Promise.resolve(null); }
    self.setState({ adLoading: busy || 'x' });
    return self.callSheet(Object.assign({ tipo: 'admin', clave: key }, payload))
      .then(function (r) {
        self.setState({ adLoading: '' });
        if (!r || !r.ok) { self.setState({ adminErr: (r && r.error) || 'La hoja no respondió.', adminMsg: '' }); return null; }
        return r;
      })
      .catch(function () { self.setState({ adLoading: '', adminErr: 'No se pudo conectar con la hoja. No se hizo ningún cambio.', adminMsg: '' }); return null; });
  }

  fillAjustes(aj) {
    const self = this;
    setTimeout(function () { self.ajFields().forEach(function (f) { if (aj && f[0] in aj) self.setVal('ix-aj-' + f[0], String(aj[f[0]])); }); }, 30);
  }

  loadAjustes() {
    const self = this;
    if (!self.db().settings.adminKey) return;
    self.adminCall({ accion: 'ajustesLeer' }, 'aj').then(function (r) { if (r) { self.setState({ adAj: r.ajustes }); self.fillAjustes(r.ajustes); } });
  }

  saveAjustes() {
    const self = this;
    const out = {};
    let bad = '';
    self.ajFields().forEach(function (f) {
      const t = self.val('ix-aj-' + f[0]).replace(',', '.');
      if (t === '') return;
      const v = Number(t);
      if (!isFinite(v) || v < 0) bad = f[1];
      else out[f[0]] = v;
    });
    if (bad) { self.setState({ adminErr: 'Revisa el valor de: ' + bad + '.', adminMsg: '' }); return; }
    const order = ['plata', 'oro', 'diamante', 'vip'].map(function (k) { return k in out ? out[k] : (self.st().adAj || {})[k]; });
    for (let i = 1; i < order.length; i++) if (order[i] !== undefined && order[i - 1] !== undefined && order[i] <= order[i - 1]) { self.setState({ adminErr: 'Los montos de los rangos deben ir de menor a mayor: Plata < Oro < Diamante < Ultra VIP.', adminMsg: '' }); return; }
    self.adminCall({ accion: 'ajustesGuardar', ajustes: out }, 'aj').then(function (r) {
      if (!r) return;
      self.setState({ adAj: r.ajustes, adminErr: '', adminMsg: 'Ajustes guardados en tu hoja.' });
      self.fillAjustes(r.ajustes);
      self.loadCfg();
      self.loadVend();
    });
  }

  priceRows() {
    const progs = this.catalog().filter(function (p) { return !p.soon; }).map(function (p) { return { id: p.id, name: p.name, code: p.code, list: p.listPrice, offer: p.oldPrice ? p.price : 0 }; });
    const packs = this.packsData().map(function (k) { return { id: k.id, name: k.name, code: 'PACK', list: k.oldPrice || k.price, offer: k.oldPrice ? k.price : 0 }; });
    return progs.concat(packs);
  }

  fillPrices() {
    const self = this;
    setTimeout(function () {
      self.priceRows().forEach(function (r) {
        const k = r.id.replace(':', '-');
        self.setVal('ix-pr-' + k, self.amt(r.list));
        self.setVal('ix-of-' + k, r.offer ? self.amt(r.offer) : '');
      });
    }, 30);
  }

  savePrices() {
    const self = this;
    const list = [];
    let bad = '';
    self.priceRows().forEach(function (r) {
      const k = r.id.replace(':', '-');
      const p = Number(self.val('ix-pr-' + k).replace(',', '.'));
      const o = self.val('ix-of-' + k).replace(',', '.');
      if (!(p > 0)) { bad = 'el precio de ' + r.name; return; }
      if (o !== '' && !(Number(o) > 0 && Number(o) < p)) { bad = 'la oferta de ' + r.name + ' (debe ser menor que el precio)'; return; }
      list.push({ id: r.id, nombre: r.name, codigo: r.code, precio: p, oferta: o === '' ? '' : Number(o) });
    });
    if (bad) { self.setState({ adminErr: 'Revisa ' + bad + '.', adminMsg: '' }); return; }
    self.adminCall({ accion: 'preciosGuardar', precios: list }, 'pr').then(function (r) {
      if (!r) return;
      self.saveCfg(r);
      self.setState({ adminErr: '', adminMsg: 'Precios guardados. La tienda ya muestra los nuevos precios.' });
      self.fillPrices();
    });
  }

  loadVend() {
    const self = this;
    if (!self.db().settings.adminKey) return;
    self.adminCall({ accion: 'vendedores' }, 'vd').then(function (r) { if (r) self.setState({ adVend: r.vendedores || [] }); });
  }

  sellerLoginRemote() {
    const self = this;
    const mail = self.val('ix-sl-correo').toLowerCase();
    const code = self.cleanCode(self.val('ix-sl-codigo'));
    if (!self.isMail(mail) || !code) { self.setState({ sellerErr: 'Escribe tu correo y tu código de vendedor.' }); return; }
    self.setState({ slBusy: true, sellerErr: '' });
    self.callSheet({ tipo: 'panelVendedor', codigo: code, correo: mail })
      .then(function (r) {
        if (r && r.ok && r.vendedor) self.setState({ slBusy: false, slRemote: r.vendedor, sellerErr: '' });
        else self.setState({ slBusy: false, sellerErr: (r && r.error) || 'No encontramos un vendedor con ese código y ese correo.' });
      })
      .catch(function () { self.setState({ slBusy: false, sellerErr: 'No se pudo conectar. Inténtalo de nuevo.' }); });
  }

  sellerLogin() {
    const mail = this.val('ix-sl-correo').toLowerCase();
    const code = this.cleanCode(this.val('ix-sl-codigo'));
    const sl = this.db().sellers.filter(function (x) { return x.email.toLowerCase() === mail && x.code === code && x.active; })[0];
    if (!sl) { this.setState({ sellerErr: 'No encontramos un vendedor activo con ese correo y ese código.' }); return; }
    this.setState({ sellerId: sl.id, sellerErr: '' });
  }

  redeem(pid) {
    const self = this;
    const s = self.st();
    const p = self.pmap()[pid];
    const st = self.sellerStats(s.sellerId);
    if (!p || !st.per) return;
    if (st.balance < p.price) { self.say('Aún no tienes créditos suficientes para ' + p.name + '.'); return; }
    self.dbSet(function (db) {
      db.redemptions.unshift({ id: self.uid('c'), sellerId: s.sellerId, pid: pid, name: p.name, cost: p.price, date: new Date().toISOString(), status: 'pendiente' });
    });
    self.say('Canje solicitado: ' + p.name + '. Queda pendiente de aprobación.');
  }

  codeVals(s, calc, all) {
    const self = this;
    const db = self.db();
    const STAT = { pendiente: 'Pendiente', aprobado: 'Aprobado', entregado: 'Entregado', aprobada: 'Aprobada', rechazada: 'Rechazada' };
    const statColor = function (st) { return st === 'entregado' || st === 'aprobada' || st === 'aprobado' ? (st === 'entregado' ? '#3DE0B8' : '#6CC9F2') : (st === 'rechazada' ? '#F2A65A' : '#F2C879'); };
    const sellerName = function (id) { const x = db.sellers.filter(function (z) { return z.id === id; })[0]; return x ? x.name : '—'; };
    const money = function (c) { return self.money(c); };

    /* Panel del vendedor */
    const seller = db.sellers.filter(function (x) { return x.id === s.sellerId; })[0];
    const st = seller ? self.sellerStats(seller.id) : null;
    const per = self.creditPer();
    const msg = seller ? self.shareMsg(seller.code) : '';
    const hist = [];
    if (st) {
      st.sales.forEach(function (x) {
        hist.push({ date: x.date, label: 'Compra ' + x.order, state: STAT[x.status] || x.status, color: statColor(x.status), amt: x.status === 'aprobada' ? (per ? '+' + money(per) : '[COMPLETAR]') : (x.status === 'pendiente' ? 'Por aprobar' : '0') });
      });
      st.reds.forEach(function (r) {
        hist.push({ date: r.date, label: 'Canje: ' + r.name, state: STAT[r.status] || r.status, color: statColor(r.status), amt: '−' + money(r.cost) });
      });
      hist.sort(function (a, b) { return a.date < b.date ? 1 : -1; });
    }

    /* Administración */
    const codes = db.codes.map(function (c) {
      return {
        code: c.code, typeTxt: c.type === 'seller' ? 'Vendedor' : 'Comprador', seller: c.type === 'seller' ? sellerName(c.sellerId) : '—',
        uses: c.uses, stateTxt: c.active ? 'Activo' : 'Inactivo', stateColor: c.active ? '#3DE0B8' : '#7C8DA1', demo: !!c.demo,
        toggleTxt: c.active ? 'Desactivar' : 'Activar', toggleAria: (c.active ? 'Desactivar ' : 'Activar ') + c.code,
        toggle: function () { self.dbSet(function (d) { d.codes.forEach(function (z) { if (z.code === c.code) z.active = !z.active; }); }); }
      };
    });
    const reqs = db.requests.filter(function (r) { return r.status === 'pendiente'; }).map(function (r) {
      return {
        name: r.name, email: r.email, contact: r.contact, inst: r.inst || '—', date: self.fmtDate(r.created),
        approve: function () { self.approveRequest(r.id); },
        reject: function () { self.dbSet(function (d) { d.requests.forEach(function (z) { if (z.id === r.id) z.status = 'rechazada'; }); }); }
      };
    });
    const sellers = db.sellers.map(function (x) {
      const t = self.sellerStats(x.id);
      return {
        name: x.name, email: x.email, contact: x.contact, code: x.code, approved: t.approved, pending: t.pending,
        balance: per ? money(t.balance) : '[COMPLETAR]', stateTxt: x.active ? 'Activo' : 'Inactivo', stateColor: x.active ? '#3DE0B8' : '#7C8DA1',
        toggleTxt: x.active ? 'Desactivar' : 'Activar',
        toggle: function () { self.dbSet(function (d) { d.sellers.forEach(function (z) { if (z.id === x.id) z.active = !z.active; }); }); }
      };
    });
    const sales = db.sales.map(function (x) {
      const pend = x.status === 'pendiente';
      return {
        order: x.order, date: self.fmtDate(x.date), code: x.code, seller: sellerName(x.sellerId), total: money(x.total),
        stateTxt: STAT[x.status] || x.status, stateColor: statColor(x.status), pend: pend,
        approve: function () { self.dbSet(function (d) { d.sales.forEach(function (z) { if (z.id === x.id) z.status = 'aprobada'; }); }); },
        reject: function () { self.dbSet(function (d) { d.sales.forEach(function (z) { if (z.id === x.id) z.status = 'rechazada'; }); }); }
      };
    });
    const reds = db.redemptions.map(function (r) {
      const next = r.status === 'pendiente' ? 'aprobado' : (r.status === 'aprobado' ? 'entregado' : '');
      return {
        seller: sellerName(r.sellerId), name: r.name, cost: money(r.cost), date: self.fmtDate(r.date),
        stateTxt: STAT[r.status] || r.status, stateColor: statColor(r.status), canAdvance: !!next,
        advanceTxt: next === 'aprobado' ? 'Aprobar' : 'Marcar entregado',
        advance: function () { if (next) self.dbSet(function (d) { d.redemptions.forEach(function (z) { if (z.id === r.id) z.status = next; }); }); }
      };
    });
    const cpCalc = self.cartCalc(s.cart);
    const cpCur = self.cpsValid(s.cps, cpCalc);
    const cpFreeLines = cpCalc.lines.filter(function (l) { return !cpCur.some(function (c) { return c.line === l.id; }); });
    const cpList = cpCur.map(function (c) {
      const l = cpCalc.lines.filter(function (x) { return x.id === c.line; })[0];
      return { code: c.code, lineName: l ? l.name : '', kind: c.type === 'seller' ? 'Código de vendedor' : 'Código de descuento', amtTxt: self.money(l ? Math.min(self.cpValue(), l.price) : 0),
        remove: function () { self.setState({ cps: self.st().cps.filter(function (z) { return z.line !== c.line; }), cpErr: '' }); self.say('Código quitado.'); } };
    });
    const tabs = self.props.sheetsUrl ? [['orders', 'Pedidos'], ['metrics', 'Métricas'], ['codes', 'Códigos'], ['vend', 'Vendedores'], ['prices', 'Precios'], ['settings', 'Ajustes']]
      : [['orders', 'Pedidos'], ['metrics', 'Métricas'], ['codes', 'Códigos'], ['sellers', 'Vendedores'], ['sales', 'Créditos por compras'], ['reds', 'Canjes'], ['settings', 'Ajustes']];
    const accent = self.props.accent || '#0096D6';
    const tab = s.adminTab || 'orders';
    const pendingReq = reqs.length;
    const pendingSales = sales.filter(function (x) { return x.pend; }).length;
    const pendingReds = db.redemptions.filter(function (r) { return r.status === 'pendiente'; }).length;
    const badge = { orders: (s.oRemote || db.orders || []).filter(function (o) { return o.estado === 'por_verificar'; }).length, sellers: pendingReq, sales: pendingSales, reds: pendingReds };

    return {
      cpCanAdd: cpFreeLines.length > 0, cpHasList: cpList.length > 0, cpList: cpList,
      cpTargets: cpFreeLines.map(function (l) { return { id: l.id, name: l.name }; }), cpMultiTarget: cpFreeLines.length > 1,
      cpAmtTxt: self.money(self.cpValue()), cpAmtNum: self.amt(self.cpValue()),
      cpErr: s.cpErr, cpErrDisp: s.cpErr ? 'block' : 'none',
      cpApplyCart: function () { self.applyCode('ix-cp-cart', 'ix-cp-cart-to'); },
      cpApplyCk: function () { self.applyCode('ix-cp-ck', 'ix-cp-ck-to'); },
      cpEditable: s.ckStep !== 4, cpFreeEdit: cpFreeLines.length > 0 && s.ckStep !== 4, cpOnEdit: cpList.length > 0 && s.ckStep !== 4,

      vendOpenForm: function () {
        const el = document.getElementById('ix-vd-nombre');
        const box = document.getElementById('vend-form');
        if (box && box.scrollIntoView) box.scrollIntoView({ behavior: self.reducedMotion() ? 'auto' : 'smooth', block: 'center' });
        if (el) setTimeout(function () { el.focus(); }, 350);
      },
      vendSubmit: function (e) { self.submitVendor(e); },
      vendFormOn: !s.vendSent, vendSentOn: !!s.vendSent, vendName: s.vendName || '',
      vendErr: s.vendErr, vendErrDisp: s.vendErr ? 'block' : 'none',
      vendAgain: function () { self.setState({ vendSent: false }); },
      creditRuleTxt: per ? 'Por cada compra aprobada con tu código acumulas ' + money(per) + ' en créditos de la tienda.' : '',
      creditRuleOn: !!per, creditRuleOff: !per,

      openSeller: function () { self.setState({ sellerOpen: true, sellerErr: '', cartOpen: false, detailId: '' }); self.setHash('vendedor'); },
      closeSeller: function () { self.setState({ sellerOpen: false }); self.setHash(''); },
      sellerDisp: s.sellerOpen ? 'block' : 'none',
      slLoginOn: !seller, slPanelOn: !!seller,
      slLogin: function () { self.sellerLogin(); },
      slLogout: function () { self.setState({ sellerId: '' }); },
      sellerErr: s.sellerErr, sellerErrDisp: s.sellerErr ? 'block' : 'none',
      slName: seller ? seller.name : '', slCode: seller ? seller.code : '', slMsg: msg,
      slCopyCode: function () { if (seller) self.copy(seller.code, 'Código'); },
      slCopyMsg: function () { if (seller) self.copy(msg, 'Mensaje'); },
      slWa: 'https://wa.me/?text=' + encodeURIComponent(msg),
      slApproved: st ? st.approved : 0, slPending: st ? st.pending : 0,
      slBalance: st && per ? money(st.balance) : '—', slEarned: st && per ? money(st.earned) : '—', slSpent: st ? money(st.spent) : money(0),
      slPerOn: !!per, slPerOff: !per,
      slHist: hist.map(function (h) { return { date: self.fmtDate(h.date), label: h.label, state: h.state, color: h.color, amt: h.amt }; }),
      slHistEmpty: hist.length === 0, slHistHas: hist.length > 0,
      slReds: st ? st.reds.map(function (r) { return { name: r.name, cost: money(r.cost), date: self.fmtDate(r.date), state: STAT[r.status], color: statColor(r.status) }; }) : [],
      slRedsHas: !!(st && st.reds.length),
      slCatalog: all.filter(function (p) { return !p.soon; }).map(function (p) {
        const ok = !!(st && per && st.balance >= p.price);
        const m = self.meta(p.cat);
        return { name: p.name, code: p.code, price: money(p.price), icon: m.icon, color: m.color, can: ok, disabled: !ok, btnTxt: ok ? 'Canjear créditos' : 'Créditos insuficientes', aria: 'Canjear créditos por ' + p.name, redeem: function () { self.redeem(p.id); } };
      }),

      openAdmin: function () {
        self.setState({ adminOpen: true, adminErr: '', adminMsg: '', sellerOpen: false, cartOpen: false, detailId: '' });
        self.setHash('admin');
        self._adminOpened();
      },
      closeAdmin: function () { self.setState({ adminOpen: false }); self.setHash(''); },
      adLockOn: !!self.props.sheetsUrl && !s.adUnlocked, adOpenOn: !self.props.sheetsUrl || !!s.adUnlocked,
      adGateBusy: !!s.adGateBusy, adGateIdle: !s.adGateBusy, adGateErr: s.adGateErr || '', adGateErrDisp: s.adGateErr ? 'block' : 'none',
      adUnlock: function () { self.adminUnlock(); },
      adUnlockSubmit: function (e) { if (e && e.preventDefault) e.preventDefault(); if (!self.st().adGateBusy) self.adminUnlock(); },
      adLock: function () { self.adminLock(); },
      adminDisp: s.adminOpen ? 'block' : 'none',
      adminTabs: tabs.map(function (t) {
        const on = tab === t[0];
        return { label: t[1], badge: badge[t[0]] ? String(badge[t[0]]) : '', hasBadge: !!badge[t[0]], current: on ? 'page' : 'false', cls: on ? 'adm-link on' : 'adm-link', pick: function () {
          self.setState({ adminTab: t[0], adminErr: '', adminMsg: '' });
          if (t[0] === 'prices') self.fillPrices();
          if (t[0] === 'settings' && self.st().adAj) self.fillAjustes(self.st().adAj);
          if (t[0] === 'vend') self.loadVend();
        } };
      }),
      tOrders: tab === 'orders' ? 'flex' : 'none', tMetrics: tab === 'metrics' ? 'flex' : 'none', tCodes: tab === 'codes' ? 'flex' : 'none', tSellers: tab === 'sellers' ? 'flex' : 'none', tSales: tab === 'sales' ? 'flex' : 'none', tReds: tab === 'reds' ? 'flex' : 'none', tSettings: tab === 'settings' ? 'flex' : 'none', tVend: tab === 'vend' ? 'flex' : 'none', tPrices: tab === 'prices' ? 'flex' : 'none',
      adminErr: s.adminErr, adminErrDisp: s.adminErr ? 'block' : 'none', adminMsg: s.adminMsg, adminMsgDisp: s.adminMsg ? 'block' : 'none',
      adCodes: codes, adSellerOpts: db.sellers.map(function (x) { return { id: x.id, label: x.name + ' · ' + x.code }; }),
      adCreate: function () { self.createCode(); },
      adReqs: reqs, adReqsHas: reqs.length > 0, adReqsEmpty: reqs.length === 0,
      adSellers: sellers,
      adSales: sales, adSalesHas: sales.length > 0, adSalesEmpty: sales.length === 0,
      adReds: reds, adRedsHas: reds.length > 0, adRedsEmpty: reds.length === 0,
      adSheetsOn2: !!self.props.sheetsUrl,
      adPriceRows: self.priceRows().map(function (r) { const k = r.id.replace(':', '-'); return { name: r.name, code: r.code, pid: 'ix-pr-' + k, oid: 'ix-of-' + k, isPack: r.code === 'PACK' }; }),
      adPricesSave: function () { self.savePrices(); },
      adPricesBusy: s.adLoading === 'pr', adPricesTxt: s.adLoading === 'pr' ? 'Guardando…' : 'Guardar precios',
      adAjFields: self.ajFields().map(function (f) { return { id: 'ix-aj-' + f[0], label: f[1], hint: f[2], hasHint: !!f[2] }; }),
      adAjSave: function () { self.saveAjustes(); }, adAjTxt: s.adLoading === 'aj' ? 'Guardando…' : 'Guardar reglas',
      adVendRows: (s.adVend || []).slice().sort(function (a, b) { return b.ventas - a.ventas; }).map(function (v) {
        const RK = ['Cobre', 'Plata', 'Oro', 'Diamante', 'Ultra VIP'];
        return { badge: v.insignia, name: v.nombre || '—', code: v.codigo, rank: v.rango + (v.rangoMinimo ? ' (mínimo ' + v.rangoMinimo + ')' : ''), sales: money(v.ventas), progs: String(v.programas) + ' programas en ' + String(v.pedidos || 0) + ' pedidos',
          minId: 'ix-min-' + v.codigo,
          opts: [{ v: '', t: 'Por ventas (desde Cobre)', sel: !v.rangoMinimo }].concat(RK.slice(1).map(function (r) { return { v: r, t: 'Desde ' + r, sel: v.rangoMinimo === r }; })),
          setMin: function (e) {
            const val = e && e.target ? e.target.value : '';
            self.adminCall({ accion: 'rangoVendedor', codigo: v.codigo, rango: val }, 'vd').then(function (r) {
              if (r) self.setState({ adVend: r.vendedores || [], adminErr: '', adminMsg: 'Rango mínimo de ' + (v.nombre || v.codigo) + ': ' + (val || 'por ventas') + '.' });
            });
          },
          credits: String(v.creditos), creditsSoles: money(v.creditosSoles), money: money(v.dinero), hasMoney: v.dinero > 0,
          mail: v.correo || 'sin correo (no puede entrar a su panel)', state: v.activo ? 'Activo' : 'Inactivo' };
      }),
      adVendHas: !!(s.adVend && s.adVend.length), adVendEmpty: !(s.adVend && s.adVend.length),
      adVendLoad: function () { self.loadVend(); }, adVendTxt: s.adLoading === 'vd' ? 'Actualizando…' : 'Actualizar',
      slRemoteOn: !!s.slRemote, slRemoteOff: !s.slRemote,
      slrBadge: s.slRemote ? s.slRemote.insignia : '', slrRank: s.slRemote ? s.slRemote.rango : '', slrName: s.slRemote ? s.slRemote.nombre : '', slrCode: s.slRemote ? s.slRemote.codigo : '',
      slrVip: !!(s.slRemote && s.slRemote.vip),
      slrShare: s.slRemote ? self.shareMsg(s.slRemote.codigo) : '',
      slrCopy: function () { if (s.slRemote) self.copy(self.shareMsg(s.slRemote.codigo), 'Mensaje'); },
      slrLogin: function () { self.sellerLoginRemote(); }, slrLoginTxt: s.slBusy ? 'Entrando…' : 'Ver mi insignia',
      slrLogout: function () { self.setState({ slRemote: null }); },
      adSave: function () {
        const v = self.val('ix-ad-credit').replace(',', '.');
        const url = self.val('ix-ad-url');
        const key = self.val('ix-ad-key');
        if (v && !(parseFloat(v) > 0)) { self.setState({ adminErr: 'El crédito por compra debe ser un número mayor que 0, o quedar vacío.', adminMsg: '' }); return; }
        self.dbSet(function (d) { d.settings.creditPerSale = v; d.settings.storeUrl = url; d.settings.adminKey = key; });
        self.setState({ adminErr: '', adminMsg: 'Ajustes guardados.' });
      },
      adReset: function () { self.setState({ db: self.dbSeed(), adminMsg: 'Datos de prueba restablecidos.', adminErr: '' }); }
    };
  }

  /* ===== Métricas =====
     Cada acción importante se registra como un evento anónimo (sin nombre ni correo).
     En la vista previa los eventos se guardan en este navegador. Con la hoja de Google
     conectada, también se envían a la pestaña "Eventos" y el panel puede leer el total
     de todos los visitantes. Si la página publicada incluye Google Analytics (gtag),
     los mismos eventos se le envían. */

  vid() {
    try {
      let v = window.localStorage.getItem('ingnex-vid');
      if (!v) { v = 'v' + Date.now().toString(36) + Math.random().toString(36).slice(2, 8); window.localStorage.setItem('ingnex-vid', v); }
      return v;
    } catch (e) { return 'anonimo'; }
  }

  evLoad() {
    try { const a = JSON.parse(window.localStorage.getItem('ingnex-ev-v1') || '[]'); return Array.isArray(a) ? a : []; } catch (e) { return []; }
  }

  isAdminView() { return !!(this.state && this.state.adminOpen); }

  track(ev, extra) {
    if (this.isAdminView()) return;
    const rec = Object.assign({ t: new Date().toISOString(), e: ev, v: this.vid() }, extra || {});
    try {
      const a = this.evLoad();
      a.push(rec);
      while (a.length > 3000) a.shift();
      window.localStorage.setItem('ingnex-ev-v1', JSON.stringify(a));
    } catch (e) { /* sin almacenamiento local */ }
    try { this.postSheet({ tipo: 'evento', evento: ev, producto: rec.p || '', valor: rec.n || '', visitante: rec.v, pagina: 'tienda' }).catch(function () {}); } catch (e) { /* sin hoja */ }
    try { if (typeof window.gtag === 'function') window.gtag('event', 'ingnex_' + ev, { producto: rec.p || '', valor: rec.n ? rec.n / 100 : undefined }); } catch (e) { /* sin analytics */ }
  }

  dkey(d) {
    const pad = function (x) { return (x < 10 ? '0' : '') + x; };
    return d.getFullYear() + '-' + pad(d.getMonth() + 1) + '-' + pad(d.getDate());
  }

  evLabels() {
    return { visita: 'Visitó la tienda', ficha: 'Vio una ficha', carrito: 'Agregó al carrito', checkout: 'Inició una compra', pedido: 'Registró un pedido', codigo: 'Aplicó un código', lead: 'Envió el formulario de contacto', vendedor: 'Solicitó ser vendedor', demo: 'Usó la demostración' };
  }

  metricsFrom(events, days) {
    const self = this;
    const since = days ? Date.now() - days * 864e5 : 0;
    const ev = events.filter(function (x) { return Date.parse(x.t) >= since; });
    const count = function (e) { return ev.filter(function (x) { return x.e === e; }).length; };
    const seen = {};
    ev.forEach(function (x) { if (x.e === 'visita') seen[x.v] = 1; });
    const nd = days || 30;
    const byDay = [];
    const idx = {};
    for (let i = nd - 1; i >= 0; i--) {
      const k = self.dkey(new Date(Date.now() - i * 864e5));
      idx[k] = byDay.length;
      byDay.push({ d: k, visitas: 0, pedidos: 0 });
    }
    const tops = {};
    ev.forEach(function (x) {
      const k = self.dkey(new Date(x.t));
      if (idx[k] !== undefined) {
        if (x.e === 'visita') byDay[idx[k]].visitas += 1;
        if (x.e === 'pedido') byDay[idx[k]].pedidos += 1;
      }
      if (x.e === 'ficha' && x.p) tops[x.p] = (tops[x.p] || 0) + 1;
    });
    return {
      visitas: count('visita'), visitantes: Object.keys(seen).length, fichas: count('ficha'), carrito: count('carrito'),
      checkout: count('checkout'), pedidos: count('pedido'),
      ingresos: ev.filter(function (x) { return x.e === 'pedido'; }).reduce(function (a, x) { return a + (Number(x.n) || 0); }, 0),
      codigos: count('codigo'), leads: count('lead'), vendedores: count('vendedor'), demo: count('demo'),
      porDia: byDay,
      top: Object.keys(tops).map(function (k) { return { p: k, n: tops[k] }; }).sort(function (a, b) { return b.n - a.n; }).slice(0, 8),
      recientes: ev.slice(-15).reverse().map(function (x) { return { t: x.t, e: x.e, p: x.p || '' }; })
    };
  }

  loadRemoteMetrics(days) {
    const self = this;
    const url = self.props.sheetsUrl;
    const key = self.db().settings.adminKey;
    if (!url || !key) { self.setState({ mRemote: null, mErr: '', mLoading: false }); return; }
    self.setState({ mLoading: true, mErr: '' });
    try {
      fetch(url + (url.indexOf('?') >= 0 ? '&' : '?') + 'accion=metricas&dias=' + (days || 0) + '&clave=' + encodeURIComponent(key))
        .then(function (r) { return r.json(); })
        .then(function (m) {
          if (!m || !m.ok) { self.setState({ mRemote: null, mLoading: false, mErr: (m && m.error) || 'La hoja no devolvió métricas.' }); return; }
          self.setState({ mRemote: m, mLoading: false, mErr: '' });
        })
        .catch(function () { self.setState({ mRemote: null, mLoading: false, mErr: 'No se pudo leer la hoja de Google. Se muestran los datos de este navegador.' }); });
    } catch (e) {
      self.setState({ mRemote: null, mLoading: false, mErr: 'No se pudo leer la hoja de Google. Se muestran los datos de este navegador.' });
    }
  }

  metricVals(s) {
    const self = this;
    if (!s.adminOpen) return { mKpis: [], mBars: [], mFunnel: [], mTop: [], mRecent: [], mRanges: [] };
    const days = s.mDays === undefined ? 30 : s.mDays;
    const m = s.mRemote || self.metricsFrom(self.evLoad(), days);
    const map = self.pmap();
    const packs = {};
    self.packsData().forEach(function (k) { packs[k.id] = k.name; });
    const nm = function (id) { return map[id] ? map[id].name : (packs[id] || id); };
    const pct = function (a, b) { return b ? Math.round((a / b) * 1000) / 10 + ' %' : '—'; };
    const KC = ['#3FBDF2', '#9D86FF', '#6E9BFF', '#2CC9C0', '#F0B357', '#3DE0B8', '#F08AA8', '#B39DFA'];
    const kpis = [
      ['Visitas', m.visitas, 'Veces que se abrió la tienda'],
      ['Visitantes únicos', m.visitantes, 'Navegadores distintos'],
      ['Fichas vistas', m.fichas, 'Programas abiertos en detalle'],
      ['Agregados al carrito', m.carrito, 'Programas y packs'],
      ['Compras iniciadas', m.checkout, 'Abrieron Finalizar compra'],
      ['Pedidos registrados', m.pedidos, 'Conversión ' + pct(m.pedidos, m.visitantes)],
      ['Monto de pedidos', self.money(m.ingresos || 0), 'Pagos por verificar'],
      ['Códigos aplicados', m.codigos, (m.leads || 0) + ' contactos · ' + (m.vendedores || 0) + ' vendedores']
    ].map(function (k, i) { return { label: k[0], val: k[1], sub: k[2], color: KC[i] }; });
    const days2 = m.porDia || [];
    const max = Math.max.apply(null, [1].concat(days2.map(function (d) { return d.visitas; })));
    const step = days2.length > 14 ? 5 : (days2.length > 7 ? 2 : 1);
    const bars = days2.map(function (d, i) {
      const lbl = d.d.slice(8, 10) + '/' + d.d.slice(5, 7);
      return { h: Math.round((d.visitas / max) * 100), lbl: (i % step === 0 || i === days2.length - 1) ? lbl : '', tip: lbl + ': ' + d.visitas + ' visitas, ' + d.pedidos + ' pedidos', v: d.visitas ? String(d.visitas) : '' };
    });
    const fsteps = [['Visitas', m.visitas], ['Fichas vistas', m.fichas], ['Agregados al carrito', m.carrito], ['Compras iniciadas', m.checkout], ['Pedidos', m.pedidos]];
    const fmax = Math.max(1, m.visitas || 0, m.fichas || 0);
    const topMax = Math.max.apply(null, [1].concat((m.top || []).map(function (t) { return t.n; })));
    const L = self.evLabels();
    const ranges = [[7, '7 días'], [30, '30 días'], [0, 'Todo']];
    const accent = '#7C5CFF';
    const total = days2.reduce(function (a, d) { return a + d.visitas; }, 0);
    return {
      mSource: s.mRemote ? 'Hoja de Google (todos los visitantes)' : 'Este navegador (vista previa)',
      mSourceColor: s.mRemote ? '#3DE0B8' : '#F2C879',
      mLoadingDisp: s.mLoading ? 'inline' : 'none',
      mErr: s.mErr || '', mErrDisp: s.mErr ? 'block' : 'none',
      mRanges: ranges.map(function (r) {
        const on = days === r[0];
        return { label: r[1], pressed: on, bg: on ? accent : 'transparent', fg: on ? '#FFFFFF' : '#C9D5E2', bd: on ? accent : '#2E3F53', pick: function () { self.setState({ mDays: r[0] }); self.loadRemoteMetrics(r[0]); } };
      }),
      mRefresh: function () { self.loadRemoteMetrics(days); self.forceUpdate(); },
      mKpis: kpis,
      mBars: bars, mBarsAria: 'Visitas por día: ' + total + ' en el periodo', mBarsEmpty: total === 0,
      mFunnel: fsteps.map(function (f, i) { return { label: f[0], val: f[1] || 0, w: Math.max(2, Math.round(((f[1] || 0) / fmax) * 100)), pct: i ? pct(f[1] || 0, m.visitas || 0) : '100 %' }; }),
      mTop: (m.top || []).map(function (t) { return { name: nm(t.p), n: t.n, w: Math.round((t.n / topMax) * 100) }; }),
      mTopEmpty: !(m.top || []).length,
      mRecent: (m.recientes || []).map(function (r) {
        const d = new Date(r.t);
        return { when: self.fmtDate(r.t) + ' ' + (isNaN(d) ? '' : d.toLocaleTimeString('es-PE', { hour: '2-digit', minute: '2-digit' })), what: L[r.e] || r.e, item: r.p ? nm(r.p) : '' };
      }),
      mRecentEmpty: !(m.recientes || []).length
    };
  }

  syncHash() {
    let h = '';
    try { h = (window.location.hash || '').slice(1); } catch (e) { h = ''; }
    const s = this.st();
    if (h === 'admin' && !s.adminOpen) { this.setState({ adminOpen: true, adminTab: s.adminTab || 'orders', adminErr: '', adminMsg: '' }); this._adminOpened(); }
    if (h !== 'admin' && s.adminOpen) this.setState({ adminOpen: false });
    if (h === 'reembolsos' && !s.policyOpen) this.setState({ policyOpen: true });
    if (h === 'terminos' && !s.termsOpen) this.setState({ termsOpen: true });
    if (h === 'privacidad' && !s.privOpen) this.setState({ privOpen: true });
    if (h === 'vendedor' && !s.sellerOpen) this.setState({ sellerOpen: true, sellerErr: '' });
    if (h !== 'vendedor' && s.sellerOpen) this.setState({ sellerOpen: false });
  }

  setHash(h) {
    try {
      if (h) { if (window.location.hash !== '#' + h) window.location.hash = h; }
      else if (window.location.hash) { window.history.replaceState(null, '', window.location.pathname + window.location.search); }
    } catch (e) { /* el visor no permite cambiar la dirección */ }
  }

  _adminOpened() {
    const self = this;
    if (!self.props.sheetsUrl || self.st().adUnlocked) { self._adminLoad(); return; }
    const key = self.db().settings.adminKey;
    if (!key) { self.setState({ adGateErr: '', adGateBusy: false }); return; }
    self.setState({ adGateBusy: true, adGateErr: '' });
    self.callSheet({ tipo: 'admin', accion: 'ajustesLeer', clave: key })
      .then(function (r) {
        if (r && r.ok) { self.setState({ adUnlocked: true, adGateBusy: false }); self._adminLoad(); }
        else self.setState({ adGateBusy: false });
      })
      .catch(function () { self.setState({ adGateBusy: false, adGateErr: 'No se pudo conectar. Intenta de nuevo.' }); });
  }

  adminUnlock() {
    const self = this;
    const key = self.val('ix-ad-gate');
    if (!key) { self.setState({ adGateErr: 'Escribe la clave.' }); return; }
    self.setState({ adGateBusy: true, adGateErr: '' });
    self.callSheet({ tipo: 'admin', accion: 'ajustesLeer', clave: key })
      .then(function (r) {
        if (r && r.ok) {
          self.dbSet(function (d) { d.settings.adminKey = key; });
          self.setVal('ix-ad-gate', '');
          self.setState({ adUnlocked: true, adGateBusy: false, adGateErr: '' });
          self._adminLoad();
        } else {
          setTimeout(function () { self.setState({ adGateBusy: false, adGateErr: 'Clave incorrecta.' }); }, 1200);
        }
      })
      .catch(function () { self.setState({ adGateBusy: false, adGateErr: 'No se pudo conectar. Intenta de nuevo.' }); });
  }

  adminLock() {
    const self = this;
    self.dbSet(function (d) { d.settings.adminKey = ''; });
    self.setState({ adUnlocked: false, adminOpen: false, oRemote: null, adGateErr: '' });
    self.setHash('');
    self.say('Sesión cerrada en este navegador.');
  }

  _adminLoad() {
    const self = this;
    setTimeout(function () {
      self.setVal('ix-ad-credit', self.db().settings.creditPerSale || '');
      self.setVal('ix-ad-url', self.db().settings.storeUrl || '');
      self.setVal('ix-ad-key', self.db().settings.adminKey || '');
      self.loadRemoteMetrics(self.st().mDays === undefined ? 30 : self.st().mDays);
      self.loadRemoteOrders();
      if (self.props.sheetsUrl) { self.loadAjustes(); self.loadVend(); }
    }, 40);
  }

  keyData() {
    const rows = ['sin', 'cos', 'tan', 'ln', 'log', 'x²', '√', '(', ')', '÷', '7', '8', '9', '×', 'del', '4', '5', '6', '−', 'π', '1', '2', '3', '+', 'ans', '0', '.', '(−)', 'EEX', 'enter'];
    return rows.map(function (t, i) {
      return { t: t, cls: t === 'enter' ? 'k-ac' : (i < 10 ? 'k-dim' : '') };
    });
  }

  reducedMotion() {
    return !!(window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  }

  stopCalc() { /* sin temporizadores en la demostración */ }

  /* ---- Demostración de Nodo A: resultados ya calculados (el motor no viaja a la página) ---- */
  simData() {
    return [{"title": "Viga simple 6 m", "cases": ["CM", "CV", "1.4CM+1.7CV"], "desc": [["Viga simple 6 m: 2 nudos, 1 barras. Caso CM. Presiona Calcular o elige un resultado.", "Reacciones (CM): nudo 1 Ry 4.5 tonf, nudo 2 Ry 4.5 tonf.", "Fuerza axial (CM): N = 0 (tonf).", "Fuerza cortante (CM): V+ 4.5 (B1), V- -4.5 (B1) (tonf).", "Momento flector (CM): M+ 6.75 (B1), M- 0 (B1) (tonf·m).", "Giros de las barras (CM).", "Deformada (CM): desplazamiento máximo 4.47 mm (barra B1).", "Tabla de reacciones (CM)."], ["Viga simple 6 m: 2 nudos, 1 barras. Caso CV. Presiona Calcular o elige un resultado.", "Reacciones (CV): nudo 1 Ry 4.67 tonf, nudo 2 Ry 3.83 tonf.", "Fuerza axial (CV): N = 0 (tonf).", "Fuerza cortante (CV): V+ 4.67 (B1), V- -3.83 (B1) (tonf).", "Momento flector (CV): M+ 7.35 (B1), M- 0 (B1) (tonf·m).", "Giros de las barras (CV).", "Deformada (CV): desplazamiento máximo 4.67 mm (barra B1).", "Tabla de reacciones (CV)."], ["Viga simple 6 m: 2 nudos, 1 barras. Caso 1.4CM+1.7CV. Presiona Calcular o elige un resultado.", "Reacciones (1.4CM+1.7CV): nudo 1 Ry 14.2 tonf, nudo 2 Ry 12.8 tonf.", "Fuerza axial (1.4CM+1.7CV): N = 0 (tonf).", "Fuerza cortante (1.4CM+1.7CV): V+ 14.2 (B1), V- -12.8 (B1) (tonf).", "Momento flector (1.4CM+1.7CV): M+ 21.6 (B1), M- 0 (B1) (tonf·m).", "Giros de las barras (1.4CM+1.7CV).", "Deformada (1.4CM+1.7CV): desplazamiento máximo 14.2 mm (barra B1).", "Tabla de reacciones (1.4CM+1.7CV)."]]}, {"title": "Viga continua 3 tramos", "cases": ["CM", "CV1", "CV2", "1.4CM+1.7CV1", "1.4CM+1.7CV2", "1.4CM+1.7(CV1+CV2)"], "desc": [["Viga continua 3 tramos: 4 nudos, 3 barras. Caso CM. Presiona Calcular o elige un resultado.", "Reacciones (CM): nudo 1 Ry 3.73 tonf, nudo 2 Ry 12.5 tonf, nudo 3 Ry 11.1 tonf, nudo 4 Ry 2.73 tonf.", "Fuerza axial (CM): N = 0 (tonf).", "Fuerza cortante (CM): V+ 6.21 (B2), V- -6.27 (B1) (tonf).", "Momento flector (CM): M+ 3.47 (B1), M- -6.36 (B2) (tonf·m).", "Giros de las barras (CM).", "Deformada (CM): desplazamiento máximo 0.68 mm (barra B2).", "Tabla de reacciones (CM)."], ["Viga continua 3 tramos: 4 nudos, 3 barras. Caso CV1. Presiona Calcular o elige un resultado.", "Reacciones (CV1): nudo 1 Ry 2.69 tonf, nudo 2 Ry 3.49 tonf, nudo 3 Ry 2.34 tonf, nudo 4 Ry 2.28 tonf.", "Fuerza axial (CV1): N = 0 (tonf).", "Fuerza cortante (CV1): V+ 2.69 (B1), V- -3.31 (B1) (tonf).", "Momento flector (CV1): M+ 3.01 (B1), M- -1.57 (B2) (tonf·m).", "Giros de las barras (CV1).", "Deformada (CV1): desplazamiento máximo 0.623 mm (barra B1).", "Tabla de reacciones (CV1)."], ["Viga continua 3 tramos: 4 nudos, 3 barras. Caso CV2. Presiona Calcular o elige un resultado.", "Reacciones (CV2): nudo 1 Ry -0.449 tonf, nudo 2 Ry 4 tonf, nudo 3 Ry 4.3 tonf, nudo 4 Ry -0.642 tonf.", "Fuerza axial (CV2): N = 0 (tonf).", "Fuerza cortante (CV2): V+ 3.55 (B2), V- -3.65 (B2) (tonf).", "Momento flector (CV2): M+ 3 (B2), M- -2.57 (B3) (tonf·m).", "Giros de las barras (CV2).", "Deformada (CV2): desplazamiento máximo 0.803 mm (barra B2).", "Tabla de reacciones (CV2)."], ["Viga continua 3 tramos: 4 nudos, 3 barras. Caso 1.4CM+1.7CV1. Presiona Calcular o elige un resultado.", "Reacciones (1.4CM+1.7CV1): nudo 1 Ry 9.78 tonf, nudo 2 Ry 23.4 tonf, nudo 3 Ry 19.5 tonf, nudo 4 Ry 7.69 tonf.", "Fuerza axial (1.4CM+1.7CV1): N = 0 (tonf).", "Fuerza cortante (1.4CM+1.7CV1): V+ 11.7 (B3), V- -14.4 (B1) (tonf).", "Momento flector (1.4CM+1.7CV1): M+ 9.89 (B1), M- -11.6 (B1) (tonf·m).", "Giros de las barras (1.4CM+1.7CV1).", "Deformada (1.4CM+1.7CV1): desplazamiento máximo 1.81 mm (barra B1).", "Tabla de reacciones (1.4CM+1.7CV1)."], ["Viga continua 3 tramos: 4 nudos, 3 barras. Caso 1.4CM+1.7CV2. Presiona Calcular o elige un resultado.", "Reacciones (1.4CM+1.7CV2): nudo 1 Ry 4.46 tonf, nudo 2 Ry 24.3 tonf, nudo 3 Ry 22.8 tonf, nudo 4 Ry 2.73 tonf.", "Fuerza axial (1.4CM+1.7CV2): N = 0 (tonf).", "Fuerza cortante (1.4CM+1.7CV2): V+ 14.7 (B2), V- -14.3 (B2) (tonf).", "Momento flector (1.4CM+1.7CV2): M+ 9.68 (B2), M- -12.7 (B1) (tonf·m).", "Giros de las barras (1.4CM+1.7CV2).", "Deformada (1.4CM+1.7CV2): desplazamiento máximo 2.32 mm (barra B2).", "Tabla de reacciones (1.4CM+1.7CV2)."], ["Viga continua 3 tramos: 4 nudos, 3 barras. Caso 1.4CM+1.7(CV1+CV2). Presiona Calcular o elige un resultado.", "Reacciones (1.4CM+1.7(CV1+CV2)): nudo 1 Ry 9.02 tonf, nudo 2 Ry 30.2 tonf, nudo 3 Ry 26.8 tonf, nudo 4 Ry 6.6 tonf.", "Fuerza axial (1.4CM+1.7(CV1+CV2)): N = 0 (tonf).", "Fuerza cortante (1.4CM+1.7(CV1+CV2)): V+ 15 (B2), V- -15.2 (B1) (tonf).", "Momento flector (1.4CM+1.7(CV1+CV2)): M+ 8.41 (B1), M- -15.4 (B1) (tonf·m).", "Giros de las barras (1.4CM+1.7(CV1+CV2)).", "Deformada (1.4CM+1.7(CV1+CV2)): desplazamiento máximo 1.65 mm (barra B2).", "Tabla de reacciones (1.4CM+1.7(CV1+CV2))."]]}, {"title": "Portico 2 vanos con rotula", "cases": ["CM", "CV", "CS", "1.4CM+1.7CV", "1.25(CM+CV)+CS", "1.25(CM+CV)-CS", "0.9CM+CS", "0.9CM-CS"], "desc": [["Pórtico 2 vanos con rótula: 6 nudos, 5 barras. Caso CM. Presiona Calcular o elige un resultado.", "Reacciones (CM): nudo 1 Ry 4.06 tonf, nudo 3 Ry 8.03 tonf, nudo 5 Ry 6.1 tonf.", "Fuerza axial (CM): N+ -1.08 (B5), N- -8.03 (B2) (tonf).", "Fuerza cortante (CM): V+ 4.9 (B5), V- -6.1 (B5) (tonf).", "Momento flector (CM): M+ 5.45 (B5), M- -3.02 (B5) (tonf·m).", "Giros de las barras (CM).", "Deformada (CM): desplazamiento máximo 2.58 mm (barra B5).", "Tabla de reacciones (CM)."], ["Pórtico 2 vanos con rótula: 6 nudos, 5 barras. Caso CV. Presiona Calcular o elige un resultado.", "Reacciones (CV): nudo 1 Ry 1.57 tonf, nudo 3 Ry 3.01 tonf, nudo 5 Ry 2.22 tonf.", "Fuerza axial (CV): N+ -0.395 (B5), N- -3.01 (B2) (tonf).", "Fuerza cortante (CV): V+ 1.78 (B5), V- -2.22 (B5) (tonf).", "Momento flector (CV): M+ 1.98 (B5), M- -1.1 (B5) (tonf·m).", "Giros de las barras (CV).", "Deformada (CV): desplazamiento máximo 0.936 mm (barra B5).", "Tabla de reacciones (CV)."], ["Pórtico 2 vanos con rótula: 6 nudos, 5 barras. Caso CS. Presiona Calcular o elige un resultado.", "Reacciones (CS): nudo 1 Ry -1.2 tonf, nudo 3 Ry 0.778 tonf, nudo 5 Ry 0.421 tonf.", "Fuerza axial (CS): N+ 1.2 (B1), N- -2.11 (B4) (tonf).", "Fuerza cortante (CS): V+ 1.89 (B1), V- -1.2 (B4) (tonf).", "Momento flector (CS): M+ 2.86 (B1), M- -3.76 (B1) (tonf·m).", "Giros de las barras (CS).", "Deformada (CS): desplazamiento máximo 2.75 mm (barra B5).", "Tabla de reacciones (CS)."], ["Pórtico 2 vanos con rótula: 6 nudos, 5 barras. Caso 1.4CM+1.7CV. Presiona Calcular o elige un resultado.", "Reacciones (1.4CM+1.7CV): nudo 1 Ry 8.35 tonf, nudo 3 Ry 16.4 tonf, nudo 5 Ry 12.3 tonf.", "Fuerza axial (1.4CM+1.7CV): N+ -2.18 (B5), N- -16.4 (B2) (tonf).", "Fuerza cortante (1.4CM+1.7CV): V+ 9.88 (B5), V- -12.3 (B5) (tonf).", "Momento flector (1.4CM+1.7CV): M+ 11 (B5), M- -6.1 (B5) (tonf·m).", "Giros de las barras (1.4CM+1.7CV).", "Deformada (1.4CM+1.7CV): desplazamiento máximo 5.2 mm (barra B5).", "Tabla de reacciones (1.4CM+1.7CV)."], ["Pórtico 2 vanos con rótula: 6 nudos, 5 barras. Caso 1.25(CM+CV)+CS. Presiona Calcular o elige un resultado.", "Reacciones (1.25(CM+CV)+CS): nudo 1 Ry 5.84 tonf, nudo 3 Ry 14.6 tonf, nudo 5 Ry 10.8 tonf.", "Fuerza axial (1.25(CM+CV)+CS): N+ -3.39 (B5), N- -14.6 (B2) (tonf).", "Fuerza cortante (1.25(CM+CV)+CS): V+ 7.92 (B5), V- -10.8 (B5) (tonf).", "Momento flector (1.25(CM+CV)+CS): M+ 8.37 (B5), M- -7.26 (B5) (tonf·m).", "Giros de las barras (1.25(CM+CV)+CS).", "Deformada (1.25(CM+CV)+CS): desplazamiento máximo 3.76 mm (barra B5).", "Tabla de reacciones (1.25(CM+CV)+CS)."], ["Pórtico 2 vanos con rótula: 6 nudos, 5 barras. Caso 1.25(CM+CV)-CS. Presiona Calcular o elige un resultado.", "Reacciones (1.25(CM+CV)-CS): nudo 1 Ry 8.24 tonf, nudo 3 Ry 13 tonf, nudo 5 Ry 9.98 tonf.", "Fuerza axial (1.25(CM+CV)-CS): N+ -0.00611 (B4), N- -13 (B2) (tonf).", "Fuerza cortante (1.25(CM+CV)-CS): V+ 8.77 (B5), V- -9.98 (B5) (tonf).", "Momento flector (1.25(CM+CV)-CS): M+ 10.2 (B5), M- -6.97 (B1) (tonf·m).", "Giros de las barras (1.25(CM+CV)-CS).", "Deformada (1.25(CM+CV)-CS): desplazamiento máximo 6.3 mm (barra B5).", "Tabla de reacciones (1.25(CM+CV)-CS)."], ["Pórtico 2 vanos con rótula: 6 nudos, 5 barras. Caso 0.9CM+CS. Presiona Calcular o elige un resultado.", "Reacciones (0.9CM+CS): nudo 1 Ry 2.46 tonf, nudo 3 Ry 8.01 tonf, nudo 5 Ry 5.91 tonf.", "Fuerza axial (0.9CM+CS): N+ -2.46 (B1), N- -8.01 (B2) (tonf).", "Fuerza cortante (0.9CM+CS): V+ 3.99 (B5), V- -5.91 (B5) (tonf).", "Momento flector (0.9CM+CS): M+ 4.82 (B3), M- -4.82 (B5) (tonf·m).", "Giros de las barras (0.9CM+CS).", "Deformada (0.9CM+CS): desplazamiento máximo 2.5 mm (barra B5).", "Tabla de reacciones (0.9CM+CS)."], ["Pórtico 2 vanos con rótula: 6 nudos, 5 barras. Caso 0.9CM-CS. Presiona Calcular o elige un resultado.", "Reacciones (0.9CM-CS): nudo 1 Ry 4.86 tonf, nudo 3 Ry 6.45 tonf, nudo 5 Ry 5.07 tonf.", "Fuerza axial (0.9CM-CS): N+ 0.999 (B4), N- -6.45 (B2) (tonf).", "Fuerza cortante (0.9CM-CS): V+ 4.86 (B4), V- -5.07 (B5) (tonf).", "Momento flector (0.9CM-CS): M+ 5.88 (B5), M- -5.01 (B4) (tonf·m).", "Giros de las barras (0.9CM-CS).", "Deformada (0.9CM-CS): desplazamiento máximo 4.44 mm (barra B5).", "Tabla de reacciones (0.9CM-CS)."]]}, {"title": "Portico 3 pisos, 2 vanos", "cases": ["CM", "CV", "CS", "1.4CM+1.7CV", "1.25(CM+CV)+CS", "1.25(CM+CV)-CS", "0.9CM+CS", "0.9CM-CS"], "desc": [["Pórtico 3 pisos, 2 vanos: 12 nudos, 15 barras. Caso CM. Presiona Calcular o elige un resultado.", "Reacciones (CM): nudo 1 Ry 21.5 tonf, nudo 2 Ry 42.7 tonf, nudo 3 Ry 16.8 tonf.", "Fuerza axial (CM): N+ 0.996 (B10), N- -42.7 (B2) (tonf).", "Fuerza cortante (CM): V+ 7.4 (B12), V- -7.99 (B14) (tonf).", "Momento flector (CM): M+ 4.39 (B14), M- -6.36 (B10) (tonf·m).", "Giros de las barras (CM).", "Deformada (CM): desplazamiento máximo 1.57 mm (barra B14).", "Tabla de reacciones (CM)."], ["Pórtico 3 pisos, 2 vanos: 12 nudos, 15 barras. Caso CV. Presiona Calcular o elige un resultado.", "Reacciones (CV): nudo 1 Ry 4.8 tonf, nudo 2 Ry 9.45 tonf, nudo 3 Ry 3.75 tonf.", "Fuerza axial (CV): N+ 0.283 (B10), N- -9.45 (B2) (tonf).", "Fuerza cortante (CV): V+ 1.94 (B12), V- -2.1 (B10) (tonf).", "Momento flector (CV): M+ 1.05 (B10), M- -1.72 (B10) (tonf·m).", "Giros de las barras (CV).", "Deformada (CV): desplazamiento máximo 0.316 mm (barra B12).", "Tabla de reacciones (CV)."], ["Pórtico 3 pisos, 2 vanos: 12 nudos, 15 barras. Caso CS. Presiona Calcular o elige un resultado.", "Reacciones (CS): nudo 1 Ry -5.32 tonf, nudo 2 Ry -2.1 tonf, nudo 3 Ry 7.42 tonf.", "Fuerza axial (CS): N+ 5.32 (B1), N- -7.42 (B3) (tonf).", "Fuerza cortante (CS): V+ 4.05 (B2), V- -3.68 (B11) (tonf).", "Momento flector (CS): M+ 7.22 (B10), M- -8.1 (B11) (tonf·m).", "Giros de las barras (CS).", "Deformada (CS): desplazamiento máximo 8.75 mm (nudo 10).", "Tabla de reacciones (CS)."], ["Pórtico 3 pisos, 2 vanos: 12 nudos, 15 barras. Caso 1.4CM+1.7CV. Presiona Calcular o elige un resultado.", "Reacciones (1.4CM+1.7CV): nudo 1 Ry 38.3 tonf, nudo 2 Ry 75.8 tonf, nudo 3 Ry 29.9 tonf.", "Fuerza axial (1.4CM+1.7CV): N+ 1.88 (B10), N- -75.8 (B2) (tonf).", "Fuerza cortante (1.4CM+1.7CV): V+ 13.7 (B12), V- -14.6 (B10) (tonf).", "Momento flector (1.4CM+1.7CV): M+ 7.31 (B10), M- -11.8 (B10) (tonf·m).", "Giros de las barras (1.4CM+1.7CV).", "Deformada (1.4CM+1.7CV): desplazamiento máximo 2.62 mm (barra B14).", "Tabla de reacciones (1.4CM+1.7CV)."], ["Pórtico 3 pisos, 2 vanos: 12 nudos, 15 barras. Caso 1.25(CM+CV)+CS. Presiona Calcular o elige un resultado.", "Reacciones (1.25(CM+CV)+CS): nudo 1 Ry 27.6 tonf, nudo 2 Ry 63.1 tonf, nudo 3 Ry 33.1 tonf.", "Fuerza axial (1.25(CM+CV)+CS): N+ 0.634 (B10), N- -63.1 (B2) (tonf).", "Fuerza cortante (1.25(CM+CV)+CS): V+ 9.79 (B12), V- -15.1 (B10) (tonf).", "Momento flector (1.25(CM+CV)+CS): M+ 8 (B10), M- -15.9 (B10) (tonf·m).", "Giros de las barras (1.25(CM+CV)+CS).", "Deformada (1.25(CM+CV)+CS): desplazamiento máximo 9.26 mm (barra B14).", "Tabla de reacciones (1.25(CM+CV)+CS)."], ["Pórtico 3 pisos, 2 vanos: 12 nudos, 15 barras. Caso 1.25(CM+CV)-CS. Presiona Calcular o elige un resultado.", "Reacciones (1.25(CM+CV)-CS): nudo 1 Ry 38.2 tonf, nudo 2 Ry 67.3 tonf, nudo 3 Ry 18.2 tonf.", "Fuerza axial (1.25(CM+CV)-CS): N+ 3.2 (B12), N- -67.3 (B2) (tonf).", "Fuerza cortante (1.25(CM+CV)-CS): V+ 14 (B11), V- -10.4 (B14) (tonf).", "Momento flector (1.25(CM+CV)-CS): M+ 7.93 (B1), M- -14.4 (B10) (tonf·m).", "Giros de las barras (1.25(CM+CV)-CS).", "Deformada (1.25(CM+CV)-CS): desplazamiento máximo 8.77 mm (barra B14).", "Tabla de reacciones (1.25(CM+CV)-CS)."], ["Pórtico 3 pisos, 2 vanos: 12 nudos, 15 barras. Caso 0.9CM+CS. Presiona Calcular o elige un resultado.", "Reacciones (0.9CM+CS): nudo 1 Ry 14.1 tonf, nudo 2 Ry 36.3 tonf, nudo 3 Ry 22.5 tonf.", "Fuerza axial (0.9CM+CS): N+ -0.0688 (B10), N- -36.3 (B2) (tonf).", "Fuerza cortante (0.9CM+CS): V+ 5.46 (B14), V- -9.68 (B10) (tonf).", "Momento flector (0.9CM+CS): M+ 7.1 (B2), M- -11.5 (B10) (tonf·m).", "Giros de las barras (0.9CM+CS).", "Deformada (0.9CM+CS): desplazamiento máximo 8.99 mm (barra B14).", "Tabla de reacciones (0.9CM+CS)."], ["Pórtico 3 pisos, 2 vanos: 12 nudos, 15 barras. Caso 0.9CM-CS. Presiona Calcular o elige un resultado.", "Reacciones (0.9CM-CS): nudo 1 Ry 24.7 tonf, nudo 2 Ry 40.5 tonf, nudo 3 Ry 7.67 tonf.", "Fuerza axial (0.9CM-CS): N+ 3.11 (B12), N- -40.5 (B2) (tonf).", "Fuerza cortante (0.9CM-CS): V+ 9.53 (B11), V- -6.35 (B14) (tonf).", "Momento flector (0.9CM-CS): M+ 7.35 (B1), M- -11.3 (B10) (tonf·m).", "Giros de las barras (0.9CM-CS).", "Deformada (0.9CM-CS): desplazamiento máximo 8.69 mm (barra B14).", "Tabla de reacciones (0.9CM-CS)."]]}, {"title": "Armadura Warren 12 m", "cases": ["CM", "CV"], "desc": [["Armadura Warren 12 m: 13 nudos, 23 barras. Caso CM. Presiona Calcular o elige un resultado.", "Reacciones (CM): nudo 1 Ry 0.612 tonf, nudo 7 Ry 0.612 tonf.", "Fuerza axial (CM): N+ 0.612 (B7), N- -0.645 (B18) (tonf).", "Fuerza cortante (CM): V = 0 (tonf).", "Momento flector (CM): M = 0 (tonf·m).", "Giros de las barras (CM).", "Deformada (CM): desplazamiento máximo 0.635 mm (nudo 4).", "Tabla de reacciones (CM)."], ["Armadura Warren 12 m: 13 nudos, 23 barras. Caso CV. Presiona Calcular o elige un resultado.", "Reacciones (CV): nudo 1 Ry 0.297 tonf, nudo 7 Ry 0.212 tonf.", "Fuerza axial (CV): N+ 0.496 (B7), N- -0.425 (B21) (tonf).", "Fuerza cortante (CV): V = 0 (tonf).", "Momento flector (CV): M = 0 (tonf·m).", "Giros de las barras (CV).", "Deformada (CV): desplazamiento máximo 0.458 mm (nudo 10).", "Tabla de reacciones (CV)."]]}, {"title": "Armadura Pratt 12 m", "cases": ["CM", "CV"], "desc": [["Armadura Pratt 12 m: 12 nudos, 21 barras. Caso CM. Presiona Calcular o elige un resultado.", "Reacciones (CM): nudo 1 Ry 1.02 tonf, nudo 7 Ry 1.02 tonf.", "Fuerza axial (CM): N+ 1.09 (B3), N- -1.23 (B8) (tonf).", "Fuerza cortante (CM): V = 0 (tonf).", "Momento flector (CM): M = 0 (tonf·m).", "Giros de las barras (CM).", "Deformada (CM): desplazamiento máximo 1.14 mm (nudo 10).", "Tabla de reacciones (CM)."], ["Armadura Pratt 12 m: 12 nudos, 21 barras. Caso CV. Presiona Calcular o elige un resultado.", "Reacciones (CV): nudo 1 Ry 0 tonf, nudo 7 Ry 0 tonf.", "Fuerza axial (CV): N = 0 (tonf).", "Fuerza cortante (CV): V = 0 (tonf).", "Momento flector (CV): M = 0 (tonf·m).", "Giros de las barras (CV).", "Deformada (CV): desplazamiento máximo 0 mm (nudo 1).", "Tabla de reacciones (CV)."]]}];
  }

  simVals() {
    const self = this;
    const s = self.st();
    const accent = self.props.accent || '#0096D6';
    const data = self.simData();
    const B = 'img/';
    const imgs = [B + 'nodoa-demo-0.webp', B + 'nodoa-demo-1.webp', B + 'nodoa-demo-2.webp', B + 'nodoa-demo-3.webp', B + 'nodoa-demo-4.webp', B + 'nodoa-demo-5.webp'];
    const ex = typeof s.simEx === 'number' ? s.simEx : 3;
    const d = data[ex];
    const ci = Math.min(s.simCase || 0, d.cases.length - 1);
    const vi = s.simView || 0;
    const truss = ex >= 4;
    const touch = function (o) {
      if (!self._simUsed) { self._simUsed = true; self.track('demo'); }
      self.setState(o);
    };
    const on = function (flag) { return { bg: flag ? accent : 'transparent', fg: flag ? '#06121C' : '#C9D5E2', bd: flag ? accent : '#2E3F53' }; };
    const exLabels = ['Viga simple', 'Viga continua', 'Pórtico con rótula', 'Pórtico de 3 pisos', 'Armadura Warren', 'Armadura Pratt'];
    const tabs = ['Modelo', 'Reacciones', 'Axial N', 'Cortante V', 'Momento M', 'Giros', 'Deformada', 'Tabla'];
    return {
      simExs: exLabels.map(function (t, i) { const c = on(i === ex); return { label: t, pressed: i === ex, bg: c.bg, fg: c.fg, bd: c.bd, pick: function () { touch({ simEx: i, simCase: 0, simView: 0 }); } }; }),
      simTabs: tabs.map(function (t, i) { const c = on(i === vi); return { tab: t, pressed: i === vi, bg: c.bg, fg: c.fg, bd: c.bd, pick: function () { touch({ simView: i }); } }; }),
      simCases: d.cases.map(function (n, i) { const c = on(i === ci); return { label: n, pressed: i === ci, bg: c.bg, fg: c.fg, bd: c.bd, pick: function () { touch({ simCase: i }); } }; }),
      simDesc: d.desc[ci][vi],
      simTitle: d.title.replace('Portico', 'Pórtico').replace('rotula', 'rótula'),
      simImg: imgs[ex],
      simW: (tabs.length * 100) + '%',
      simTx: (-vi * 100 / tabs.length).toFixed(4) + '%',
      simTy: (-ci * 100 / d.cases.length).toFixed(4) + '%',
      simRun: function () { touch({ simView: truss ? 2 : 4 }); }
    };
  }


  renderVals() {
    const self = this;
    const s = self.st();
    const accent = self.props.accent || '#0096D6';
    const compat = self.props.compatConfirmada !== false;
    const all = self.catalog();
    const map = {};
    all.forEach(function (p) { map[p.id] = p; });
    const packsRaw = self.packsData();
    const calc = self.cartCalc(s.cart);
    const on = function (flag) { return { bg: flag ? accent : 'transparent', fg: flag ? '#06121C' : '#C9D5E2', bd: flag ? accent : '#2E3F53' }; };

    /* ---- Demostracion: simulador de Nodo A ---- */
    const simV = self.simVals();

    /* ---- Catalogo ---- */
    const q = self.norm(s.q);
    const pkSel = packsRaw.filter(function (k) { return k.id === s.packFilter; })[0];
    const priceHit = function (p, key) {
      if (key === 'lt10') return p.price < 1000;
      if (key === 'mid') return p.price >= 1000 && p.price <= 2000;
      if (key === 'gt20') return p.price > 2000;
      return true;
    };
    const catHit = function (p, c) { return c === 'Ingeniería civil' ? p.civil : p.cat === c; };
    let list = all.filter(function (p) {
      if (s.cats.length && !s.cats.some(function (c) { return catHit(p, c); })) return false;
      if (s.price && !priceHit(p, s.price)) return false;
      if (q && self.norm(p.name + ' ' + p.code + ' ' + p.cat + ' ' + p.short + ' ' + (p.kw || '')).indexOf(q) < 0) return false;
      if (pkSel && pkSel.items.indexOf(p.id) < 0) return false;
      return true;
    });
    if (s.sort === 'asc') list = list.slice().sort(function (a, b) { return a.price - b.price; });
    if (s.sort === 'desc') list = list.slice().sort(function (a, b) { return b.price - a.price; });
    if (s.sort === 'rec') list = list.slice().sort(function (a, b) { return b.ts - a.ts; });
    const filtering = !!(s.cats.length || s.price || q || pkSel);
    const limited = !s.showAll && !filtering && s.sort === 'rel';
    const shownRaw = limited ? list.slice(0, 6) : list;
    const card = function (p) {
      const inCart = s.cart.indexOf(p.id) >= 0 || self.inAnyPack(s.cart, p.id);
      const m = self.meta(p.cat);
      return {
        name: p.name, code: p.code, ver: p.ver, cat: p.cat, short: p.short, priceTxt: self.money(p.price), amt: self.amt(p.price), hasOld: !!p.oldPrice, oldTxt: p.oldPrice ? self.money(p.oldPrice) : '',
        color: m.color, tint: m.tint, glow: m.glow, icon: m.icon,
        img: p.img, imgAlt: p.alts[0] || p.name, hasImg: !!p.img, noImg: !p.img, compat: compat,
        addLabel: p.soon ? 'Próximamente' : (inCart ? 'En tu carrito' : 'Agregar al carrito'), addCls: p.soon || inCart ? 'btn-ghost' : 'btn-primary', soon: !!p.soon,
        add: function () { if (inCart) self.setState({ cartOpen: true }); else self.addProduct(p.id); },
        open: function () { self.setState({ detailId: p.id, dpImg: 0 }); }
      };
    };
    const catNames = ['Ingeniería civil', 'Estructuras', 'Hidráulica y saneamiento', 'Vías y transporte', 'Topografía', 'Cálculo y análisis', 'Utilidades'];
    const toggleCat = function (c) {
      const has = s.cats.indexOf(c) >= 0;
      self.setState({ cats: has ? s.cats.filter(function (x) { return x !== c; }) : s.cats.concat([c]), showAll: false });
    };
    const catOpts = catNames.map(function (c) {
      const n = all.filter(function (p) { return catHit(p, c); }).length;
      const st = on(s.cats.indexOf(c) >= 0);
      return { label: c, count: n, icon: self.meta(c).icon, pressed: s.cats.indexOf(c) >= 0, disabled: n === 0, bg: st.bg, fg: st.fg, bd: st.bd === accent ? accent : '#223041', toggle: function () { toggleCat(c); } };
    });
    const priceDefs = [{ k: 'lt10', label: 'Hasta S/ 10' }, { k: 'mid', label: 'S/ 10 a S/ 20' }, { k: 'gt20', label: 'Más de S/ 20' }];
    const priceOpts = priceDefs.map(function (d) {
      const st = on(s.price === d.k);
      return { label: d.label, count: all.filter(function (p) { return priceHit(p, d.k); }).length, pressed: s.price === d.k, bg: st.bg, fg: st.fg, bd: st.bd === accent ? accent : '#223041', toggle: function () { self.setState({ price: s.price === d.k ? '' : d.k, showAll: false }); } };
    });
    const chips = s.cats.map(function (c) { return { label: c, remove: function () { toggleCat(c); } }; });
    priceDefs.forEach(function (d) { if (s.price === d.k) chips.push({ label: d.label, remove: function () { self.setState({ price: '' }); } }); });
    if (q) chips.push({ label: 'Búsqueda: ' + s.q, remove: function () { self.setVal('ix-q', ''); self.setState({ q: '' }); } });
    if (pkSel) chips.push({ label: pkSel.name, remove: function () { self.setState({ packFilter: '', showAll: false }); } });
    const clearAll = function () { self.setVal('ix-q', ''); self.setState({ cats: [], price: '', q: '', packFilter: '', showAll: false }); };

    /* ---- Packs ---- */
    const packs = packsRaw.map(function (k) {
      const sum = k.items.reduce(function (a, pid) { return a + map[pid].price; }, 0);
      const inCart = s.cart.indexOf(k.id) >= 0;
      const km = self.meta(k.cat);
      const n = k.items.length;
      return {
        name: k.name, cat: k.cat, color: km.color, tint: km.tint, glow: km.glow, icon: km.icon,
        items: k.items.map(function (pid) {
          const it = map[pid];
          return { name: it.name, code: it.code, priceTxt: self.money(it.price), icon: self.meta(it.cat).icon, aria: 'Ver detalles de ' + it.name, open: function () { self.setState({ detailId: pid, dpImg: 0 }); } };
        }),
        minis: k.items.map(function (pid, i) {
          const mid = (n - 1) / 2;
          return { img: map[pid].img, rot: ((i - mid) * (n > 3 ? 6 : 9)).toFixed(1), ty: Math.round(Math.abs(i - mid) * (n > 3 ? 7 : 10)), z: 10 - Math.round(Math.abs(i - mid) * 2) };
        }),
        countTxt: n + ' programas', sumTxt: self.money(sum), priceAmt: self.amt(k.price), saveTxt: self.money(sum - k.price),
        addLabel: inCart ? 'Pack en tu carrito' : 'Agregar pack al carrito', addCls: inCart ? 'btn-ghost' : 'btn-primary',
        add: function () { if (inCart) self.setState({ cartOpen: true }); else self.addPack(k.id); },
        view: function () { self.viewIncluded(k.id); }
      };
    });

    /* ---- Ficha de producto ---- */
    const dpRaw = map[s.detailId];
    const dpIn = dpRaw ? (s.cart.indexOf(dpRaw.id) >= 0 || self.inAnyPack(s.cart, dpRaw.id)) : false;
    const dp = dpRaw || { name: '', code: '', ver: '', cat: '', short: '', desc: '', problem: '', inputs: [], results: [], alts: [], img: '', rel: [], price: 0 };
    const pos = ['0% 0', '50% 0', '100% 0'];
    const toItems = function (arr) { return (arr || []).map(function (t) { return { text: t }; }); };
    const dm = self.meta(dp.cat);
    const dpIdx = Math.min(s.dpImg || 0, Math.max(0, (dp.alts || []).length - 1));
    const dpThumbs = dp.img ? dp.alts.map(function (a, i) {
      return { src: dp.img, alt: a, pos: pos[i], aria: 'Ver captura: ' + a, pressed: i === dpIdx, bd: i === dpIdx ? dm.color : '#1E2A38', pick: function () { self.setState({ dpImg: i }); } };
    }) : [];
    const dpMain = dpThumbs[dpIdx] || { src: '', alt: '', pos: '0 0' };
    const exTxt = dp.ex || '';
    const exTodo = exTxt.indexOf('[COMPLETAR') === 0;

    /* ---- Checkout ---- */
    const methods = self.payMethods();
    const method = methods.filter(function (m) { return m.id === s.ckMethod; })[0];
    const kind = method ? method.kind : '';
    const cpLive = self.cpsValid(s.cps, calc);
    const cpNow = self.cpDiscOf(calc, cpLive);
    const live = { lines: calc.lines, subtotal: calc.subtotal, discount: calc.discount, cpDisc: cpNow, cpCode: cpLive.map(function (c) { return c.code; }).join(', '), total: Math.max(0, calc.total - cpNow) };
    const sum = s.ckStep === 4 && s.order ? s.order : live;
    const stepNames = ['Cuenta', 'Entrega', 'Pago', 'Confirmación'];
    const ckSteps = stepNames.map(function (n, i) {
      const cur = s.ckStep === i + 1;
      const past = s.ckStep > i + 1;
      return { n: i + 1, label: n, bg: cur ? accent : 'transparent', fg: cur ? '#06121C' : (past ? '#F5F7FA' : '#7C8DA1'), bd: cur || past ? accent : '#2E3F53', lfg: cur || past ? '#F5F7FA' : '#7C8DA1' };
    });
    const modelBtn = function (key, label) {
      const st = on(s.ckModel === key);
      return { label: label, pressed: s.ckModel === key, bg: st.bg, fg: st.fg, bd: st.bd, pick: function () { self.setState({ ckModel: key, ckErr: '' }); } };
    };
    const modeBtn = function (key, label) {
      const st = on(s.ckMode === key);
      return { label: label, pressed: s.ckMode === key, bg: st.bg, fg: st.fg, bd: st.bd, pick: function () { self.setState({ ckMode: key, ckErr: '' }); } };
    };
    const wallets = {
      yape: { qr: 'img/qr-yape.png', holder: 'Elvis Arturo Sandoval Sosa' },
      plin: { qr: 'img/qr-plin.png', holder: 'Elvis Arturo Sandoval Sosa' }
    };
    const wallet = wallets[s.ckMethod] || wallets.yape;
    const order = s.order || { num: '', mail: '', method: '', op: '', total: 0 };
    const waText = 'Hola INGNEX. Hice el pedido ' + order.num + ' por ' + self.money(order.total) + '. Método de pago: ' + order.method + (order.op ? '. Número de operación: ' + order.op : '') + (order.cpCode ? '. Código usado: ' + order.cpCode : '') + '. Correo de entrega: ' + order.mail + '.';
    const anyOverlay = s.cartOpen || !!s.detailId || s.ck || s.filtersOpen || s.sellerOpen || s.policyOpen || s.trackOpen || s.termsOpen || s.privOpen;

    return Object.assign(self.codeVals(s, calc, all), self.metricVals(s), self.orderVals(s), {
      keys: self.keyData(),
      adSheetsOn: !!self.props.sheetsUrl, adSheetsOff: !self.props.sheetsUrl, shopClosedOn: self.props.tiendaAbierta === false,
      policyDisp: s.policyOpen ? 'block' : 'none',
      termsDisp: s.termsOpen ? 'block' : 'none', privDisp: s.privOpen ? 'block' : 'none',
      openTerms: function () { self.setState({ termsOpen: true, privOpen: false }); },
      openPriv: function () { self.setState({ privOpen: true, termsOpen: false }); },
      closeLegal: function () { self.setState({ termsOpen: false, privOpen: false }); self.setHash(''); },
      noticeDisp: s.noticeOpen && !s.adminOpen ? 'flex' : 'none',
      noticeOk: function () { try { window.localStorage.setItem('ingnex-aviso-v1', '1'); } catch (e) { /* sin almacenamiento */ } self.setState({ noticeOpen: false }); },
      openPolicy: function () { self.setState({ policyOpen: true }); },
      closePolicy: function () { self.setState({ policyOpen: false }); self.setHash(''); },
      storeHidden: s.adminOpen ? 'true' : 'false',

      simExs: simV.simExs, simTabs: simV.simTabs, simCases: simV.simCases, simDesc: simV.simDesc, simTitle: simV.simTitle, simRun: simV.simRun, simImg: simV.simImg, simW: simV.simW, simTx: simV.simTx, simTy: simV.simTy,

      shown: shownRaw.map(card), resultCount: list.length,
      resultTxt: list.length === 1 ? '1 programa' : list.length + ' programas',
      noResults: list.length === 0, canShowMore: limited && list.length > 6,
      showMore: function () { self.setState({ showAll: true }); },
      catOpts: catOpts, priceOpts: priceOpts, chips: chips, hasChips: chips.length > 0, clearAll: clearAll,
      filterBtnTxt: chips.length ? 'Filtros (' + chips.length + ')' : 'Filtros',
      filtersCls: s.filtersOpen ? 'open' : '',
      openFilters: function () { self.setState({ filtersOpen: true }); },
      closeFilters: function () { self.setState({ filtersOpen: false }); },
      onSearch: function (e) { self.setState({ q: e && e.target ? e.target.value : '', showAll: false }); },
      onSort: function (e) { self.setState({ sort: e && e.target ? e.target.value : 'rel' }); },
      compatOn: compat, compatOff: !compat,
      pickEst: function () { self.setState({ cats: ['Estructuras'], showAll: false }); },
      pickHid: function () { self.setState({ cats: ['Hidráulica y saneamiento'], showAll: false }); },
      pickVia: function () { self.setState({ cats: ['Vías y transporte'], showAll: false }); },
      pickUti: function () { self.setState({ cats: ['Cálculo y análisis', 'Utilidades'], showAll: false }); },

      packs: packs,

      cartCount: calc.lines.length,
      cartAria: 'Abrir carrito, ' + calc.lines.length + (calc.lines.length === 1 ? ' artículo' : ' artículos'),
      openCart: function () { self.setState({ cartOpen: true }); },
      closeCart: function () { self.setState({ cartOpen: false }); },
      cartDisp: s.cartOpen ? 'flex' : 'none',
      cartEmpty: calc.lines.length === 0, cartHas: calc.lines.length > 0,
      cartLines: calc.lines.map(function (l) {
        return { name: l.name, sub: l.sub, priceTxt: self.money(l.price), wasTxt: l.was ? self.money(l.was) : '', rmAria: 'Quitar ' + l.name + ' del carrito', remove: function () { self.removeLine(l.id); } };
      }),
      subtotalTxt: self.money(sum.subtotal), discountTxt: sum.discount ? '− ' + self.money(sum.discount) : self.money(0), totalTxt: self.money(sum.total), totalAmt: self.amt(sum.total),
      cpRowDisp: sum.cpDisc ? 'flex' : 'none', cpRowLabel: 'Descuento por código' + (sum.cpCode ? ' (' + sum.cpCode + ')' : ''), cpRowTxt: '-' + self.money(sum.cpDisc || 0),
      sumLines: sum.lines.map(function (l) { return { name: l.name, sub: l.sub, priceTxt: self.money(l.price) }; }),
      goCheckout: function () { self.openCheckout(); },

      bdDisp: anyOverlay ? 'block' : 'none',
      closeAll: function () { if (s.termsOpen || s.privOpen) { self.setState({ termsOpen: false, privOpen: false }); self.setHash(''); return; } if (s.trackOpen) { self.setState({ trackOpen: false }); return; } if (s.policyOpen) { self.setState({ policyOpen: false }); self.setHash(''); return; } if (s.ck) { self.closeCheckout(); return; } if (s.sellerOpen) self.setHash(''); self.setState({ cartOpen: false, detailId: '', filtersOpen: false, sellerOpen: false, adminOpen: false }); },
      toastDisp: s.toast ? 'block' : 'none', toastText: s.toast,

      dpDisp: dpRaw ? 'block' : 'none',
      dpName: dp.name, dpCode: dp.code, dpVer: dp.ver, dpCat: dp.cat, dpShort: dp.short, dpDesc: dp.desc, dpProblem: dp.problem,
      dpPrice: self.money(dp.price), dpAmt: self.amt(dp.price), dpHasOld: !!dp.oldPrice, dpOldTxt: dp.oldPrice ? self.money(dp.oldPrice) : '', dpNote: dp.note || '', dpHasNote: !!dp.note,
      dpColor: dm.color, dpTint: dm.tint, dpGlow: dm.glow, dpIcon: dm.icon, dpBenefit: dp.benefit || '',
      dpThumbs: dpThumbs, dpMainSrc: dpMain.src, dpMainAlt: dpMain.alt, dpMainPos: dpMain.pos,
      dpEx: exTxt, dpExOk: !exTodo, dpExTodo: false,
      dpAddCls: dpIn ? 'btn-ghost' : 'btn-ghost',
      dpHasLogo: !!dp.logo, dpLogo: dp.logo || '',
      dpHasImgs: !!dp.img, dpNoImgs: !dp.img,
      dpImgs: dp.img ? dp.alts.map(function (a, i) { return { src: dp.img, alt: a, pos: pos[i] }; }) : [],
      dpInputs: toItems(dp.inputs), dpResults: toItems(dp.results),
      dpInstall: dpRaw ? self.installSteps(dp).map(function (t, i) { return { n: i + 1, text: t }; }) : [],
      dpRel: (dp.rel || []).map(function (rid) {
        const r = map[rid];
        const rm = self.meta(r.cat);
        return { name: r.name, cat: r.cat, code: r.code, priceTxt: self.money(r.price), color: rm.color, tint: rm.tint, icon: rm.icon, img: r.img, hasImg: !!r.img, open: function () { self.setState({ detailId: rid, dpImg: 0 }); } };
      }),
      dpAddLabel: dp.soon ? 'Próximamente' : (dpIn ? 'En tu carrito' : 'Agregar al carrito'), dpSoon: !!dp.soon, dpBuyTxt: dp.soon ? 'Disponible pronto' : 'Comprar ahora',
      dpAdd: function () { if (!dpRaw) return; if (dpIn) self.setState({ cartOpen: true, detailId: '' }); else self.addProduct(dpRaw.id); },
      dpBuy: function () { if (dpRaw) self.openCheckout(dpRaw.id); },
      closeDetail: function () { self.setState({ detailId: '' }); },

      ckDisp: s.ck ? 'block' : 'none',
      closeCk: function () { self.closeCheckout(); },
      ckSteps: ckSteps,
      s1Disp: s.ckStep === 1 ? 'flex' : 'none', s2Disp: s.ckStep === 2 ? 'flex' : 'none', s3Disp: s.ckStep === 3 ? 'flex' : 'none', s4Disp: s.ckStep === 4 ? 'flex' : 'none',
      ckErr: s.ckErr, ckErrDisp: s.ckErr ? 'block' : 'none', ckNote: s.ckNote, ckNoteDisp: s.ckNote ? 'block' : 'none',
      modeBtns: [modeBtn('crear', 'Crear cuenta'), modeBtn('entrar', 'Iniciar sesión')],
      acctBtnTxt: s.ckMode === 'crear' ? 'Crear cuenta y continuar' : 'Iniciar sesión y continuar',
      passAuto: s.ckMode === 'crear' ? 'new-password' : 'current-password',
      ckGoogle: function () { self.setState({ ckNote: 'El acceso con Google se conectará al publicar la tienda. Por ahora continúa con correo y contraseña.', ckErr: '' }); },
      ckNext1: function () { self.ckAccount(); },
      modelBtns: [modelBtn('g1', 'HP Prime G1'), modelBtn('g2', 'HP Prime G2'), modelBtn('virtual', 'HP Prime Virtual')],
      ckNext2: function () { self.ckDelivery(); },
      ckBack1: function () { self.setState({ ckStep: 1, ckErr: '' }); },
      ckBack2: function () { self.setState({ ckStep: 2, ckErr: '' }); },
      payBtns: methods.map(function (m) {
        const st = on(s.ckMethod === m.id);
        return { label: m.label, pressed: s.ckMethod === m.id, bg: st.bg, fg: st.fg, bd: st.bd, pick: function () { self.setState({ ckMethod: m.id, ckErr: '' }); } };
      }),
      payNoneDisp: kind ? 'none' : 'block', payWalletDisp: kind === 'wallet' ? 'flex' : 'none', payBankDisp: kind === 'bank' ? 'flex' : 'none',
      payName: method ? method.label : '',
      payQr: wallet.qr, payHolder: wallet.holder,
      copyBcpCta: function () { self.copy('21570385264021', 'Cuenta BCP'); },
      copyBcpCci: function () { self.copy('00221517038526402126', 'CCI BCP'); },
      copySbkCta: function () { self.copy('7931208610', 'Cuenta Scotiabank'); },
      copySbkCci: function () { self.copy('00931320793120861083', 'CCI Scotiabank'); },
      confirmTxt: 'Enviar comprobante',
      ckConfirm: function () { self.ckConfirm(); },
      orderNum: order.num, orderMail: order.mail, orderMethod: order.method,
      waOrderHref: 'https://wa.me/51944542116?text=' + encodeURIComponent(waText),
      sumTitle: s.ckStep === 4 ? 'Tu pedido' : 'Resumen del pedido',

      showForm: !s.sent, sent: !!s.sent, leadName: s.leadName || '', leadEmail: s.leadEmail || 'tu correo',
      leadErr: s.leadErr, leadErrDisp: s.leadErr ? 'block' : 'none',
      leadBtnTxt: s.leadBusy ? 'Enviando…' : 'Quiero recibir programas',
      leadPreview: !self.props.sheetsUrl, leadLive: !!self.props.sheetsUrl,
      submit: function (e) {
        if (e && e.preventDefault) e.preventDefault();
        const name = self.val('ix-nombre');
        const mail = self.val('ix-email');
        if (!name) { const el = document.getElementById('ix-nombre'); if (el) el.focus(); return; }
        if (!self.isMail(mail)) { const el2 = document.getElementById('ix-email'); if (el2) el2.focus(); return; }
        self.track('lead');
        const done2 = function () { self.setState({ sent: true, leadBusy: false, leadErr: '', leadName: name.split(' ')[0], leadEmail: mail }); };
        if (!self.props.sheetsUrl) { done2(); return; }
        const data = { tipo: 'lead', nombre: name, email: mail, estudio: self.val('ix-estudio'), materia: self.val('ix-materia'), mensaje: self.val('ix-mensaje') };
        self.setState({ leadBusy: true, leadErr: '' });
        try {
          self.postSheet(data)
            .then(done2)
            .catch(function () { self.setState({ leadBusy: false, leadErr: 'No pudimos enviar tu solicitud. Escríbenos por WhatsApp o al correo.' }); });
        } catch (err) {
          self.setState({ leadBusy: false, leadErr: 'No pudimos enviar tu solicitud. Escríbenos por WhatsApp o al correo.' });
        }
      },
      resetForm: function () { self.setState({ sent: false, leadName: '', leadEmail: '', leadErr: '' }); }
    });
  }

  componentDidMount() {
    this._tries = 0;
    this._applyTheme();
    this._loadCart();
    this._dbJson = '';
    this.setState({ db: this.dbLoad() });
    const self = this;
    this._onHash = function () { self.syncHash(); };
    window.addEventListener('hashchange', this._onHash);
    let h0 = '';
    try { h0 = (window.location.hash || '').slice(1); } catch (e) { h0 = ''; }
    if (h0) setTimeout(function () { self.syncHash(); }, 0);
    if (h0 !== 'admin') this.track('visita');
    let seen = false;
    try { seen = window.localStorage.getItem('ingnex-aviso-v1') === '1'; } catch (e) { seen = true; }
    if (!seen) this.setState({ noticeOpen: true });
    this._boot();
    this.loadCfg();
  }

  componentDidUpdate() {
    this._applyTheme();
    const s = this.st();
    const json = JSON.stringify(s.cart);
    if (this._cartLoaded && json !== this._cartJson) {
      this._cartJson = json;
      try { window.localStorage.setItem('ingnex-cart-v1', json); } catch (e) { /* sin almacenamiento local */ }
    }
    if (this.state && this.state.db) {
      const dj = JSON.stringify(this.state.db);
      if (this._dbJson && dj !== this._dbJson) this.dbSave(this.state.db);
      this._dbJson = dj;
    }
    if (s.detailId && s.detailId !== this._lastDetail) this.track('ficha', { p: s.detailId });
    this._lastDetail = s.detailId;
    const open = s.cartOpen || !!s.detailId || s.ck || s.filtersOpen || s.sellerOpen || s.adminOpen || s.policyOpen || s.trackOpen || s.termsOpen || s.privOpen;
    if (open !== this._locked) {
      this._locked = open;
      document.documentElement.style.overflow = open ? 'hidden' : '';
    }
  }

  componentWillUnmount() {
    this._dead = true;
    this.stopCalc();
    if (this._toastT) clearTimeout(this._toastT);
    if (this._raf) cancelAnimationFrame(this._raf);
    if (this._io) this._io.disconnect();
    if (this._onMove) window.removeEventListener('pointermove', this._onMove);
    if (this._onResize) window.removeEventListener('resize', this._onResize);
    if (this._onHash) window.removeEventListener('hashchange', this._onHash);
    document.documentElement.style.overflow = '';
  }

  _loadCart() {
    let cart = [];
    try {
      const raw = window.localStorage.getItem('ingnex-cart-v1');
      const arr = raw ? JSON.parse(raw) : [];
      const map = this.pmap();
      const packIds = this.packsData().map(function (k) { return k.id; });
      if (Array.isArray(arr)) cart = arr.filter(function (id) { return (!!map[id] && !map[id].soon) || packIds.indexOf(id) >= 0; });
    } catch (e) { cart = []; }
    this._cartLoaded = true;
    this._cartJson = JSON.stringify(cart);
    if (cart.length) this.setState({ cart: cart });
  }

  _applyTheme() {
    const st = document.documentElement.style;
    st.setProperty('--ac', this.props.accent || '#0096D6');
    st.setProperty('--ok', this.props.resultado || '#3DE0B8');
    st.setProperty('--sp', this.props.espacial || '#7C5CFF');
  }

  _rgb(hex, fallback) {
    const h = String(hex || '').replace('#', '');
    const v = h.length === 3 ? h.split('').map(function (c) { return c + c; }).join('') : h;
    const num = parseInt(v, 16);
    if (v.length !== 6 || !isFinite(num)) return fallback;
    return ((num >> 16) & 255) + ',' + ((num >> 8) & 255) + ',' + (num & 255);
  }

  _grab() {
    const stage = document.getElementById('ix-stage');
    const scene = document.getElementById('ix-scene');
    const rig = document.getElementById('ix-rig');
    if (!stage || !scene || !rig) return false;
    const cv = document.getElementById('ix-particles');
    this._el = { stage: stage, scene: scene, rig: rig, floor: document.getElementById('ix-floor'), cv: cv };
    this._ctx = cv && cv.getContext ? cv.getContext('2d') : null;
    this._solved = null;
    return true;
  }

  _boot() {
    const self = this;
    if (self._dead || self._booted) return;
    if (!self._grab()) {
      if (self._tries++ < 180) self._raf = requestAnimationFrame(function () { self._boot(); });
      return;
    }
    self._booted = true;
    const reduce = self.reducedMotion();
    self._ptr = { x: 0, y: 0, tx: 0, ty: 0 };
    self._top0 = self._el.scene.getBoundingClientRect().top;

    self._parts = [];
    for (let i = 0; i < 44; i++) {
      self._parts.push({ x: Math.random(), y: Math.random(), r: 0.7 + Math.random() * 1.5, sp: 0.012 + Math.random() * 0.03, w: 0.3 + Math.random() * 0.7, ph: Math.random() * 6.28, d: 0.3 + Math.random(), g: i % 5 === 0, s: i % 3 === 0 });
    }

    self._onMove = function (e) {
      const el = self._el;
      if (!el || !el.scene) return;
      const r = el.scene.getBoundingClientRect();
      const vw = window.innerWidth || 1200;
      const vh = window.innerHeight || 800;
      const cx = r.left + r.width / 2;
      const cy = r.top + r.height / 2;
      self._ptr.tx = Math.max(-1, Math.min(1, (e.clientX - cx) / (vw * 0.5)));
      self._ptr.ty = Math.max(-1, Math.min(1, (e.clientY - cy) / (vh * 0.6)));
    };
    window.addEventListener('pointermove', self._onMove, { passive: true });

    self._onResize = function () {
      const sc = window.scrollY || document.documentElement.scrollTop || 0;
      if (sc < 2 && self._el && self._el.scene) self._top0 = self._el.scene.getBoundingClientRect().top;
    };
    window.addEventListener('resize', self._onResize, { passive: true });

    // Revelado al hacer scroll: solo espera lo que hoy queda bajo el pliegue.
    if (!reduce && 'IntersectionObserver' in window) {
      const vh0 = window.innerHeight || 800;
      self._io = new IntersectionObserver(function (entries) {
        entries.forEach(function (en) {
          if (en.isIntersecting) { en.target.classList.remove('rv-wait'); self._io.unobserve(en.target); }
        });
      }, { rootMargin: '0px 0px -8% 0px' });
      Array.prototype.forEach.call(document.querySelectorAll('.rv'), function (el) {
        if (el.getBoundingClientRect().top > vh0 * 0.94) { el.classList.add('rv-wait'); self._io.observe(el); }
      });
    }

    const tick = function (now) {
      if (self._dead) return;
      self._raf = requestAnimationFrame(tick);
      if (!self._el.scene.isConnected && !self._grab()) return;
      const el = self._el;
      const r = el.scene.getBoundingClientRect();
      const vh = window.innerHeight || 800;
      if (r.bottom < -80 || r.top > vh + 80) return;

      const t = now / 1000;
      const p = self._ptr;
      p.x += (p.tx - p.x) * 0.07;
      p.y += (p.ty - p.y) * 0.07;
      const live = reduce ? 0 : 1;
      const ry = -18 + p.x * 24 + Math.sin(t * 0.55) * 6 * live;
      const rx = 8 - p.y * 12 + Math.cos(t * 0.42) * 2.5 * live;
      el.rig.style.transform = 'rotateX(' + rx.toFixed(2) + 'deg) rotateY(' + ry.toFixed(2) + 'deg)';
      if (el.floor) el.floor.style.backgroundPosition = (-p.x * 16).toFixed(1) + 'px ' + (live ? (t * 7) % 44 : 0).toFixed(1) + 'px';

      const scrolled = Math.max(window.scrollY || 0, document.documentElement.scrollTop || 0, self._top0 - r.top);
      const auto = self.props.animacionHero !== false && !reduce;
      const cyc = t % 11;
      const solved = scrolled > 70 || (auto && cyc > 4.2 && cyc < 9.6);
      if (solved !== self._solved) {
        self._solved = solved;
        el.stage.classList.toggle('solved', solved);
      }
      self._draw(t, p, live);
    };
    self._raf = requestAnimationFrame(tick);
  }

  _draw(t, p, live) {
    const cv = this._el.cv;
    const ctx = this._ctx;
    if (!cv || !ctx) return;
    const w = cv.clientWidth;
    const h = cv.clientHeight;
    if (!w || !h) return;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const pw = Math.round(w * dpr);
    const ph = Math.round(h * dpr);
    if (cv.width !== pw || cv.height !== ph) { cv.width = pw; cv.height = ph; }
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.clearRect(0, 0, w, h);
    const ac = this._rgb(this.props.accent, '0,150,214');
    const ok = this._rgb(this.props.resultado, '61,224,184');
    const sp = this._rgb(this.props.espacial, '124,92,255');
    const tt = t * live;

    // Graficas de funciones al fondo
    ctx.lineWidth = 1;
    ctx.strokeStyle = 'rgba(' + ac + ',0.24)';
    ctx.beginPath();
    for (let x = 0; x <= w; x += 6) {
      const y = h * 0.28 + Math.sin(x * 0.016 + tt * 0.5) * 36 * Math.exp(-x / (w * 1.3));
      if (x === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
    }
    ctx.stroke();
    ctx.strokeStyle = 'rgba(' + ok + ',0.16)';
    ctx.beginPath();
    for (let x = 0; x <= w; x += 6) {
      const u = x / w - 0.5 + p.x * 0.03;
      const y = h * 0.16 + u * u * h * 2.1;
      if (x === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
    }
    ctx.stroke();

    // Particulas
    const parts = this._parts || [];
    for (let i = 0; i < parts.length; i++) {
      const q = parts[i];
      const yy = (((q.y - tt * q.sp) % 1) + 1) % 1;
      const x = q.x * w + Math.sin(tt * q.w + q.ph) * 8 + p.x * q.d * 18;
      const a = (0.25 + 0.55 * (0.5 + 0.5 * Math.sin(tt * 1.3 + q.ph))) * Math.sin(yy * Math.PI);
      ctx.fillStyle = 'rgba(' + (q.g ? ok : (q.s ? sp : ac)) + ',' + a.toFixed(3) + ')';
      ctx.beginPath();
      ctx.arc(x, yy * h, q.r, 0, 6.2832);
      ctx.fill();
    }
  }
}

function view(v) {
  return __h(__F, null, __h("div", {"id": "inicio", "style": "font-family: 'IBM Plex Sans', system-ui, -apple-system, 'Segoe UI', sans-serif; font-size: 17px; line-height: 1.55; color: #F5F7FA; background: #0B0F14; color-scheme: dark; overflow-x: clip"}, __h("header", {"class": "hdr", "style": "border-bottom: 1px solid #18222E"}, (v.shopClosedOn ? [__h("div", {"role": "status", "style": "background: #F2C879; color: #0B0F14; text-align: center; font-size: 14px; font-weight: 600; padding: 7px 16px; line-height: 1.4"}, "Estamos preparando la tienda. Muy pronto podrás comprar; mientras tanto puedes ver el catálogo.")] : null), " ", __h("div", {"style": "max-width: 1200px; margin: 0 auto; padding: 12px clamp(20px, 4vw, 40px); box-sizing: border-box; display: flex; align-items: center; justify-content: space-between; gap: 12px 28px"}, __h("a", {"class": "brand", "href": "#inicio", "aria-label": "INGNEX, inicio", "style": "display: flex; align-items: center; gap: 12px; padding: 4px 0"}, __h("img", {"src": "img/ingnex-mark.png", "alt": "", "style": "height: 40px; width: auto; display: block"}), __h("img", {"src": "img/ingnex-word.png", "alt": "INGNEX", "style": "height: 14px; width: auto; display: block"})), " ", __h("nav", {"class": "nav-links", "aria-label": "Secciones", "style": "display: flex; gap: 8px 26px; flex-wrap: wrap"}, __h("a", {"class": "nav", "href": "#demo"}, "Demostración"), " ", __h("a", {"class": "nav", "href": "#programas"}, "Catálogo"), " ", __h("a", {"class": "nav", "href": "#packs"}, "Packs"), " ", __h("a", {"class": "nav", "href": "#vendedores"}, "Vendedores"), " ", __h("a", {"class": "nav", "href": "#proceso"}, "Cómo comprar")), " ", __h("div", {"style": "display: flex; align-items: center; gap: 10px; flex: none"}, __h("button", {"type": "button", "class": "cartbtn trackbtn", "onclick": v.openSeller, "aria-label": "Mi insignia de vendedor"}, __h("svg", {"width": "20", "height": "20", "viewBox": "0 0 24 24", "fill": "none", "stroke": "currentColor", "stroke-width": "1.7", "stroke-linecap": "round", "stroke-linejoin": "round", "aria-hidden": "true"}, __h("circle", {"cx": "12", "cy": "9", "r": "6"}), __h("path", {"d": "M8.5 14.2L7 22l5-3 5 3-1.5-7.8"})), __h("span", {"class": "trtxt"}, "Mi insignia")), " ", __h("button", {"type": "button", "class": "cartbtn trackbtn", "onclick": v.openTrack, "aria-label": "Rastrear mi pedido"}, __h("svg", {"width": "20", "height": "20", "viewBox": "0 0 24 24", "fill": "none", "stroke": "currentColor", "stroke-width": "1.7", "stroke-linecap": "round", "stroke-linejoin": "round", "aria-hidden": "true"}, __h("path", {"d": "M3 7l9-4 9 4v10l-9 4-9-4z"}), __h("path", {"d": "M3 7l9 4 9-4"}), __h("path", {"d": "M12 11v10"})), __h("span", {"class": "trtxt"}, "Rastrear pedido")), " ", __h("button", {"type": "button", "class": "cartbtn", "onclick": v.openCart, "aria-label": v.cartAria}, __h("svg", {"width": "20", "height": "20", "viewBox": "0 0 24 24", "fill": "none", "stroke": "currentColor", "stroke-width": "1.7", "stroke-linecap": "round", "stroke-linejoin": "round", "aria-hidden": "true"}, __h("path", {"d": "M3 4h2.5l2.2 11h10.6l2-8H7"}), __h("circle", {"cx": "9.5", "cy": "19", "r": "1.4"}), __h("circle", {"cx": "17", "cy": "19", "r": "1.4"})), __h("span", {"class": "cart-word"}, "Carrito"), __h("span", {"style": "min-width: 24px; height: 24px; padding: 0 6px; box-sizing: border-box; border-radius: 12px; display: inline-flex; align-items: center; justify-content: center; background: var(--ac); color: #06121C; font-family: 'IBM Plex Mono', ui-monospace, Menlo, monospace; font-size: 13px; font-weight: 500"}, v.cartCount))))), " ", __h("section", {"class": "gx", "style": "position: relative; overflow: hidden"}, __h("div", {"class": "galaxy", "aria-hidden": "true"}), " ", __h("div", {"style": "position: relative; max-width: 1200px; margin: 0 auto; padding: 56px clamp(20px, 4vw, 40px) 72px; box-sizing: border-box; display: grid; grid-template-columns: repeat(auto-fit, minmax(min(440px, 100%), 1fr)); gap: 32px; align-items: center"}, __h("div", {"style": "position: relative; z-index: 2; display: flex; flex-direction: column; gap: 24px"}, __h("p", {"style": "margin: 0; font-family: 'IBM Plex Mono', ui-monospace, Menlo, monospace; font-size: 13px; letter-spacing: 0.08em; text-transform: uppercase; color: var(--ac)"}, "// Programas para HP Prime"), " ", __h("h1", {"style": "margin: 0; font-family: 'IBM Plex Sans Condensed', 'Arial Narrow', sans-serif; font-weight: 700; font-size: clamp(38px, 4.6vw, 64px); line-height: 1.02; letter-spacing: -0.015em; text-wrap: balance"}, "Convierte tu HP Prime en una ", __h("span", {"class": "hl"}, "herramienta profesional"), " de cálculo"), " ", __h("p", {"style": "margin: 0; font-size: 19px; line-height: 1.55; color: #9FB0C3; max-width: 52ch"}, "Programas listos para usar, precisos y fáciles de instalar. Resuelve cálculos complejos, ahorra tiempo en exámenes y trabajos, y lleva tus herramientas en la calculadora."), " ", __h("div", {"style": "display: flex; flex-wrap: wrap; gap: 14px"}, __h("a", {"class": "btn btn-primary", "href": "#programas"}, "Ver programas ", __h("span", {"class": "arr", "aria-hidden": "true"}, "→")), " ", __h("a", {"class": "btn btn-ghost", "href": "#demo"}, "Ver demostración")), " ", __h("div", {"style": "display: flex; flex-wrap: wrap; gap: 10px 10px; padding-top: 20px; border-top: 1px solid #18222E; font-size: 14px; color: #9FB0C3"}, __h("span", {"style": "flex-basis: 100%; font-family: 'IBM Plex Mono', ui-monospace, Menlo, monospace; font-size: 12px; letter-spacing: 0.08em; text-transform: uppercase; color: #7C8DA1"}, "19 programas de"), " ", __h("span", {"class": "herochip", "style": "--c: #6E9BFF"}, __h("img", {"src": "img/ic-est.svg", "alt": "", "width": "16", "height": "16"}), "Estructuras"), " ", __h("span", {"class": "herochip", "style": "--c: #2CC9C0"}, __h("img", {"src": "img/ic-hid.svg", "alt": "", "width": "16", "height": "16"}), "Hidráulica y saneamiento"), " ", __h("span", {"class": "herochip", "style": "--c: #F0B357"}, __h("img", {"src": "img/ic-via.svg", "alt": "", "width": "16", "height": "16"}), "Vías y transporte"), " ", __h("span", {"class": "herochip", "style": "--c: #F08AA8"}, __h("img", {"src": "img/ic-uti.svg", "alt": "", "width": "16", "height": "16"}), "Utilidades"))), " ", __h("div", {"id": "ix-stage", "style": "display: flex; flex-direction: column; gap: 16px"}, __h("div", {"id": "ix-scene", "class": "scene", "role": "img", "aria-label": "Calculadora gráfica en 3D. En su pantalla pasan capturas de las apps de INGNEX mientras fórmulas y líneas de código flotan a su alrededor.", "style": "position: relative; height: 600px; perspective: 1300px; touch-action: pan-y"}, __h("div", {"id": "ix-floor", "aria-hidden": "true", "style": "position: absolute; left: -10%; right: -10%; bottom: -40px; height: 380px; transform: rotateX(74deg); transform-origin: 50% 100%; background-image: linear-gradient(rgba(0, 150, 214, .3) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 150, 214, .3) 1px, transparent 1px); background-size: 44px 44px; -webkit-mask-image: radial-gradient(ellipse 60% 70% at 50% 60%, #000 10%, transparent 75%); mask-image: radial-gradient(ellipse 60% 70% at 50% 60%, #000 10%, transparent 75%)"}), " ", __h("canvas", {"id": "ix-particles", "aria-hidden": "true", "style": "position: absolute; inset: 0; width: 100%; height: 100%"}), " ", __h("div", {"class": "rigwrap", "aria-hidden": "true", "style": "position: absolute; left: 50%; top: 48%; width: 0; height: 0; transform-style: preserve-3d"}, __h("div", {"id": "ix-rig", "style": "position: absolute; left: 0; top: 0; width: 0; height: 0; transform-style: preserve-3d; transform: rotateX(8deg) rotateY(-18deg)"}, __h("div", {"style": "position: absolute; left: -130px; top: 232px; width: 260px; height: 46px; border-radius: 50%; background: radial-gradient(ellipse at center, rgba(0, 150, 214, .45), rgba(0, 150, 214, 0) 70%); filter: blur(10px); transform: translateZ(-60px)"}), " ", __h("div", {"style": "position: absolute; left: -125px; top: -235px; width: 250px; height: 470px; transform-style: preserve-3d"}, __h("div", {"class": "slab", "style": "transform: translateZ(-21px)"}), " ", __h("div", {"class": "slab", "style": "transform: translateZ(-18px)"}), " ", __h("div", {"class": "slab", "style": "transform: translateZ(-15px)"}), " ", __h("div", {"class": "slab", "style": "transform: translateZ(-12px)"}), " ", __h("div", {"class": "slab", "style": "transform: translateZ(-9px)"}), " ", __h("div", {"class": "slab", "style": "transform: translateZ(-6px)"}), " ", __h("div", {"class": "slab", "style": "transform: translateZ(-3px)"}), " ", __h("div", {"style": "position: absolute; inset: 0; box-sizing: border-box; padding: 16px; border-radius: 28px; background: linear-gradient(160deg, #1C2835 0%, #0F161E 55%, #0A0F15 100%); border: 1px solid #2D3D50; box-shadow: inset 0 1px 0 rgba(255, 255, 255, .1), inset 0 -18px 30px rgba(0, 0, 0, .35); display: flex; flex-direction: column; justify-content: space-between; transform-style: preserve-3d"}, __h("div", {"style": "position: relative; height: 186px; border-radius: 8px; background: #04070B; border: 1px solid #24313F; overflow: hidden; box-shadow: 0 0 24px rgba(0, 150, 214, .18)"}, __h("div", {"style": "height: 22px; padding: 0 8px; background: var(--ac); color: #06121C; font-family: 'IBM Plex Mono', ui-monospace, Menlo, monospace; font-size: 10px; font-weight: 500; display: flex; align-items: center; justify-content: space-between"}, __h("span", null, "APPS INGNEX"), __h("span", null, "HP Prime")), " ", __h("div", {"class": "appcar"}, __h("div", {"class": "appcar-track"}, __h("div", {"class": "appslide"}, __h("img", {"src": "img/nodo.png", "alt": ""}), __h("span", null, "NODO A")), __h("div", {"class": "appslide"}, __h("img", {"src": "img/alcant.png", "alt": ""}), __h("span", null, "ALCANTARILLADO")), __h("div", {"class": "appslide"}, __h("img", {"src": "img/caminos.png", "alt": ""}), __h("span", null, "CAMINOS")), __h("div", {"class": "appslide"}, __h("img", {"src": "img/redagua.png", "alt": ""}), __h("span", null, "RED AGUA")), __h("div", {"class": "appslide"}, __h("img", {"src": "img/vigaca.png", "alt": ""}), __h("span", null, "VIGA CA")), __h("div", {"class": "appslide"}, __h("img", {"src": "img/hardy.png", "alt": ""}), __h("span", null, "HARDY CROSS")), __h("div", {"class": "appslide"}, __h("img", {"src": "img/abastos.png", "alt": ""}), __h("span", null, "ABASTOS")), __h("div", {"class": "appslide"}, __h("img", {"src": "img/hcnet.png", "alt": ""}), __h("span", null, "HCNET")), __h("div", {"class": "appslide"}, __h("img", {"src": "img/nodo.png", "alt": ""}), __h("span", null, "NODO A")))), " ", __h("span", {"class": "scr-glare", "aria-hidden": "true"})), " ", __h("div", {"style": "display: grid; grid-template-columns: 1fr 58px 1fr; gap: 10px; align-items: center"}, __h("div", {"style": "display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 6px"}, __h("div", {"class": "key k-dim"}, "F1"), __h("div", {"class": "key k-dim"}, "F2"), __h("div", {"class": "key k-dim"}, "F3"), __h("div", {"class": "key k-dim"}, "F4")), " ", __h("div", {"class": "dpad", "style": "width: 58px; height: 58px; border-radius: 50%; box-sizing: border-box; border: 1px solid #2A3847; background: radial-gradient(circle at 35% 30%, #243140, #111922 70%); display: flex; align-items: center; justify-content: center"}, __h("div", {"style": "width: 20px; height: 20px; border-radius: 50%; background: #0B1118; border: 1px solid #2A3847"})), " ", __h("div", {"style": "display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 6px"}, __h("div", {"class": "key k-dim"}, "esc"), __h("div", {"class": "key k-dim"}, "menu"), __h("div", {"class": "key k-dim"}, "shift"), __h("div", {"class": "key k-dim"}, "alfa"))), " ", __h("div", {"style": "display: grid; grid-template-columns: repeat(5, minmax(0, 1fr)); gap: 6px"}, (v.keys || []).map(function (k, $index) { return [__h("div", {"class": ("key " + String(k.cls == null ? "" : k.cls))}, k.t)]; })))), " ", __h("span", {"class": "chip", "style": "left: -285px; top: -250px; transform: translateZ(70px)"}, "∫₀² (3x² + 2x) dx"), " ", __h("span", {"class": "chip d2", "style": "left: 150px; top: -272px; transform: translateZ(-50px); animation-delay: -2s"}, "det [2 1 3; 0 4 1; 5 2 6]"), " ", __h("span", {"class": "chip d3", "style": "left: -300px; top: -110px; transform: translateZ(-80px); animation-delay: -4s"}, "x² − 5x + 6 = 0"), " ", __h("span", {"class": "chip", "style": "left: 172px; top: -140px; transform: translateZ(100px); animation-delay: -1s"}, "x̄ = Σxᵢ / n"), " ", __h("span", {"class": "chip d2", "style": "left: -292px; top: 40px; transform: translateZ(30px); animation-delay: -3s"}, "Q^1.852 / D^4.87"), " ", __h("span", {"class": "chip code d3", "style": "left: 165px; top: 10px; transform: translateZ(-60px); animation-delay: -5s"}, "EXPORT HAZEN()"), " ", __h("span", {"class": "chip code", "style": "left: -282px; top: 190px; transform: translateZ(90px); animation-delay: -6s"}, "INPUT({Q,C,D,L})"), " ", __h("span", {"class": "chip d2", "style": "left: 160px; top: 172px; transform: translateZ(20px); animation-delay: -2.5s"}, "Δ = b² − 4ac")))), " ", __h("div", {"style": "display: flex; align-items: center; justify-content: center; flex-wrap: wrap; gap: 6px 12px; font-family: 'IBM Plex Mono', ui-monospace, Menlo, monospace; font-size: 13px; color: #7C8DA1"}, __h("span", {"class": "st st-a"}, "Problema complejo"), " ", __h("span", {"aria-hidden": "true"}, "→"), " ", __h("span", {"class": "st st-b"}, "Programa HP Prime"), " ", __h("span", {"aria-hidden": "true"}, "→"), " ", __h("span", {"class": "st st-c"}, "Resultado claro")), " ", __h("p", {"style": "margin: 0; text-align: center; font-size: 13px; color: #7C8DA1"}, "Mueve el cursor o arrastra sobre la calculadora para girarla.")))), " ", __h("section", {"id": "problema", "style": "background: radial-gradient(900px 420px at 88% 0%, rgba(0, 150, 214, .10), rgba(0, 150, 214, 0) 65%), radial-gradient(700px 380px at 6% 100%, rgba(61, 224, 184, .06), rgba(61, 224, 184, 0) 65%), #0E141B; border-top: 1px solid #18222E; border-bottom: 1px solid #18222E"}, __h("div", {"style": "max-width: 1200px; margin: 0 auto; padding: clamp(56px, 6.5vw, 88px) clamp(20px, 4vw, 40px); box-sizing: border-box; display: flex; flex-direction: column; gap: 44px"}, __h("div", {"class": "rv", "style": "display: flex; flex-direction: column; gap: 14px"}, __h("p", {"style": "margin: 0; font-family: 'IBM Plex Mono', ui-monospace, Menlo, monospace; font-size: 13px; letter-spacing: 0.08em; text-transform: uppercase; color: var(--ac)"}, "// El problema"), " ", __h("h2", {"style": "margin: 0; font-family: 'IBM Plex Sans Condensed', 'Arial Narrow', sans-serif; font-weight: 700; font-size: clamp(30px, 3.6vw, 48px); line-height: 1.06; letter-spacing: -0.01em; text-wrap: balance; max-width: 18em"}, "Los cálculos largos te quitan ", __h("span", {"class": "hl"}, "tiempo y puntos"))), " ", __h("ul", {"class": "rv", "style": "list-style: none; margin: 0; padding: 0; display: grid; grid-template-columns: repeat(auto-fit, minmax(min(230px, 100%), 1fr)); gap: 16px 32px; color: #9FB0C3; font-size: 16px"}, __h("li", {"style": "padding-top: 14px; border-top: 1px solid #2A3A4D"}, __h("strong", {"style": "display: block; color: #F5F7FA; font-weight: 600"}, "Cálculos largos"), "Procedimientos de varias páginas que repites en cada ejercicio."), " ", __h("li", {"style": "padding-top: 14px; border-top: 1px solid #2A3A4D"}, __h("strong", {"style": "display: block; color: #F5F7FA; font-weight: 600"}, "Fórmulas difíciles de recordar"), "Exponentes, constantes y unidades que se confunden bajo presión."), " ", __h("li", {"style": "padding-top: 14px; border-top: 1px solid #2A3A4D"}, __h("strong", {"style": "display: block; color: #F5F7FA; font-weight: 600"}, "Errores manuales"), "Un dígito mal copiado en un paso y todo el resultado cambia."), " ", __h("li", {"style": "padding-top: 14px; border-top: 1px solid #2A3A4D"}, __h("strong", {"style": "display: block; color: #F5F7FA; font-weight: 600"}, "Tiempo perdido"), "Minutos que necesitas en exámenes y trabajos.")), " ", __h("div", {"class": "rv", "style": "display: grid; grid-template-columns: repeat(auto-fit, minmax(min(300px, 100%), 1fr)); gap: 20px; align-items: stretch"}, __h("div", {"class": "seq", "style": "background: #0B0F14; border: 1px solid #1E2A38; border-radius: 10px; padding: 24px; display: flex; flex-direction: column; gap: 18px"}, __h("p", {"style": "margin: 0; font-family: 'IBM Plex Mono', ui-monospace, Menlo, monospace; font-size: 12px; letter-spacing: 0.08em; color: #7C8DA1"}, "01 · A MANO"), " ", __h("div", {"style": "font-family: 'IBM Plex Mono', ui-monospace, Menlo, monospace; font-size: 15px; display: flex; align-items: center; gap: 10px; flex-wrap: wrap"}, __h("span", null, "h", __h("sub", null, "f"), " ="), " ", __h("span", {"style": "display: inline-flex; flex-direction: column; align-items: center; gap: 4px"}, __h("span", null, "10.67 · L · Q", __h("sup", null, "1.852")), " ", __h("span", {"style": "align-self: stretch; height: 1px; background: #9FB0C3"}), " ", __h("span", null, "C", __h("sup", null, "1.852"), " · D", __h("sup", null, "4.87")))), " ", __h("div", {"style": "font-family: 'IBM Plex Mono', ui-monospace, Menlo, monospace; font-size: 13px; color: #9FB0C3; display: flex; flex-direction: column; gap: 6px"}, __h("span", null, "= 10.67 · 250 · 0.012", __h("sup", null, "1.852"), " / (140", __h("sup", null, "1.852"), " · 0.10", __h("sup", null, "4.87"), ")"), " ", __h("span", null, "= 0.7392 / 0.1272"), " ", __h("span", {"style": "color: #F2A65A"}, __h("span", {"style": "text-decoration: line-through"}, "= 5.18 m"), " dígitos invertidos")), " ", __h("p", {"style": "margin: auto 0 0; font-size: 15px; color: #9FB0C3"}, "Tres potencias decimales y una división. Cada paso es una oportunidad de error.")), " ", __h("div", {"class": "seq s2", "style": "background: #0B0F14; border: 1px solid #1E2A38; border-radius: 10px; padding: 24px; display: flex; flex-direction: column; gap: 18px"}, __h("p", {"style": "margin: 0; font-family: 'IBM Plex Mono', ui-monospace, Menlo, monospace; font-size: 12px; letter-spacing: 0.08em; color: #7C8DA1"}, "02 · PROGRAMA HP PRIME"), " ", __h("pre", {"style": "margin: 0; font-family: 'IBM Plex Mono', ui-monospace, Menlo, monospace; font-size: 13px; line-height: 1.7; color: #C9D5E2; overflow-x: auto"}, __h("span", {"style": "color: var(--ac)"}, "EXPORT"), " HAZEN()\n", __h("span", {"style": "color: var(--ac)"}, "BEGIN"), "\n  ", __h("span", {"style": "color: var(--ac)"}, "LOCAL"), " Q,C,D,L;\n  INPUT({Q,C,D,L},\n    \"Pérdida de carga\");\n  ", __h("span", {"style": "color: var(--ac)"}, "RETURN"), " 10.67*L*Q^1.852\n    /(C^1.852*D^4.87);\n", __h("span", {"style": "color: var(--ac)"}, "END"), ";"), " ", __h("p", {"style": "margin: auto 0 0; font-size: 15px; color: #9FB0C3"}, "La fórmula queda escrita una sola vez. Tú solo ingresas los datos.")), " ", __h("div", {"class": "seq s3", "style": "background: #0B0F14; border: 1px solid #1E2A38; border-radius: 10px; padding: 24px; display: flex; flex-direction: column; gap: 14px"}, __h("p", {"style": "margin: 0; font-family: 'IBM Plex Mono', ui-monospace, Menlo, monospace; font-size: 12px; letter-spacing: 0.08em; color: #7C8DA1"}, "03 · RESULTADO"), " ", __h("p", {"style": "margin: 0; font-family: 'IBM Plex Mono', ui-monospace, Menlo, monospace; font-size: 30px; font-weight: 500; line-height: 1.1; color: var(--ok)"}, "h", __h("sub", {"style": "font-size: 16px"}, "f"), " = 5.81 m"), " ", __h("svg", {"viewBox": "0 0 260 122", "role": "img", "aria-label": "Gráfica de pérdida de carga contra caudal. Para 12 litros por segundo la pérdida es 5.81 metros.", "style": "width: 100%; height: auto; max-width: 340px"}, __h("path", {"d": "M30 10V100H250", "stroke": "#2E3F53", "stroke-width": "1", "fill": "none"}), " ", __h("path", {"d": "M30 55H250", "stroke": "#18222E", "stroke-width": "1", "fill": "none"}), " ", __h("path", {"d": "M30.0 100.0 L41.0 99.7 L52.0 98.8 L63.0 97.5 L74.0 95.7 L85.0 93.5 L96.0 90.9 L107.0 88.0 L118.0 84.6 L129.0 80.8 L140.0 76.7 L151.0 72.2 L162.0 67.3 L173.0 62.1 L184.0 56.5 L195.0 50.6 L206.0 44.3 L217.0 37.7 L228.0 30.8 L239.0 23.5 L250.0 15.8", "stroke": "#3DE0B8", "style": "stroke: var(--ok)", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", "fill": "none"}), " ", __h("path", {"d": "M162 100V67.3H30", "stroke": "#7C8DA1", "stroke-width": "1", "stroke-dasharray": "3 3", "fill": "none"}), " ", __h("circle", {"cx": "162", "cy": "67.3", "r": "4", "fill": "#3DE0B8", "style": "fill: var(--ok)"}), " ", __h("text", {"x": "26", "y": "104", "text-anchor": "end", "font-family": "IBM Plex Mono, monospace", "font-size": "9", "fill": "#9FB0C3"}, "0"), " ", __h("text", {"x": "26", "y": "58", "text-anchor": "end", "font-family": "IBM Plex Mono, monospace", "font-size": "9", "fill": "#9FB0C3"}, "8"), " ", __h("text", {"x": "26", "y": "14", "text-anchor": "end", "font-family": "IBM Plex Mono, monospace", "font-size": "9", "fill": "#9FB0C3"}, "16"), " ", __h("text", {"x": "140", "y": "114", "text-anchor": "middle", "font-family": "IBM Plex Mono, monospace", "font-size": "9", "fill": "#9FB0C3"}, "10"), " ", __h("text", {"x": "250", "y": "114", "text-anchor": "end", "font-family": "IBM Plex Mono, monospace", "font-size": "9", "fill": "#9FB0C3"}, "20 L/s"), " ", __h("text", {"x": "34", "y": "8", "font-family": "IBM Plex Mono, monospace", "font-size": "9", "fill": "#9FB0C3"}, "hf (m)")), " ", __h("p", {"style": "margin: auto 0 0; font-size: 15px; color: #9FB0C3"}, "Resultado y gráfica al instante, listos para comprobar tu diseño."))))), " ", __h("section", {"id": "solucion"}, __h("div", {"style": "max-width: 1200px; margin: 0 auto; padding: clamp(56px, 6.5vw, 88px) clamp(20px, 4vw, 40px); box-sizing: border-box; display: flex; flex-direction: column; gap: 44px"}, __h("div", {"class": "rv", "style": "display: flex; flex-direction: column; gap: 14px"}, __h("p", {"style": "margin: 0; font-family: 'IBM Plex Mono', ui-monospace, Menlo, monospace; font-size: 13px; letter-spacing: 0.08em; text-transform: uppercase; color: var(--ac)"}, "// La solución"), " ", __h("h2", {"style": "margin: 0; font-family: 'IBM Plex Sans Condensed', 'Arial Narrow', sans-serif; font-weight: 700; font-size: clamp(30px, 3.6vw, 48px); line-height: 1.06; letter-spacing: -0.01em; text-wrap: balance; max-width: 18em"}, __h("span", {"class": "hl"}, "Programas listos"), " para descargar, organizados por tema"), " ", __h("p", {"style": "margin: 0; font-size: 18px; color: #9FB0C3; max-width: 62ch"}, "Cada programa incluye instrucciones de instalación y ejemplos de uso. Eliges el tema, lo instalas en tu HP Prime y empiezas a calcular.")), " ", __h("div", {"class": "rv", "style": "display: grid; grid-template-columns: repeat(auto-fit, minmax(min(220px, 100%), 1fr)); gap: 16px"}, __h("a", {"class": "card tilecat", "href": "#programas", "onclick": v.pickEst, "style": "--c: #6E9BFF; --t: rgba(110, 155, 255, .14); --g: rgba(110, 155, 255, .28); border: 1px solid #1E2A38; border-radius: 12px; padding: 22px; display: flex; align-items: center; gap: 16px; color: #F5F7FA; text-decoration: none"}, __h("span", {"class": "tileic", "aria-hidden": "true"}, __h("img", {"src": "img/ic-est.svg", "alt": "", "width": "24", "height": "24"})), " ", __h("span", {"style": "display: flex; flex-direction: column; gap: 2px"}, __h("strong", {"style": "font-size: 18px; font-weight: 600; line-height: 1.25"}, "Estructuras"), __h("span", {"style": "font-family: 'IBM Plex Mono', ui-monospace, Menlo, monospace; font-size: 13px; color: #6E9BFF"}, "11 programas"))), " ", __h("a", {"class": "card tilecat", "href": "#programas", "onclick": v.pickHid, "style": "--c: #2CC9C0; --t: rgba(44, 201, 192, .14); --g: rgba(44, 201, 192, .28); border: 1px solid #1E2A38; border-radius: 12px; padding: 22px; display: flex; align-items: center; gap: 16px; color: #F5F7FA; text-decoration: none"}, __h("span", {"class": "tileic", "aria-hidden": "true"}, __h("img", {"src": "img/ic-hid.svg", "alt": "", "width": "24", "height": "24"})), " ", __h("span", {"style": "display: flex; flex-direction: column; gap: 2px"}, __h("strong", {"style": "font-size: 18px; font-weight: 600; line-height: 1.25"}, "Hidráulica y saneamiento"), __h("span", {"style": "font-family: 'IBM Plex Mono', ui-monospace, Menlo, monospace; font-size: 13px; color: #2CC9C0"}, "4 programas"))), " ", __h("a", {"class": "card tilecat", "href": "#programas", "onclick": v.pickVia, "style": "--c: #F0B357; --t: rgba(240, 179, 87, .14); --g: rgba(240, 179, 87, .28); border: 1px solid #1E2A38; border-radius: 12px; padding: 22px; display: flex; align-items: center; gap: 16px; color: #F5F7FA; text-decoration: none"}, __h("span", {"class": "tileic", "aria-hidden": "true"}, __h("img", {"src": "img/ic-via.svg", "alt": "", "width": "24", "height": "24"})), " ", __h("span", {"style": "display: flex; flex-direction: column; gap: 2px"}, __h("strong", {"style": "font-size: 18px; font-weight: 600; line-height: 1.25"}, "Vías y transporte"), __h("span", {"style": "font-family: 'IBM Plex Mono', ui-monospace, Menlo, monospace; font-size: 13px; color: #F0B357"}, "2 programas"))), " ", __h("a", {"class": "card tilecat", "href": "#programas", "onclick": v.pickUti, "style": "--c: #B39DFA; --t: rgba(179, 157, 250, .14); --g: rgba(179, 157, 250, .28); border: 1px solid #1E2A38; border-radius: 12px; padding: 22px; display: flex; align-items: center; gap: 16px; color: #F5F7FA; text-decoration: none"}, __h("span", {"class": "tileic", "aria-hidden": "true"}, __h("img", {"src": "img/ic-cal.svg", "alt": "", "width": "24", "height": "24"})), " ", __h("span", {"style": "display: flex; flex-direction: column; gap: 2px"}, __h("strong", {"style": "font-size: 18px; font-weight: 600; line-height: 1.25"}, "Cálculo y utilidades"), __h("span", {"style": "font-family: 'IBM Plex Mono', ui-monospace, Menlo, monospace; font-size: 13px; color: #B39DFA"}, "Hoja y Fotos")))), " ", __h("div", {"class": "rv", "style": "display: grid; grid-template-columns: repeat(auto-fit, minmax(min(280px, 100%), 1fr)); gap: 24px"}, __h("figure", {"style": "margin: 0; display: flex; flex-direction: column; gap: 14px"}, __h("img", {"src": "img/cr-nudo.png", "alt": "Formulario de un nudo en Cross Redes: cota, demanda, entrada y presión", "style": "width: 100%; height: auto; aspect-ratio: 4 / 3; display: block; border-radius: 10px; border: 1px solid #24313F; box-shadow: 0 18px 40px rgba(0, 0, 0, .35)"}), " ", __h("figcaption", {"style": "font-size: 15px; color: #9FB0C3"}, __h("strong", {"style": "color: #F5F7FA; font-weight: 600"}, "Entradas claras."), " Cada dato con su nombre y su unidad.")), " ", __h("figure", {"style": "margin: 0; display: flex; flex-direction: column; gap: 14px"}, __h("img", {"src": "img/cr-caudales.png", "alt": "Esquema de una red en Cross Redes con el caudal calculado en cada tramo", "style": "width: 100%; height: auto; aspect-ratio: 4 / 3; display: block; border-radius: 10px; border: 1px solid #24313F; box-shadow: 0 18px 40px rgba(0, 0, 0, .35)"}), " ", __h("figcaption", {"style": "font-size: 15px; color: #9FB0C3"}, __h("strong", {"style": "color: #F5F7FA; font-weight: 600"}, "Esquemas y gráficas."), " La red dibujada, con el caudal y el sentido de cada tramo.")), " ", __h("figure", {"style": "margin: 0; display: flex; flex-direction: column; gap: 14px"}, __h("img", {"src": "img/cr-verif.png", "alt": "Verificaciones de pérdida, velocidad y presión en Cross Redes", "style": "width: 100%; height: auto; aspect-ratio: 4 / 3; display: block; border-radius: 10px; border: 1px solid #24313F; box-shadow: 0 18px 40px rgba(0, 0, 0, .35)"}), " ", __h("figcaption", {"style": "font-size: 15px; color: #9FB0C3"}, __h("strong", {"style": "color: #F5F7FA; font-weight: 600"}, "Resultados claros."), " Verificaciones de pérdida, velocidad y presión. Lo que no cumple sale en rojo."))), " ", __h("p", {"style": "margin: 0; font-size: 13px; color: #7C8DA1"}, "Capturas de Cross Redes 1.2 en el simulador de HP Prime."))), " ", __h("section", {"id": "beneficios", "style": "background: radial-gradient(900px 420px at 88% 0%, rgba(0, 150, 214, .10), rgba(0, 150, 214, 0) 65%), radial-gradient(700px 380px at 6% 100%, rgba(61, 224, 184, .06), rgba(61, 224, 184, 0) 65%), #0E141B; border-top: 1px solid #18222E; border-bottom: 1px solid #18222E"}, __h("div", {"style": "max-width: 1200px; margin: 0 auto; padding: clamp(56px, 6.5vw, 88px) clamp(20px, 4vw, 40px); box-sizing: border-box; display: flex; flex-direction: column; gap: 40px"}, __h("div", {"class": "rv", "style": "display: flex; flex-direction: column; gap: 14px"}, __h("p", {"style": "margin: 0; font-family: 'IBM Plex Mono', ui-monospace, Menlo, monospace; font-size: 13px; letter-spacing: 0.08em; text-transform: uppercase; color: var(--ac)"}, "// Beneficios"), " ", __h("h2", {"style": "margin: 0; font-family: 'IBM Plex Sans Condensed', 'Arial Narrow', sans-serif; font-weight: 700; font-size: clamp(30px, 3.6vw, 48px); line-height: 1.06; letter-spacing: -0.01em; text-wrap: balance; max-width: 18em"}, "Menos tiempo calculando, ", __h("span", {"class": "hl"}, "más tiempo entendiendo"))), " ", __h("div", {"style": "display: grid; grid-template-columns: repeat(auto-fit, minmax(min(280px, 100%), 1fr)); gap: 20px"}, __h("div", {"class": "card rv", "style": "background: #101720; border: 1px solid #1E2A38; border-radius: 10px; padding: 28px; display: flex; flex-direction: column; gap: 14px"}, __h("span", {"style": "color: var(--ac); display: flex"}, __h("svg", {"width": "32", "height": "32", "viewBox": "0 0 24 24", "fill": "none", "stroke": "currentColor", "stroke-width": "1.5", "stroke-linecap": "round", "stroke-linejoin": "round", "aria-hidden": "true"}, __h("circle", {"cx": "12", "cy": "13", "r": "8"}), __h("path", {"d": "M12 9v4l2.5 2"}), __h("path", {"d": "M9.5 2.5h5"}))), " ", __h("h3", {"style": "margin: 0; font-size: 21px; font-weight: 600; line-height: 1.2"}, "Ahorra tiempo"), " ", __h("p", {"style": "margin: 0; font-size: 16px; color: #9FB0C3"}, "Automatiza los cálculos repetitivos y dedica el examen a plantear el problema.")), " ", __h("div", {"class": "card rv", "style": "background: #101720; border: 1px solid #1E2A38; border-radius: 10px; padding: 28px; display: flex; flex-direction: column; gap: 14px"}, __h("span", {"style": "color: var(--ac); display: flex"}, __h("svg", {"width": "32", "height": "32", "viewBox": "0 0 24 24", "fill": "none", "stroke": "currentColor", "stroke-width": "1.5", "stroke-linecap": "round", "stroke-linejoin": "round", "aria-hidden": "true"}, __h("path", {"d": "M12 3l7 3v5c0 4.5-3 8.5-7 10-4-1.5-7-5.5-7-10V6l7-3z"}), __h("path", {"d": "M9 12l2.2 2.2L15 10.4"}))), " ", __h("h3", {"style": "margin: 0; font-size: 21px; font-weight: 600; line-height: 1.2"}, "Reduce errores"), " ", __h("p", {"style": "margin: 0; font-size: 16px; color: #9FB0C3"}, "Las fórmulas y los procedimientos quedan programados. Tú solo ingresas los datos.")), " ", __h("div", {"class": "card rv", "style": "background: #101720; border: 1px solid #1E2A38; border-radius: 10px; padding: 28px; display: flex; flex-direction: column; gap: 14px"}, __h("span", {"style": "color: var(--ac); display: flex"}, __h("svg", {"width": "32", "height": "32", "viewBox": "0 0 24 24", "fill": "none", "stroke": "currentColor", "stroke-width": "1.5", "stroke-linecap": "round", "stroke-linejoin": "round", "aria-hidden": "true"}, __h("path", {"d": "M4 4v16h16"}), __h("path", {"d": "M7 16c3-1 4-7 6-7s2 4 6-4"}))), " ", __h("h3", {"style": "margin: 0; font-size: 21px; font-weight: 600; line-height: 1.2"}, "Aprende mejor"), " ", __h("p", {"style": "margin: 0; font-size: 16px; color: #9FB0C3"}, "Pasos, gráficas y resultados claros para entender el procedimiento y no solo la respuesta."))))), " ", __h("section", {"id": "proceso", "class": "gx"}, __h("div", {"class": "galaxy g-left g-soft", "aria-hidden": "true"}), " ", __h("div", {"style": "max-width: 1200px; margin: 0 auto; padding: clamp(56px, 6.5vw, 88px) clamp(20px, 4vw, 40px); box-sizing: border-box; display: flex; flex-direction: column; gap: 40px"}, __h("div", {"class": "rv", "style": "display: flex; flex-direction: column; gap: 14px"}, __h("p", {"style": "margin: 0; font-family: 'IBM Plex Mono', ui-monospace, Menlo, monospace; font-size: 13px; letter-spacing: 0.08em; text-transform: uppercase; color: var(--ac)"}, "// Cómo funciona la compra"), " ", __h("h2", {"style": "margin: 0; font-family: 'IBM Plex Sans Condensed', 'Arial Narrow', sans-serif; font-weight: 700; font-size: clamp(30px, 3.6vw, 48px); line-height: 1.06; letter-spacing: -0.01em; text-wrap: balance; max-width: 18em"}, "Del carrito a tu calculadora en ", __h("span", {"class": "hl"}, "tres pasos"))), " ", __h("div", {"class": "rv", "aria-hidden": "true", "style": "display: flex; flex-direction: column; gap: 12px"}, __h("div", {"style": "position: relative; height: 12px; margin: 0 6px"}, __h("div", {"style": "position: absolute; left: 0; right: 0; top: 5px; height: 2px; background: #1E2A38"}), " ", __h("div", {"style": "position: absolute; left: 0; top: 0; width: 12px; height: 12px; margin-left: -6px; border-radius: 50%; background: #0B0F14; border: 2px solid var(--ac); box-sizing: border-box"}), " ", __h("div", {"style": "position: absolute; left: 33.333%; top: 0; width: 12px; height: 12px; margin-left: -6px; border-radius: 50%; background: #0B0F14; border: 2px solid var(--ac); box-sizing: border-box"}), " ", __h("div", {"style": "position: absolute; left: 66.666%; top: 0; width: 12px; height: 12px; margin-left: -6px; border-radius: 50%; background: #0B0F14; border: 2px solid var(--ac); box-sizing: border-box"}), " ", __h("div", {"style": "position: absolute; left: 100%; top: 0; width: 12px; height: 12px; margin-left: -6px; border-radius: 50%; background: var(--ok); box-sizing: border-box"}), " ", __h("div", {"class": "pulse", "style": "position: absolute; left: 0; top: 1px; width: 10px; height: 10px; margin-left: -5px; border-radius: 50%; background: var(--ok); box-shadow: 0 0 14px var(--ok)"})), " ", __h("div", {"style": "display: flex; justify-content: space-between; gap: 8px; font-family: 'IBM Plex Mono', ui-monospace, Menlo, monospace; font-size: 12px; color: #9FB0C3"}, __h("span", null, "Catálogo"), __h("span", null, "Pago"), __h("span", null, "Correo"), __h("span", {"style": "color: var(--ok)"}, "Calculadora"))), " ", __h("ol", {"style": "list-style: none; margin: 0; padding: 0; display: grid; grid-template-columns: repeat(auto-fit, minmax(min(280px, 100%), 1fr)); gap: 20px"}, __h("li", {"class": "rv", "style": "display: flex; flex-direction: column; gap: 12px; padding: 28px; border: 1px solid #1E2A38; border-radius: 10px; background: #101720"}, __h("span", {"style": "font-family: 'IBM Plex Sans Condensed', 'Arial Narrow', sans-serif; font-weight: 700; font-size: 44px; line-height: 1; color: var(--ac)"}, "1"), " ", __h("h3", {"style": "margin: 0; font-size: 21px; font-weight: 600; line-height: 1.2"}, "Elige tus programas"), " ", __h("p", {"style": "margin: 0; font-size: 16px; color: #9FB0C3"}, "Busca por nombre, código o materia y agrega programas o packs al carrito.")), " ", __h("li", {"class": "rv", "style": "display: flex; flex-direction: column; gap: 12px; padding: 28px; border: 1px solid #1E2A38; border-radius: 10px; background: #101720"}, __h("span", {"style": "font-family: 'IBM Plex Sans Condensed', 'Arial Narrow', sans-serif; font-weight: 700; font-size: 44px; line-height: 1; color: var(--ac)"}, "2"), " ", __h("h3", {"style": "margin: 0; font-size: 21px; font-weight: 600; line-height: 1.2"}, "Paga y registra tu calculadora"), " ", __h("p", {"style": "margin: 0; font-size: 16px; color: #9FB0C3"}, "Indica el modelo y el número de serie de tu HP Prime y paga con Yape, Plin o transferencia.")), " ", __h("li", {"class": "rv", "style": "display: flex; flex-direction: column; gap: 12px; padding: 28px; border: 1px solid #1E2A38; border-radius: 10px; background: #101720"}, __h("span", {"style": "font-family: 'IBM Plex Sans Condensed', 'Arial Narrow', sans-serif; font-weight: 700; font-size: 44px; line-height: 1; color: var(--ok)"}, "3"), " ", __h("h3", {"style": "margin: 0; font-size: 21px; font-weight: 600; line-height: 1.2"}, "Recibe e instala"), " ", __h("p", {"style": "margin: 0; font-size: 16px; color: #9FB0C3"}, "El programa y sus instrucciones llegan a tu correo. Incluye soporte y actualizaciones sin costo adicional."))))), " ", __h("section", {"id": "demo", "style": "background: radial-gradient(900px 420px at 88% 0%, rgba(0, 150, 214, .10), rgba(0, 150, 214, 0) 65%), radial-gradient(700px 380px at 6% 100%, rgba(61, 224, 184, .06), rgba(61, 224, 184, 0) 65%), #0E141B; border-top: 1px solid #18222E; border-bottom: 1px solid #18222E"}, __h("div", {"style": "max-width: 1200px; margin: 0 auto; padding: clamp(56px, 6.5vw, 88px) clamp(20px, 4vw, 40px); box-sizing: border-box; display: grid; grid-template-columns: repeat(auto-fit, minmax(min(380px, 100%), 1fr)); gap: 40px 56px; align-items: center"}, __h("div", {"class": "rv", "style": "display: flex; flex-direction: column; gap: 20px"}, __h("p", {"style": "margin: 0; font-family: 'IBM Plex Mono', ui-monospace, Menlo, monospace; font-size: 13px; letter-spacing: 0.08em; text-transform: uppercase; color: var(--ac)"}, "// Demostración"), " ", __h("h2", {"style": "margin: 0; font-family: 'IBM Plex Sans Condensed', 'Arial Narrow', sans-serif; font-weight: 700; font-size: clamp(30px, 3.6vw, 48px); line-height: 1.06; letter-spacing: -0.01em; text-wrap: balance"}, "Prueba ", __h("span", {"class": "hl"}, "Nodo A"), " aquí mismo"), " ", __h("p", {"style": "margin: 0; font-size: 18px; color: #9FB0C3; max-width: 52ch"}, "Elige un ejemplo, el caso de carga y el resultado que quieras ver. Son los resultados de Nodo A 2.0 con los ejemplos que trae incluidos."), " ", __h("div", {"style": "display: flex; flex-direction: column; gap: 10px"}, __h("span", {"class": "vlabel", "style": "color: #9FB0C3"}, "Ejemplo"), " ", __h("div", {"role": "group", "aria-label": "Ejemplos de Nodo A", "style": "display: flex; flex-wrap: wrap; gap: 8px"}, (v.simExs || []).map(function (x, $index) { return [__h("button", {"type": "button", "class": "simtab", "aria-pressed": x.pressed, "onclick": x.pick, "style": ("background: " + String(x.bg == null ? "" : x.bg) + "; color: " + String(x.fg == null ? "" : x.fg) + "; border: 1px solid " + String(x.bd == null ? "" : x.bd))}, x.label)]; }))), " ", __h("div", null, __h("button", {"type": "button", "class": "btn btn-primary", "onclick": v.simRun, "style": "min-width: 190px"}, "Calcular")), " ", __h("div", {"style": "display: flex; flex-direction: column; gap: 10px"}, __h("span", {"class": "vlabel", "style": "color: #9FB0C3"}, "Resultados"), " ", __h("div", {"role": "group", "aria-label": "Resultados de Nodo A", "style": "display: flex; flex-wrap: wrap; gap: 8px"}, (v.simTabs || []).map(function (d, $index) { return [__h("button", {"type": "button", "class": "simtab", "aria-pressed": d.pressed, "onclick": d.pick, "style": ("background: " + String(d.bg == null ? "" : d.bg) + "; color: " + String(d.fg == null ? "" : d.fg) + "; border: 1px solid " + String(d.bd == null ? "" : d.bd))}, d.tab)]; }))), " ", __h("div", {"style": "display: flex; flex-direction: column; gap: 10px"}, __h("span", {"class": "vlabel", "style": "color: #9FB0C3"}, "Caso o combinación"), " ", __h("div", {"role": "group", "aria-label": "Caso o combinación de carga", "style": "display: flex; flex-wrap: wrap; gap: 8px"}, (v.simCases || []).map(function (c, $index) { return [__h("button", {"type": "button", "class": "simtab", "aria-pressed": c.pressed, "onclick": c.pick, "style": ("background: " + String(c.bg == null ? "" : c.bg) + "; color: " + String(c.fg == null ? "" : c.fg) + "; border: 1px solid " + String(c.bd == null ? "" : c.bd) + "; font-family: 'IBM Plex Mono', ui-monospace, Menlo, monospace; font-size: 13px")}, c.label)]; }))), " ", __h("p", {"aria-live": "polite", "style": "margin: 0; min-height: 52px; font-size: 16px; color: #C9D5E2"}, v.simDesc)), " ", __h("div", {"class": "rv", "style": "background: #04070B; border: 1px solid #24313F; border-radius: 12px; overflow: hidden; box-shadow: 0 30px 80px rgba(0, 0, 0, .45), 0 0 0 6px #0B0F14, 0 0 0 7px #1E2A38; font-family: 'IBM Plex Mono', ui-monospace, Menlo, monospace"}, __h("div", {"style": "display: flex; justify-content: space-between; align-items: center; gap: 12px; padding: 9px 16px; background: var(--ac); color: #06121C; font-size: 13px; font-weight: 500"}, __h("span", null, "INGNEX › NODO A 2.0"), __h("span", null, v.simTitle)), " ", __h("div", {"class": "simview", "role": "img", "aria-label": ("Pantalla de Nodo A: " + String(v.simDesc == null ? "" : v.simDesc))}, __h("img", {"src": v.simImg, "alt": "", "loading": "lazy", "decoding": "async", "style": ("width: " + String(v.simW == null ? "" : v.simW) + "; transform: translate(" + String(v.simTx == null ? "" : v.simTx) + ", " + String(v.simTy == null ? "" : v.simTy) + ")")})), " ", __h("div", {"style": "padding: 10px 16px; background: #111A24; color: #C9D5E2; font-size: 12px"}, "Pantallas de Nodo A 2.0 con sus resultados. En la calculadora además dibujas y cargas tus propios modelos.")))), " ", __h("section", {"id": "programas", "style": "background: radial-gradient(1000px 520px at 0% 0%, rgba(110, 155, 255, .08), rgba(110, 155, 255, 0) 65%), radial-gradient(800px 460px at 100% 30%, rgba(44, 201, 192, .06), rgba(44, 201, 192, 0) 65%), #0B0F14"}, __h("div", {"style": "max-width: 1200px; margin: 0 auto; padding: clamp(56px, 6.5vw, 88px) clamp(20px, 4vw, 40px); box-sizing: border-box; display: flex; flex-direction: column; gap: 28px"}, __h("div", {"class": "rv", "style": "display: flex; flex-direction: column; gap: 14px"}, __h("p", {"style": "margin: 0; font-family: 'IBM Plex Mono', ui-monospace, Menlo, monospace; font-size: 13px; letter-spacing: 0.08em; text-transform: uppercase; color: var(--ac)"}, "// Catálogo"), " ", __h("h2", {"style": "margin: 0; font-family: 'IBM Plex Sans Condensed', 'Arial Narrow', sans-serif; font-weight: 700; font-size: clamp(30px, 3.6vw, 48px); line-height: 1.06; letter-spacing: -0.01em; text-wrap: balance; max-width: 18em"}, __h("span", {"class": "hl"}, "19 programas"), " para tu HP Prime"), " ", __h("p", {"style": "margin: 0; font-size: 18px; color: #9FB0C3; max-width: 62ch"}, "Compra programas individuales o ahorra con un pack. Cada uno llega a tu correo con sus instrucciones de instalación.")), " ", __h("div", {"style": "display: flex; flex-wrap: wrap; align-items: center; gap: 12px 16px"}, __h("input", {"class": "fld", "id": "ix-q", "type": "search", "placeholder": "Buscar por nombre, código o materia", "aria-label": "Buscar programas por nombre, código o materia", "oninput": v.onSearch, "style": "flex: 1 1 260px"}), " ", __h("label", {"for": "ix-sort", "style": "font-size: 14px; color: #9FB0C3"}, "Ordenar por"), " ", __h("select", {"class": "fld", "id": "ix-sort", "onchange": v.onSort, "style": "flex: 0 1 240px; width: auto"}, __h("option", {"value": "rel"}, "Relevancia"), " ", __h("option", {"value": "asc"}, "Precio: menor a mayor"), " ", __h("option", {"value": "desc"}, "Precio: mayor a menor"), " ", __h("option", {"value": "rec"}, "Más recientes"), " ", __h("option", {"value": "pop", "disabled": "true"}, "Más populares (sin datos aún)")), " ", __h("button", {"type": "button", "class": "btn btn-ghost only-mobile", "onclick": v.openFilters}, v.filterBtnTxt)), " ", __h("div", {"aria-live": "polite", "style": "display: flex; flex-wrap: wrap; align-items: center; gap: 8px 10px; min-height: 44px"}, __h("span", {"style": "font-family: 'IBM Plex Mono', ui-monospace, Menlo, monospace; font-size: 13px; color: #9FB0C3; margin-right: 6px"}, v.resultTxt), " ", (v.chips || []).map(function (c, $index) { return [__h("button", {"type": "button", "class": "chipx", "onclick": c.remove}, __h("span", {"style": "font-size: 12px; color: #9FB0C3"}, "Quitar"), c.label, __h("span", {"aria-hidden": "true", "style": "font-size: 18px; line-height: 1"}, "×"))]; }), " ", (v.hasChips ? [__h("button", {"type": "button", "class": "linkbtn", "onclick": v.clearAll}, "Limpiar todo")] : null)), " ", __h("div", {"class": "cat-layout", "style": "display: grid; grid-template-columns: 250px minmax(0, 1fr); gap: 28px; align-items: start"}, __h("aside", {"class": ("filters " + String(v.filtersCls == null ? "" : v.filtersCls)), "aria-label": "Filtros del catálogo", "style": "position: sticky; top: 96px; box-sizing: border-box; display: flex; flex-direction: column; gap: 22px; padding: 20px; border: 1px solid #1E2A38; border-radius: 10px; background: #101720"}, __h("div", {"class": "only-mobile", "style": "width: 100%; align-items: center; justify-content: space-between"}, __h("strong", {"style": "font-size: 18px"}, "Filtros"), __h("button", {"type": "button", "class": "xbtn", "onclick": v.closeFilters, "aria-label": "Cerrar filtros"}, "×")), " ", __h("div", {"role": "group", "aria-label": "Categoría", "style": "display: flex; flex-direction: column; gap: 8px"}, __h("p", {"style": "margin: 0 0 2px; font-family: 'IBM Plex Mono', ui-monospace, Menlo, monospace; font-size: 12px; letter-spacing: 0.08em; text-transform: uppercase; color: #9FB0C3"}, "Categoría"), " ", (v.catOpts || []).map(function (o, $index) { return [__h("button", {"type": "button", "class": "opt", "aria-pressed": o.pressed, "disabled": o.disabled, "onclick": o.toggle, "style": ("background: " + String(o.bg == null ? "" : o.bg) + "; color: " + String(o.fg == null ? "" : o.fg) + "; border: 1px solid " + String(o.bd == null ? "" : o.bd))}, __h("span", {"style": "display: flex; align-items: center; gap: 10px"}, __h("span", {"class": "icbox"}, __h("img", {"src": o.icon, "alt": "", "width": "16", "height": "16"})), o.label), __h("span", {"style": "font-family: 'IBM Plex Mono', ui-monospace, Menlo, monospace; font-size: 12px"}, o.count))]; })), " ", __h("div", {"role": "group", "aria-label": "Precio", "style": "display: flex; flex-direction: column; gap: 8px"}, __h("p", {"style": "margin: 0 0 2px; font-family: 'IBM Plex Mono', ui-monospace, Menlo, monospace; font-size: 12px; letter-spacing: 0.08em; text-transform: uppercase; color: #9FB0C3"}, "Precio"), " ", (v.priceOpts || []).map(function (o, $index) { return [__h("button", {"type": "button", "class": "opt", "aria-pressed": o.pressed, "onclick": o.toggle, "style": ("background: " + String(o.bg == null ? "" : o.bg) + "; color: " + String(o.fg == null ? "" : o.fg) + "; border: 1px solid " + String(o.bd == null ? "" : o.bd))}, __h("span", null, o.label), __h("span", {"style": "font-family: 'IBM Plex Mono', ui-monospace, Menlo, monospace; font-size: 12px"}, o.count))]; })), " ", __h("div", {"style": "display: flex; flex-direction: column; gap: 8px"}, __h("p", {"style": "margin: 0 0 2px; font-family: 'IBM Plex Mono', ui-monospace, Menlo, monospace; font-size: 12px; letter-spacing: 0.08em; text-transform: uppercase; color: #9FB0C3"}, "Tipo de licencia"), " ", __h("p", {"style": "margin: 0; font-size: 14px; color: #C9D5E2"}, "Personal, para la calculadora con el número de serie que registras.")), " ", __h("div", {"style": "display: flex; flex-direction: column; gap: 8px"}, __h("p", {"style": "margin: 0 0 2px; font-family: 'IBM Plex Mono', ui-monospace, Menlo, monospace; font-size: 12px; letter-spacing: 0.08em; text-transform: uppercase; color: #9FB0C3"}, "Compatibilidad"), " ", (v.compatOn ? [__h("p", {"style": "margin: 0; font-size: 14px; color: #C9D5E2"}, "Todos los programas: HP Prime G1, G2 y HP Prime Virtual.")] : null), " ", (v.compatOff ? [__h("p", {"style": "margin: 0; font-size: 13px"}, __h("span", {"class": "todo"}, "[COMPLETAR: confirmar compatibilidad]"))] : null)), " ", __h("button", {"type": "button", "class": "btn btn-primary only-mobile", "onclick": v.closeFilters, "style": "width: 100%"}, "Ver ", v.resultTxt)), " ", __h("div", {"style": "display: flex; flex-direction: column; gap: 24px; min-width: 0"}, __h("div", {"style": "display: grid; grid-template-columns: repeat(auto-fill, minmax(min(250px, 100%), 1fr)); gap: 20px"}, (v.shown || []).map(function (p, $index) { return [__h("article", {"class": "card pcard", "style": ("--c: " + String(p.color == null ? "" : p.color) + "; --t: " + String(p.tint == null ? "" : p.tint) + "; --g: " + String(p.glow == null ? "" : p.glow))}, __h("div", {"class": "pcard-media"}, (p.hasImg ? [__h("img", {"class": "shot", "loading": "lazy", "src": p.img, "alt": p.imgAlt, "style": "object-position: 0 0"})] : null), " ", (p.noImg ? [__h("div", {"style": "aspect-ratio: 4 / 3; display: flex; align-items: center; justify-content: center; padding: 16px; background: #0B0F14"}, __h("span", {"class": "todo"}, "[COMPLETAR: capturas]"))] : null), " ", __h("span", {"class": "catchip", "style": "position: absolute; left: 12px; top: 12px"}, __h("img", {"src": p.icon, "alt": "", "width": "14", "height": "14"}), p.cat), " ", (p.soon ? [__h("span", {"class": "soonchip"}, "Próximamente")] : null)), " ", __h("div", {"style": "flex: 1; padding: 18px 18px 20px; display: flex; flex-direction: column; gap: 10px"}, __h("h3", {"style": "margin: 0; font-family: 'IBM Plex Sans Condensed', 'Arial Narrow', sans-serif; font-weight: 700; font-size: 28px; line-height: 1.02; letter-spacing: 0.005em"}, p.name), " ", __h("p", {"class": "codetag"}, p.code, " · v", p.ver), " ", __h("p", {"class": "clamp3", "style": "margin: 0; font-size: 15px; line-height: 1.45; color: #A9B8C9"}, p.short), " ", (p.compat ? [__h("p", {"style": "margin: 0; font-family: 'IBM Plex Mono', ui-monospace, Menlo, monospace; font-size: 11px; color: var(--ok)"}, "Compatible con HP Prime G1, G2 y Virtual")] : null), " ", __h("div", {"style": "margin-top: auto; padding-top: 10px; border-top: 1px solid #1E2A38; display: flex; align-items: center; justify-content: space-between; gap: 10px; flex-wrap: wrap"}, __h("span", {"style": "display: flex; flex-direction: column; gap: 0"}, (p.hasOld ? [__h("s", {"class": "oldprice"}, p.oldTxt)] : null), __h("span", {"class": "price"}, __h("span", {"class": "cur"}, "S/"), p.amt)), " ", __h("button", {"type": "button", "class": "btn btn-ghost", "onclick": p.open, "style": "min-height: 44px; padding: 0 14px; font-size: 14px"}, "Ver detalles")), " ", __h("button", {"type": "button", "class": ("btn " + String(p.addCls == null ? "" : p.addCls)), "disabled": p.soon, "onclick": p.add, "style": "min-height: 46px; font-size: 15px"}, p.addLabel)))]; })), " ", (v.noResults ? [__h("div", {"style": "padding: 40px 24px; border: 1px dashed #2E3F53; border-radius: 10px; text-align: center; display: flex; flex-direction: column; align-items: center; gap: 8px"}, __h("p", {"style": "margin: 0; font-size: 18px; font-weight: 600"}, "Ningún programa coincide"), " ", __h("p", {"style": "margin: 0; font-size: 15px; color: #9FB0C3"}, "Prueba con otro nombre, código o materia, o quita algún filtro."), " ", __h("button", {"type": "button", "class": "linkbtn", "onclick": v.clearAll}, "Limpiar búsqueda y filtros"))] : null), " ", (v.canShowMore ? [__h("div", {"style": "display: flex; justify-content: center"}, __h("button", {"type": "button", "class": "btn btn-ghost", "onclick": v.showMore}, "Ver los ", v.resultTxt))] : null))))), " ", __h("section", {"id": "packs", "style": "background: radial-gradient(900px 440px at 88% 0%, rgba(0, 150, 214, .11), rgba(0, 150, 214, 0) 65%), radial-gradient(700px 400px at 6% 100%, rgba(61, 224, 184, .07), rgba(61, 224, 184, 0) 65%), #0E141B; border-top: 1px solid #18222E; border-bottom: 1px solid #18222E"}, __h("div", {"style": "max-width: 1200px; margin: 0 auto; padding: clamp(56px, 6.5vw, 88px) clamp(20px, 4vw, 40px); box-sizing: border-box; display: flex; flex-direction: column; gap: 36px"}, __h("div", {"class": "rv", "style": "display: flex; flex-direction: column; gap: 14px"}, __h("p", {"style": "margin: 0; font-family: 'IBM Plex Mono', ui-monospace, Menlo, monospace; font-size: 13px; letter-spacing: 0.08em; text-transform: uppercase; color: var(--ac)"}, "// Packs con descuento"), " ", __h("h2", {"style": "margin: 0; font-family: 'IBM Plex Sans Condensed', 'Arial Narrow', sans-serif; font-weight: 700; font-size: clamp(30px, 3.6vw, 48px); line-height: 1.06; letter-spacing: -0.01em; text-wrap: balance; max-width: 18em"}, "Lleva varios programas y ", __h("span", {"class": "hl"}, "paga menos")), " ", __h("p", {"style": "margin: 0; font-size: 18px; color: #9FB0C3; max-width: 60ch"}, "Cada pack incluye los programas completos que ves en la lista. Toca un programa para ver su ficha.")), " ", __h("div", {"style": "display: grid; grid-template-columns: repeat(auto-fit, minmax(min(420px, 100%), 1fr)); gap: 24px; align-items: start"}, (v.packs || []).map(function (k, $index) { return [__h("article", {"class": "card pkcard", "style": ("--c: " + String(k.color == null ? "" : k.color) + "; --t: " + String(k.tint == null ? "" : k.tint) + "; --g: " + String(k.glow == null ? "" : k.glow))}, __h("div", {"class": "fan", "aria-hidden": "true"}, (k.minis || []).map(function (m, $index) { return [__h("div", {"class": "mini", "style": ("transform: rotate(" + String(m.rot == null ? "" : m.rot) + "deg) translateY(" + String(m.ty == null ? "" : m.ty) + "px); z-index: " + String(m.z == null ? "" : m.z))}, __h("div", {"class": "mini-scr"}, __h("img", {"src": m.img, "alt": "", "loading": "lazy"})), " ", __h("div", {"class": "mini-keys"}, __h("span", null), __h("span", null), __h("span", null), __h("span", null), __h("span", null), __h("span", null), __h("span", null), __h("span", null), __h("span", null), __h("span", null), __h("span", null), __h("span", null), __h("span", null), __h("span", null), __h("span", null), __h("span", {"class": "mk-ac"})))]; })), " ", __h("div", {"style": "padding: 0 clamp(20px, 3vw, 30px) clamp(22px, 3vw, 30px); display: flex; flex-direction: column; gap: 18px"}, __h("div", {"style": "display: flex; flex-direction: column; gap: 10px"}, __h("div", {"style": "display: flex; flex-wrap: wrap; align-items: center; gap: 10px"}, __h("span", {"class": "catchip"}, __h("img", {"src": k.icon, "alt": "", "width": "14", "height": "14"}), k.cat), __h("span", {"class": "codetag"}, k.countTxt)), " ", __h("h3", {"style": "margin: 0; font-family: 'IBM Plex Sans Condensed', 'Arial Narrow', sans-serif; font-weight: 700; font-size: clamp(36px, 4vw, 46px); line-height: 1"}, k.name)), " ", __h("div", {"role": "list", "aria-label": "Programas incluidos", "style": "display: flex; flex-direction: column; gap: 8px"}, (k.items || []).map(function (it, $index) { return [__h("button", {"type": "button", "role": "listitem", "class": "pkrow", "onclick": it.open, "aria-label": it.aria}, __h("span", {"class": "icbox"}, __h("img", {"src": it.icon, "alt": "", "width": "16", "height": "16"})), " ", __h("span", {"style": "min-width: 0; display: flex; flex-direction: column; gap: 1px"}, __h("strong", {"style": "font-size: 16px; font-weight: 600"}, it.name), __h("span", {"style": "font-family: 'IBM Plex Mono', ui-monospace, Menlo, monospace; font-size: 12px; color: #9FB0C3"}, it.code)), " ", __h("span", {"style": "font-family: 'IBM Plex Mono', ui-monospace, Menlo, monospace; font-size: 15px; color: #C9D5E2; white-space: nowrap"}, it.priceTxt))]; })), " ", __h("div", {"class": "pktotal"}, __h("div", {"style": "display: flex; justify-content: space-between; gap: 12px; font-size: 15px; color: #9FB0C3"}, __h("span", null, "Comprados por separado"), __h("span", {"style": "font-family: 'IBM Plex Mono', ui-monospace, Menlo, monospace; text-decoration: line-through"}, k.sumTxt)), " ", __h("div", {"style": "display: flex; justify-content: space-between; align-items: baseline; gap: 12px; flex-wrap: wrap"}, __h("span", {"style": "font-size: 16px; font-weight: 600"}, "Precio del pack"), __h("span", {"class": "price", "style": "font-size: 44px"}, __h("span", {"class": "cur"}, "S/"), k.priceAmt)), " ", __h("div", {"style": "display: flex; justify-content: flex-end"}, __h("span", {"class": "savebadge"}, "Ahorras ", k.saveTxt))), " ", __h("div", {"style": "display: flex; flex-wrap: wrap; gap: 12px"}, __h("button", {"type": "button", "class": ("btn " + String(k.addCls == null ? "" : k.addCls)), "onclick": k.add, "style": "flex: 1 1 220px"}, k.addLabel), " ", __h("button", {"type": "button", "class": "btn btn-ghost", "onclick": k.view, "style": "flex: 1 1 200px"}, "Ver programas incluidos"))))]; })))), " ", __h("section", {"id": "vendedores", "class": "gx", "style": "background: radial-gradient(900px 460px at 100% 0%, rgba(179, 157, 250, .10), rgba(179, 157, 250, 0) 65%), radial-gradient(800px 420px at 0% 100%, rgba(240, 179, 87, .07), rgba(240, 179, 87, 0) 65%), #0B0F14; border-bottom: 1px solid #18222E"}, __h("div", {"class": "galaxy", "aria-hidden": "true"}), " ", __h("div", {"style": "max-width: 1200px; margin: 0 auto; padding: clamp(56px, 6.5vw, 88px) clamp(20px, 4vw, 40px); box-sizing: border-box; display: flex; flex-direction: column; gap: 36px"}, __h("div", {"class": "rv", "style": "display: flex; flex-direction: column; gap: 14px"}, __h("p", {"style": "margin: 0; font-family: 'IBM Plex Mono', ui-monospace, Menlo, monospace; font-size: 13px; letter-spacing: 0.08em; text-transform: uppercase; color: var(--ac)"}, "// Programa de vendedores"), " ", __h("h2", {"style": "margin: 0; font-family: 'IBM Plex Sans Condensed', 'Arial Narrow', sans-serif; font-weight: 700; font-size: clamp(30px, 3.6vw, 48px); line-height: 1.06; letter-spacing: -0.01em; text-wrap: balance; max-width: 18em"}, "Gana con tus ", __h("span", {"class": "hl"}, "códigos")), " ", __h("p", {"style": "margin: 0; font-size: 18px; color: #9FB0C3; max-width: 62ch"}, "Recibe un código único y compártelo con tus compañeros. Quien compre con tu código paga menos, y tú acumulas créditos para canjear programas de la tienda.")), " ", __h("div", {"style": "display: grid; grid-template-columns: repeat(auto-fit, minmax(min(420px, 100%), 1fr)); gap: 28px; align-items: start"}, __h("div", {"style": "display: flex; flex-direction: column; gap: 18px"}, __h("div", {"style": "display: grid; grid-template-columns: repeat(auto-fit, minmax(min(190px, 100%), 1fr)); gap: 14px"}, __h("div", {"class": "card vcard", "style": "--c: #3DE0B8; --t: rgba(61, 224, 184, .12)"}, __h("p", {"class": "vlabel"}, "Para quien compra"), " ", __h("span", {"class": "price", "style": "font-size: 38px"}, __h("span", {"class": "cur"}, "S/"), v.cpAmtNum), " ", __h("p", {"style": "margin: 0; font-size: 15px; color: #A9B8C9"}, "de descuento al usar tu código.")), " ", __h("div", {"class": "card vcard", "style": "--c: #B39DFA; --t: rgba(179, 157, 250, .13)"}, __h("p", {"class": "vlabel"}, "Para ti"), " ", __h("strong", {"style": "font-family: 'IBM Plex Sans Condensed', 'Arial Narrow', sans-serif; font-size: 34px; line-height: 1; font-weight: 700"}, "Créditos"), " ", __h("p", {"style": "margin: 0; font-size: 15px; color: #A9B8C9"}, "acumulables por cada compra hecha con tu código.")), " ", __h("div", {"class": "card vcard", "style": "--c: #F0B357; --t: rgba(240, 179, 87, .12)"}, __h("p", {"class": "vlabel"}, "Canje"), " ", __h("strong", {"style": "font-family: 'IBM Plex Sans Condensed', 'Arial Narrow', sans-serif; font-size: 34px; line-height: 1; font-weight: 700"}, "Programas"), " ", __h("p", {"style": "margin: 0; font-size: 15px; color: #A9B8C9"}, "de la tienda, a cambio de tus créditos."))), " ", __h("ol", {"style": "list-style: none; margin: 0; padding: 0; display: grid; grid-template-columns: repeat(auto-fit, minmax(min(180px, 100%), 1fr)); gap: 12px"}, __h("li", {"class": "stepcard", "style": "--c: #B39DFA"}, __h("span", {"class": "stepn"}, "1"), __h("span", {"style": "font-size: 15px; color: #C9D5E2"}, "Solicita tu código con el formulario.")), " ", __h("li", {"class": "stepcard", "style": "--c: #B39DFA"}, __h("span", {"class": "stepn"}, "2"), __h("span", {"style": "font-size: 15px; color: #C9D5E2"}, "Compártelo con tus compañeros.")), " ", __h("li", {"class": "stepcard", "style": "--c: #B39DFA"}, __h("span", {"class": "stepn"}, "3"), __h("span", {"style": "font-size: 15px; color: #C9D5E2"}, "Acumula créditos y canjéalos en tu panel."))), " ", __h("p", {"style": "margin: 0; font-size: 14px; color: #9FB0C3"}, "Los créditos de cada compra se suman cuando confirmamos su pago."), " ", __h("div", {"style": "display: flex; flex-wrap: wrap; gap: 12px"}, __h("button", {"type": "button", "class": "btn btn-primary", "onclick": v.vendOpenForm}, "Quiero ser vendedor ", __h("span", {"class": "arr", "aria-hidden": "true"}, "→")), " ", __h("button", {"type": "button", "class": "btn btn-ghost", "onclick": v.openSeller}, "Entrar a mi panel de vendedor"))), " ", __h("div", {"id": "vend-form", "class": "rv", "style": "background: linear-gradient(180deg, rgba(179, 157, 250, .10), rgba(16, 23, 32, 0) 50%), #101720; border: 1px solid #2A3A4D; border-radius: 14px; padding: clamp(22px, 3vw, 32px); scroll-margin-top: 100px"}, (v.vendFormOn ? [__h("form", {"onsubmit": v.vendSubmit, "style": "display: flex; flex-direction: column; gap: 16px"}, __h("h3", {"style": "margin: 0; font-family: 'IBM Plex Sans Condensed', 'Arial Narrow', sans-serif; font-weight: 700; font-size: 30px; line-height: 1.1"}, "Solicita tu código de vendedor"), " ", __h("div", {"style": "display: flex; flex-direction: column; gap: 6px"}, __h("label", {"for": "ix-vd-nombre", "style": "font-size: 14px; font-weight: 500; color: #C9D5E2"}, "Nombre"), " ", __h("input", {"class": "fld", "id": "ix-vd-nombre", "name": "vd-nombre", "type": "text", "autocomplete": "name"})), " ", __h("div", {"style": "display: flex; flex-direction: column; gap: 6px"}, __h("label", {"for": "ix-vd-correo", "style": "font-size: 14px; font-weight: 500; color: #C9D5E2"}, "Correo"), " ", __h("input", {"class": "fld", "id": "ix-vd-correo", "name": "vd-correo", "type": "email", "autocomplete": "email", "placeholder": "tu@correo.com"})), " ", __h("div", {"style": "display: flex; flex-direction: column; gap: 6px"}, __h("label", {"for": "ix-vd-contacto", "style": "font-size: 14px; font-weight: 500; color: #C9D5E2"}, "WhatsApp o Telegram"), " ", __h("input", {"class": "fld", "id": "ix-vd-contacto", "name": "vd-contacto", "type": "text", "autocomplete": "tel", "placeholder": "Número o @usuario"})), " ", __h("div", {"style": "display: flex; flex-direction: column; gap: 6px"}, __h("label", {"for": "ix-vd-inst", "style": "font-size: 14px; font-weight: 500; color: #C9D5E2"}, "Universidad o institución ", __h("span", {"style": "font-weight: 400; color: #9FB0C3"}, "(opcional)")), " ", __h("input", {"class": "fld", "id": "ix-vd-inst", "name": "vd-inst", "type": "text", "autocomplete": "organization"})), " ", __h("p", {"role": "alert", "style": ("display: " + String(v.vendErrDisp == null ? "" : v.vendErrDisp) + "; margin: 0; font-size: 15px; color: #F2A65A")}, v.vendErr), " ", __h("button", {"type": "submit", "class": "btn btn-primary"}, "Solicitar mi código ", __h("span", {"class": "arr", "aria-hidden": "true"}, "→")), " ", __h("p", {"style": "margin: 0; font-size: 13px; color: #9FB0C3"}, "Al enviar aceptas la ", __h("button", {"type": "button", "class": "linkbtn", "onclick": v.openPriv, "style": "padding: 2px 0; font-size: 13px"}, "Política de privacidad"), "."), " ", __h("p", {"style": "margin: 0; font-size: 13px; color: #9FB0C3"}, "Revisamos cada solicitud y te enviamos tu código por el contacto que indiques."))] : null), " ", (v.vendSentOn ? [__h("div", {"role": "status", "style": "display: flex; flex-direction: column; gap: 14px; align-items: flex-start"}, __h("span", {"style": "width: 56px; height: 56px; border-radius: 50%; border: 1px solid #B39DFA; color: #B39DFA; display: flex; align-items: center; justify-content: center"}, __h("svg", {"width": "26", "height": "26", "viewBox": "0 0 24 24", "fill": "none", "stroke": "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", "aria-hidden": "true"}, __h("path", {"d": "M5 12.5l4.5 4.5L19 7.5"}))), " ", __h("h3", {"style": "margin: 0; font-family: 'IBM Plex Sans Condensed', 'Arial Narrow', sans-serif; font-weight: 700; font-size: 30px; line-height: 1.1"}, "Gracias, ", v.vendName, "."), " ", __h("p", {"style": "margin: 0; font-size: 16px; color: #9FB0C3"}, "Recibimos tu solicitud. Cuando la aprobemos te enviaremos tu código único y podrás entrar a tu panel de vendedor."), " ", __h("button", {"type": "button", "class": "btn btn-ghost", "onclick": v.vendAgain}, "Enviar otra solicitud"))] : null))))), " ", __h("section", {"id": "contacto", "style": "border-bottom: 1px solid #18222E"}, __h("div", {"style": "max-width: 1200px; margin: 0 auto; padding: clamp(56px, 6.5vw, 88px) clamp(20px, 4vw, 40px); box-sizing: border-box; display: grid; grid-template-columns: repeat(auto-fit, minmax(min(380px, 100%), 1fr)); gap: 40px 56px; align-items: start"}, __h("div", {"class": "rv", "style": "display: flex; flex-direction: column; gap: 20px"}, __h("p", {"style": "margin: 0; font-family: 'IBM Plex Mono', ui-monospace, Menlo, monospace; font-size: 13px; letter-spacing: 0.08em; text-transform: uppercase; color: var(--ac)"}, "// ¿No encuentras tu programa?"), " ", __h("h2", {"style": "margin: 0; font-family: 'IBM Plex Sans Condensed', 'Arial Narrow', sans-serif; font-weight: 700; font-size: clamp(30px, 3.6vw, 48px); line-height: 1.06; letter-spacing: -0.01em; text-wrap: balance"}, "Dinos qué ", __h("span", {"class": "hl"}, "necesitas calcular")), " ", __h("p", {"style": "margin: 0; font-size: 18px; color: #9FB0C3; max-width: 46ch"}, "Cuéntanos qué estudias y qué necesitas calcular. Te escribimos con los programas que encajan o con lo que podemos preparar."), " ", __h("ul", {"style": "list-style: none; margin: 0; padding: 0; display: flex; flex-direction: column; gap: 12px; font-size: 16px; color: #C9D5E2"}, __h("li", {"style": "display: flex; gap: 12px; align-items: flex-start"}, __h("span", {"style": "color: var(--ok); display: flex; padding-top: 3px"}, __h("svg", {"width": "18", "height": "18", "viewBox": "0 0 24 24", "fill": "none", "stroke": "currentColor", "stroke-width": "2.2", "stroke-linecap": "round", "stroke-linejoin": "round", "aria-hidden": "true"}, __h("path", {"d": "M5 12.5l4.5 4.5L19 7.5"}))), "Programas organizados por tema"), " ", __h("li", {"style": "display: flex; gap: 12px; align-items: flex-start"}, __h("span", {"style": "color: var(--ok); display: flex; padding-top: 3px"}, __h("svg", {"width": "18", "height": "18", "viewBox": "0 0 24 24", "fill": "none", "stroke": "currentColor", "stroke-width": "2.2", "stroke-linecap": "round", "stroke-linejoin": "round", "aria-hidden": "true"}, __h("path", {"d": "M5 12.5l4.5 4.5L19 7.5"}))), "Instrucciones de instalación"), " ", __h("li", {"style": "display: flex; gap: 12px; align-items: flex-start"}, __h("span", {"style": "color: var(--ok); display: flex; padding-top: 3px"}, __h("svg", {"width": "18", "height": "18", "viewBox": "0 0 24 24", "fill": "none", "stroke": "currentColor", "stroke-width": "2.2", "stroke-linecap": "round", "stroke-linejoin": "round", "aria-hidden": "true"}, __h("path", {"d": "M5 12.5l4.5 4.5L19 7.5"}))), "Ejemplos de uso")), " ", __h("div", {"style": "display: flex; flex-direction: column; align-items: flex-start; gap: 2px; padding-top: 20px; border-top: 1px solid #2A3A4D; font-size: 16px; color: #9FB0C3"}, __h("span", null, "¿Prefieres escribir directo?"), " ", __h("a", {"href": "mailto:elvissosa2303@gmail.com", "style": "font-family: 'IBM Plex Mono', ui-monospace, Menlo, monospace; font-size: 16px; padding: 10px 0"}, "elvissosa2303@gmail.com"), " ", __h("a", {"href": "tel:+51944542116", "style": "font-family: 'IBM Plex Mono', ui-monospace, Menlo, monospace; font-size: 16px; padding: 10px 0"}, "+51 944 542 116"), " ", __h("a", {"class": "btn btn-ghost", "href": "https://wa.me/51944542116", "style": "margin-top: 8px"}, "Escribir por WhatsApp ", __h("span", {"class": "arr", "aria-hidden": "true"}, "→")))), " ", __h("div", {"class": "rv", "style": "background: #101720; border: 1px solid #1E2A38; border-radius: 12px; padding: clamp(22px, 3vw, 32px)"}, (v.showForm ? [__h("form", {"onsubmit": v.submit, "style": "display: flex; flex-direction: column; gap: 18px"}, __h("div", {"style": "display: grid; grid-template-columns: repeat(auto-fit, minmax(min(210px, 100%), 1fr)); gap: 18px"}, __h("div", {"style": "display: flex; flex-direction: column; gap: 6px"}, __h("label", {"for": "ix-nombre", "style": "font-size: 14px; font-weight: 500; color: #C9D5E2"}, "Nombre"), " ", __h("input", {"class": "fld", "id": "ix-nombre", "name": "nombre", "type": "text", "autocomplete": "name", "required": "true"})), " ", __h("div", {"style": "display: flex; flex-direction: column; gap: 6px"}, __h("label", {"for": "ix-email", "style": "font-size: 14px; font-weight: 500; color: #C9D5E2"}, "Email"), " ", __h("input", {"class": "fld", "id": "ix-email", "name": "email", "type": "email", "autocomplete": "email", "placeholder": "tu@correo.com", "required": "true"}))), " ", __h("div", {"style": "display: flex; flex-direction: column; gap: 6px"}, __h("label", {"for": "ix-estudio", "style": "font-size: 14px; font-weight: 500; color: #C9D5E2"}, "Universidad, carrera o nivel de estudio"), " ", __h("input", {"class": "fld", "id": "ix-estudio", "name": "estudio", "type": "text", "placeholder": "Ej.: Ingeniería Civil, 7.º ciclo"})), " ", __h("div", {"style": "display: flex; flex-direction: column; gap: 6px"}, __h("label", {"for": "ix-materia", "style": "font-size: 14px; font-weight: 500; color: #C9D5E2"}, "Materia o tipo de programa que buscas"), " ", __h("select", {"class": "fld", "id": "ix-materia", "name": "materia"}, __h("option", {"value": ""}, "Elige una opción"), " ", __h("option", null, "Estructuras"), " ", __h("option", null, "Hidráulica y saneamiento"), " ", __h("option", null, "Vías y transporte"), " ", __h("option", null, "Topografía"), " ", __h("option", null, "Concreto armado"), " ", __h("option", null, "Otro"))), " ", __h("div", {"style": "display: flex; flex-direction: column; gap: 6px"}, __h("label", {"for": "ix-mensaje", "style": "font-size: 14px; font-weight: 500; color: #C9D5E2"}, "Mensaje ", __h("span", {"style": "font-weight: 400; color: #9FB0C3"}, "(opcional)")), " ", __h("textarea", {"class": "fld", "id": "ix-mensaje", "name": "mensaje", "rows": "3", "style": "resize: vertical; min-height: 96px"})), " ", __h("p", {"role": "alert", "style": ("display: " + String(v.leadErrDisp == null ? "" : v.leadErrDisp) + "; margin: 0; font-size: 15px; color: #F2A65A")}, v.leadErr), " ", __h("button", {"type": "submit", "class": "btn btn-primary", "style": "align-self: flex-start"}, v.leadBtnTxt, " ", __h("span", {"class": "arr", "aria-hidden": "true"}, "→")), " ", __h("p", {"style": "margin: 0; font-size: 13px; color: #9FB0C3"}, "Al enviar aceptas la ", __h("button", {"type": "button", "class": "linkbtn", "onclick": v.openPriv, "style": "padding: 2px 0; font-size: 13px"}, "Política de privacidad"), "."))] : null), " ", (v.sent ? [__h("div", {"role": "status", "style": "display: flex; flex-direction: column; gap: 16px; align-items: flex-start; padding: 12px 0"}, __h("span", {"style": "width: 56px; height: 56px; border-radius: 50%; border: 1px solid var(--ok); color: var(--ok); display: flex; align-items: center; justify-content: center"}, __h("svg", {"width": "26", "height": "26", "viewBox": "0 0 24 24", "fill": "none", "stroke": "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", "aria-hidden": "true"}, __h("path", {"d": "M5 12.5l4.5 4.5L19 7.5"}))), " ", __h("h3", {"style": "margin: 0; font-family: 'IBM Plex Sans Condensed', 'Arial Narrow', sans-serif; font-weight: 600; font-size: 30px; line-height: 1.1"}, "Gracias, ", v.leadName, "."), " ", __h("p", {"style": "margin: 0; font-size: 17px; color: #9FB0C3; max-width: 44ch"}, "Tu solicitud quedó registrada. Te escribiremos a ", v.leadEmail, " con los programas que encajan con lo que buscas."), " ", (v.leadPreview ? [__h("p", {"style": "margin: 0; font-size: 13px"}, __h("span", {"class": "todo"}, "[COMPLETAR: pegar la URL de tu hoja de Google en Ajustes, sección Conexiones. Sin ella, esta vista previa no envía datos.]"))] : null), " ", __h("button", {"type": "button", "class": "btn btn-ghost", "onclick": v.resetForm}, "Enviar otra solicitud"))] : null)))), " ", __h("section", {"class": "gx", "style": "position: relative; overflow: hidden"}, __h("div", {"class": "galaxy g-left", "aria-hidden": "true"}), " ", __h("div", {"aria-hidden": "true", "style": "position: absolute; inset: 0; background-image: linear-gradient(rgba(124, 92, 255, .14) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 150, 214, .12) 1px, transparent 1px); background-size: 44px 44px; -webkit-mask-image: radial-gradient(ellipse 55% 80% at 50% 50%, #000 0%, transparent 75%); mask-image: radial-gradient(ellipse 55% 80% at 50% 50%, #000 0%, transparent 75%)"}), " ", __h("div", {"class": "rv", "style": "position: relative; max-width: 1200px; margin: 0 auto; padding: clamp(64px, 8vw, 112px) clamp(20px, 4vw, 40px); box-sizing: border-box; display: flex; flex-direction: column; align-items: center; text-align: center; gap: 22px"}, __h("h2", {"style": "margin: 0; font-family: 'IBM Plex Sans Condensed', 'Arial Narrow', sans-serif; font-weight: 700; font-size: clamp(34px, 4.4vw, 60px); line-height: 1.04; letter-spacing: -0.015em; text-wrap: balance; max-width: 16em"}, "Tu HP Prime puede resolver ", __h("span", {"class": "hl"}, "mucho más")), " ", __h("p", {"style": "margin: 0; font-size: 19px; color: #9FB0C3; max-width: 50ch"}, "Programas listos para usar, precisos y fáciles de instalar, para que llegues al resultado sin perder tiempo."), " ", __h("div", {"style": "display: flex; flex-wrap: wrap; justify-content: center; gap: 14px"}, __h("a", {"class": "btn btn-primary", "href": "#programas"}, "Ver programas ", __h("span", {"class": "arr", "aria-hidden": "true"}, "→")), " ", __h("a", {"class": "btn btn-ghost", "href": "#contacto"}, "Solicitar información")))), " ", __h("footer", {"style": "border-top: 1px solid #18222E"}, __h("div", {"style": "max-width: 1200px; margin: 0 auto; padding: 28px clamp(20px, 4vw, 40px) 36px; box-sizing: border-box; display: flex; flex-wrap: wrap; justify-content: space-between; gap: 14px 32px; font-size: 14px; color: #9FB0C3"}, __h("span", {"style": "display: flex; align-items: center; gap: 10px"}, __h("img", {"src": "img/ingnex-mark.png", "alt": "", "style": "height: 28px; width: auto; display: block"}), __h("img", {"src": "img/ingnex-word.png", "alt": "INGNEX", "style": "height: 11px; width: auto; display: block"})), " ", __h("span", {"style": "display: flex; flex-wrap: wrap; gap: 4px 28px"}, __h("a", {"href": "mailto:elvissosa2303@gmail.com", "style": "padding: 8px 0"}, "elvissosa2303@gmail.com"), __h("a", {"href": "tel:+51944542116", "style": "padding: 8px 0"}, "+51 944 542 116"), __h("a", {"href": "https://wa.me/51944542116", "style": "padding: 8px 0"}, "WhatsApp")), " ", __h("span", {"style": "flex-basis: 100%; display: flex; flex-wrap: wrap; gap: 4px 24px"}, __h("a", {"href": "#vendedores", "style": "padding: 8px 0; font-size: 14px"}, "Programa de vendedores"), __h("button", {"type": "button", "class": "footlink", "onclick": v.openSeller}, "Panel de vendedor"), __h("button", {"type": "button", "class": "footlink", "onclick": v.openTrack}, "Estado de mi pedido"), __h("button", {"type": "button", "class": "footlink", "onclick": v.openPolicy}, "Política de reembolsos"), __h("button", {"type": "button", "class": "footlink", "onclick": v.openTerms}, "Términos y condiciones"), __h("button", {"type": "button", "class": "footlink", "onclick": v.openPriv}, "Política de privacidad"), __h("button", {"type": "button", "class": "footlink", "onclick": v.openAdmin}, "Administración")), " ", __h("span", {"style": "flex-basis: 100%; font-size: 13px; color: #7C8DA1"}, "INGNEX es un proyecto independiente. HP y HP Prime son marcas de sus respectivos titulares y se mencionan solo para indicar compatibilidad."))), " ", __h("button", {"type": "button", "class": "backdrop", "tabindex": "-1", "aria-label": "Cerrar", "onclick": v.closeAll, "style": ("display: " + String(v.bdDisp == null ? "" : v.bdDisp) + "; position: fixed; inset: 0; z-index: 60; width: 100%; height: 100%; padding: 0; border: 0; background: rgba(2, 5, 8, .72); cursor: pointer")}), " ", __h("aside", {"class": "drawer", "role": "dialog", "aria-modal": "true", "aria-label": "Carrito de compras", "style": ("display: " + String(v.cartDisp == null ? "" : v.cartDisp) + "; position: fixed; top: 0; right: 0; bottom: 0; z-index: 80; width: min(440px, 100%); box-sizing: border-box; flex-direction: column; background: #0E141B; border-left: 1px solid #2A3A4D; box-shadow: -30px 0 80px rgba(0, 0, 0, .5)")}, __h("div", {"style": "display: flex; align-items: center; justify-content: space-between; gap: 12px; padding: 18px 20px; border-bottom: 1px solid #1E2A38"}, __h("h2", {"style": "margin: 0; font-family: 'IBM Plex Sans Condensed', 'Arial Narrow', sans-serif; font-weight: 600; font-size: 28px; line-height: 1"}, "Tu carrito"), " ", __h("button", {"type": "button", "class": "xbtn", "onclick": v.closeCart, "aria-label": "Cerrar carrito"}, "×")), " ", __h("div", {"style": "flex: 1; overflow-y: auto; padding: 4px 20px 20px"}, (v.cartEmpty ? [__h("div", {"style": "padding: 36px 0; display: flex; flex-direction: column; gap: 8px"}, __h("p", {"style": "margin: 0; font-size: 18px; font-weight: 600"}, "Tu carrito está vacío"), " ", __h("p", {"style": "margin: 0; font-size: 15px; color: #9FB0C3"}, "Agrega un programa o un pack desde el catálogo."))] : null), " ", (v.cartLines || []).map(function (l, $index) { return [__h("div", {"style": "display: flex; gap: 12px; align-items: flex-start; padding: 16px 0; border-bottom: 1px solid #18222E"}, __h("div", {"style": "flex: 1; min-width: 0; display: flex; flex-direction: column; gap: 4px"}, __h("strong", {"style": "font-size: 16px; font-weight: 600"}, l.name), __h("span", {"style": "font-family: 'IBM Plex Mono', ui-monospace, Menlo, monospace; font-size: 12px; line-height: 1.5; color: #9FB0C3"}, l.sub)), " ", __h("div", {"style": "text-align: right; font-family: 'IBM Plex Mono', ui-monospace, Menlo, monospace; white-space: nowrap"}, __h("span", {"style": "display: block; font-size: 16px"}, l.priceTxt), __h("span", {"style": "display: block; font-size: 12px; color: #9FB0C3; text-decoration: line-through"}, l.wasTxt)), " ", __h("button", {"type": "button", "class": "xbtn", "onclick": l.remove, "aria-label": l.rmAria}, "×"))]; })), " ", __h("div", {"style": "padding: 18px 20px 22px; border-top: 1px solid #1E2A38; display: flex; flex-direction: column; gap: 10px; background: #101720"}, (v.cartHas ? [__h("div", {"class": "cpbox"}, (v.cpHasList ? [(v.cpList || []).map(function (c, $index) { return [__h("div", {"class": "cpapplied"}, __h("span", {"style": "color: var(--ok); display: flex"}, __h("svg", {"width": "18", "height": "18", "viewBox": "0 0 24 24", "fill": "none", "stroke": "currentColor", "stroke-width": "2.2", "stroke-linecap": "round", "stroke-linejoin": "round", "aria-hidden": "true"}, __h("path", {"d": "M5 12.5l4.5 4.5L19 7.5"}))), __h("span", {"style": "flex: 1; min-width: 0; display: flex; flex-direction: column; gap: 1px"}, __h("strong", {"style": "font-size: 14px; font-weight: 600"}, c.lineName, ": -", c.amtTxt), __h("span", {"style": "font-family: 'IBM Plex Mono', ui-monospace, Menlo, monospace; font-size: 12px; color: #9FB0C3"}, c.kind, " ", c.code)), __h("button", {"type": "button", "class": "linkbtn", "onclick": c.remove, "style": "padding: 10px 0"}, "Quitar"))]; })] : null), " ", (v.cpCanAdd ? [__h("label", {"for": "ix-cp-cart", "style": "font-size: 14px; font-weight: 500; color: #C9D5E2"}, "Código de descuento"), " ", __h("div", {"style": "display: flex; gap: 8px"}, __h("input", {"class": "fld", "id": "ix-cp-cart", "type": "text", "autocomplete": "off", "placeholder": "Escribe tu código", "style": "font-family: 'IBM Plex Mono', ui-monospace, Menlo, monospace; text-transform: uppercase; flex: 1; min-width: 0"}), __h("button", {"type": "button", "class": "btn btn-ghost", "onclick": v.cpApplyCart, "style": "flex: none; min-height: 48px"}, "Aplicar")), " ", (v.cpMultiTarget ? [__h("label", {"for": "ix-cp-cart-to", "style": "font-size: 13px; color: #C9D5E2"}, "Aplicar a"), " ", __h("select", {"class": "fld", "id": "ix-cp-cart-to"}, (v.cpTargets || []).map(function (t, $index) { return [__h("option", {"value": t.id}, t.name)]; }))] : null), " ", __h("span", {"style": "font-size: 12px; color: #9FB0C3"}, v.cpAmtTxt, " de descuento por programa. Un código por programa; también sirven los códigos de vendedor.")] : null), " ", __h("p", {"role": "alert", "style": ("display: " + String(v.cpErrDisp == null ? "" : v.cpErrDisp) + "; margin: 0; font-size: 14px; color: #F2A65A")}, v.cpErr))] : null), " ", __h("div", {"style": "display: flex; justify-content: space-between; gap: 12px; font-size: 15px; color: #9FB0C3"}, __h("span", null, "Subtotal"), __h("span", {"style": "font-family: 'IBM Plex Mono', ui-monospace, Menlo, monospace"}, v.subtotalTxt)), " ", __h("div", {"style": "display: flex; justify-content: space-between; gap: 12px; font-size: 15px; color: #9FB0C3"}, __h("span", null, "Descuento por pack"), __h("span", {"style": "font-family: 'IBM Plex Mono', ui-monospace, Menlo, monospace; color: var(--ok)"}, v.discountTxt)), " ", __h("div", {"style": ("display: " + String(v.cpRowDisp == null ? "" : v.cpRowDisp) + "; justify-content: space-between; gap: 12px; font-size: 15px; color: #9FB0C3")}, __h("span", null, v.cpRowLabel), __h("span", {"style": "font-family: 'IBM Plex Mono', ui-monospace, Menlo, monospace; color: var(--ok)"}, v.cpRowTxt)), " ", __h("div", {"style": "display: flex; justify-content: space-between; align-items: baseline; gap: 12px; font-size: 17px; font-weight: 600"}, __h("span", null, "Total"), __h("span", {"class": "price", "style": "font-size: 30px"}, __h("span", {"class": "cur"}, "S/"), v.totalAmt)), " ", __h("button", {"type": "button", "class": "btn btn-primary", "onclick": v.goCheckout, "style": "margin-top: 6px"}, "Finalizar compra ", __h("span", {"class": "arr", "aria-hidden": "true"}, "→")), " ", __h("button", {"type": "button", "class": "btn btn-ghost", "onclick": v.closeCart}, "Seguir explorando"))), " ", __h("div", {"class": "sheet dpsheet", "role": "dialog", "aria-modal": "true", "aria-label": "Ficha del programa", "style": ("display: " + String(v.dpDisp == null ? "" : v.dpDisp) + "; position: fixed; top: 20px; left: 0; right: 0; z-index: 90; margin: 0 auto; width: min(1060px, calc(100% - 24px)); max-height: min(calc(100vh - 40px), 960px); overflow-y: auto; box-sizing: border-box; border: 1px solid #2A3A4D; border-radius: 14px; box-shadow: 0 40px 100px rgba(0, 0, 0, .6); --c: " + String(v.dpColor == null ? "" : v.dpColor) + "; --t: " + String(v.dpTint == null ? "" : v.dpTint) + "; --g: " + String(v.dpGlow == null ? "" : v.dpGlow))}, __h("div", {"style": "position: sticky; top: 0; z-index: 3; display: flex; align-items: center; justify-content: space-between; gap: 12px; padding: 12px 20px; background: rgba(14, 20, 27, .94); -webkit-backdrop-filter: blur(8px); backdrop-filter: blur(8px); border-bottom: 1px solid #1E2A38"}, __h("span", {"class": "catchip"}, __h("img", {"src": v.dpIcon, "alt": "", "width": "14", "height": "14"}), v.dpCat), " ", __h("button", {"type": "button", "class": "xbtn", "onclick": v.closeDetail, "aria-label": "Cerrar ficha"}, "×")), " ", __h("div", {"style": "padding: clamp(20px, 3vw, 36px); display: flex; flex-direction: column; gap: 32px"}, __h("div", {"style": "display: grid; grid-template-columns: repeat(auto-fit, minmax(min(320px, 100%), 1fr)); gap: 32px 48px; align-items: center"}, __h("div", {"style": "display: flex; flex-direction: column; gap: 14px; align-items: center"}, __h("div", {"class": "mcalc"}, __h("div", {"style": "display: flex; justify-content: space-between; align-items: center; padding: 0 4px; font-family: 'IBM Plex Mono', ui-monospace, Menlo, monospace; font-size: 10px; letter-spacing: 0.1em; color: #7C8DA1"}, __h("span", null, "INGNEX"), __h("span", null, v.dpCode)), " ", __h("div", {"class": "mcalc-scr"}, (v.dpHasImgs ? [__h("img", {"class": "shot", "src": v.dpMainSrc, "alt": v.dpMainAlt, "style": ("object-position: " + String(v.dpMainPos == null ? "" : v.dpMainPos))})] : null), " ", (v.dpNoImgs ? [__h("div", {"style": "aspect-ratio: 4 / 3; display: flex; align-items: center; justify-content: center; padding: 16px"}, __h("span", {"class": "todo"}, "[COMPLETAR: capturas del programa]"))] : null), " ", __h("span", {"class": "glare", "aria-hidden": "true"})), " ", __h("div", {"class": "mcalc-keys", "aria-hidden": "true"}, __h("span", {"class": "key k-dim"}, "F1"), __h("span", {"class": "key k-dim"}, "F2"), __h("span", {"class": "key k-dim"}, "F3"), __h("span", {"class": "key k-dim"}, "F4"), __h("span", {"class": "key k-dim"}, "esc"), __h("span", {"class": "key"}, "7"), __h("span", {"class": "key"}, "8"), __h("span", {"class": "key"}, "9"), __h("span", {"class": "key"}, "÷"), __h("span", {"class": "key"}, "del"), __h("span", {"class": "key"}, "1"), __h("span", {"class": "key"}, "2"), __h("span", {"class": "key"}, "3"), __h("span", {"class": "key"}, "+"), __h("span", {"class": "key k-ac"}, "enter"))), " ", (v.dpHasImgs ? [__h("div", {"role": "group", "aria-label": "Capturas del programa", "style": "display: flex; gap: 10px; justify-content: center; flex-wrap: wrap"}, (v.dpThumbs || []).map(function (t, $index) { return [__h("button", {"type": "button", "class": "thumb", "aria-pressed": t.pressed, "aria-label": t.aria, "onclick": t.pick, "style": ("border-color: " + String(t.bd == null ? "" : t.bd))}, __h("img", {"src": t.src, "alt": "", "style": ("object-position: " + String(t.pos == null ? "" : t.pos))}))]; }))] : null), " ", __h("p", {"style": "margin: 0; font-size: 12px; color: #7C8DA1"}, "Capturas tomadas en el simulador de HP Prime.")), " ", __h("div", {"style": "display: flex; flex-direction: column; gap: 16px"}, __h("p", {"class": "benefit"}, v.dpBenefit), " ", __h("h2", {"style": "margin: 0; font-family: 'IBM Plex Sans Condensed', 'Arial Narrow', sans-serif; font-weight: 700; font-size: clamp(42px, 5vw, 64px); line-height: 0.95; letter-spacing: -0.01em"}, v.dpName), " ", __h("div", {"style": "display: flex; flex-wrap: wrap; gap: 8px"}, __h("span", {"class": "codetag big"}, "Código ", v.dpCode), __h("span", {"class": "codetag big"}, "Versión ", v.dpVer)), " ", __h("p", {"style": "margin: 0; font-size: 17px; color: #B5C3D3; max-width: 54ch"}, v.dpDesc), " ", (v.dpHasNote ? [__h("p", {"style": "margin: 0; font-size: 15px; color: #C9D5E2"}, v.dpNote)] : null), " ", __h("div", {"class": "buybox"}, (v.dpHasOld ? [__h("s", {"class": "oldprice"}, v.dpOldTxt)] : null), __h("span", {"class": "price", "style": "font-size: 48px"}, __h("span", {"class": "cur"}, "S/"), v.dpAmt), " ", __h("div", {"style": "display: flex; flex-wrap: wrap; gap: 10px"}, __h("button", {"type": "button", "class": "btn btn-primary", "disabled": v.dpSoon, "onclick": v.dpBuy, "style": "flex: 1 1 180px"}, v.dpBuyTxt, " ", __h("span", {"class": "arr", "aria-hidden": "true"}, "→")), " ", __h("button", {"type": "button", "class": "btn btn-ghost", "disabled": v.dpSoon, "onclick": v.dpAdd, "style": "flex: 1 1 160px"}, v.dpAddLabel)), " ", __h("ul", {"style": "list-style: none; margin: 0; padding: 0; display: flex; flex-direction: column; gap: 8px; font-size: 14px; color: #C9D5E2"}, __h("li", {"style": "display: flex; gap: 10px; align-items: center"}, __h("span", {"style": "color: var(--ok); display: flex"}, __h("svg", {"width": "16", "height": "16", "viewBox": "0 0 24 24", "fill": "none", "stroke": "currentColor", "stroke-width": "2.2", "stroke-linecap": "round", "stroke-linejoin": "round", "aria-hidden": "true"}, __h("path", {"d": "M5 12.5l4.5 4.5L19 7.5"}))), "Llega a tu correo con sus instrucciones de instalación"), " ", __h("li", {"style": "display: flex; gap: 10px; align-items: center"}, __h("span", {"style": "color: var(--ok); display: flex"}, __h("svg", {"width": "16", "height": "16", "viewBox": "0 0 24 24", "fill": "none", "stroke": "currentColor", "stroke-width": "2.2", "stroke-linecap": "round", "stroke-linejoin": "round", "aria-hidden": "true"}, __h("path", {"d": "M5 12.5l4.5 4.5L19 7.5"}))), "Soporte y actualizaciones sin costo adicional"), " ", __h("li", {"style": "display: flex; gap: 10px; align-items: center"}, __h("span", {"style": "color: #9D86FF; display: flex"}, __h("svg", {"width": "16", "height": "16", "viewBox": "0 0 24 24", "fill": "none", "stroke": "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", "aria-hidden": "true"}, __h("path", {"d": "M12 3l7 3v5c0 4.5-3 8.5-7 10-4-1.5-7-5.5-7-10V6l7-3z"}))), __h("button", {"type": "button", "class": "linkbtn", "onclick": v.openPolicy, "style": "padding: 6px 0; font-size: 14px"}, "Política de reembolsos")), " ", (v.compatOn ? [__h("li", {"style": "display: flex; gap: 10px; align-items: center"}, __h("span", {"style": "color: var(--ok); display: flex"}, __h("svg", {"width": "16", "height": "16", "viewBox": "0 0 24 24", "fill": "none", "stroke": "currentColor", "stroke-width": "2.2", "stroke-linecap": "round", "stroke-linejoin": "round", "aria-hidden": "true"}, __h("path", {"d": "M5 12.5l4.5 4.5L19 7.5"}))), "Compatible con HP Prime G1, G2 y HP Prime Virtual")] : null))))), " ", __h("div", {"style": "display: grid; grid-template-columns: repeat(auto-fit, minmax(min(260px, 100%), 1fr)); gap: 16px"}, __h("div", {"class": "infocard"}, __h("div", {"class": "infohead"}, __h("span", {"class": "infoicon", "style": "color: #F2A65A"}, __h("svg", {"width": "20", "height": "20", "viewBox": "0 0 24 24", "fill": "none", "stroke": "currentColor", "stroke-width": "1.8", "stroke-linecap": "round", "stroke-linejoin": "round", "aria-hidden": "true"}, __h("circle", {"cx": "12", "cy": "12", "r": "9"}), __h("path", {"d": "M12 7.5v5"}), __h("path", {"d": "M12 16.2v.3"}))), __h("span", null, __h("span", {"class": "infonum"}, "01"), "Qué resuelve")), " ", __h("p", {"style": "margin: 0; font-size: 15px; color: #A9B8C9"}, v.dpProblem)), " ", __h("div", {"class": "infocard"}, __h("div", {"class": "infohead"}, __h("span", {"class": "infoicon", "style": "color: var(--c)"}, __h("svg", {"width": "20", "height": "20", "viewBox": "0 0 24 24", "fill": "none", "stroke": "currentColor", "stroke-width": "1.8", "stroke-linecap": "round", "stroke-linejoin": "round", "aria-hidden": "true"}, __h("rect", {"x": "4", "y": "3", "width": "16", "height": "18", "rx": "2"}), __h("path", {"d": "M8 8h8"}), __h("path", {"d": "M8 12h8"}), __h("path", {"d": "M8 16h5"}))), __h("span", null, __h("span", {"class": "infonum"}, "02"), "Qué ingresas")), " ", __h("ul", {"class": "dots"}, (v.dpInputs || []).map(function (it, $index) { return [__h("li", null, it.text)]; }))), " ", __h("div", {"class": "infocard"}, __h("div", {"class": "infohead"}, __h("span", {"class": "infoicon", "style": "color: var(--ok)"}, __h("svg", {"width": "20", "height": "20", "viewBox": "0 0 24 24", "fill": "none", "stroke": "currentColor", "stroke-width": "1.8", "stroke-linecap": "round", "stroke-linejoin": "round", "aria-hidden": "true"}, __h("path", {"d": "M4 4v16h16"}), __h("path", {"d": "M7 15l4-4 3 3 5-6"}))), __h("span", null, __h("span", {"class": "infonum"}, "03"), "Qué obtienes")), " ", __h("ul", {"class": "dots ok"}, (v.dpResults || []).map(function (it, $index) { return [__h("li", null, it.text)]; })))), " ", __h("div", {"class": "excard"}, __h("p", {"style": "margin: 0; font-family: 'IBM Plex Mono', ui-monospace, Menlo, monospace; font-size: 12px; letter-spacing: 0.1em; text-transform: uppercase; color: var(--c)"}, "Ejemplo de uso"), " ", (v.dpExOk ? [__h("p", {"style": "margin: 0; font-size: 18px; line-height: 1.55; color: #E3EAF2; max-width: 70ch"}, v.dpEx)] : null), " ", (v.dpExTodo ? [__h("p", {"style": "margin: 0"}, __h("span", {"class": "todo"}, v.dpEx))] : null)), " ", __h("div", {"style": "display: flex; flex-direction: column; gap: 14px"}, __h("h3", {"style": "margin: 0; font-size: 21px; font-weight: 600; line-height: 1.2"}, "Instálalo en 3 pasos"), " ", __h("ol", {"style": "list-style: none; margin: 0; padding: 0; display: grid; grid-template-columns: repeat(auto-fit, minmax(min(240px, 100%), 1fr)); gap: 14px"}, (v.dpInstall || []).map(function (it, $index) { return [__h("li", {"class": "stepcard"}, __h("span", {"class": "stepn"}, it.n), __h("span", {"style": "font-size: 15px; color: #C9D5E2"}, it.text))]; })), " ", __h("div", {"style": "display: flex; flex-wrap: wrap; align-items: center; gap: 10px 16px; padding: 14px 16px; border-radius: 10px; border: 1px solid #1E2A38; background: #0B0F14"}, __h("strong", {"style": "font-size: 15px"}, "Compatibilidad"), " ", (v.compatOn ? [__h("span", {"style": "font-size: 15px; color: #C9D5E2"}, "HP Prime G1, G2 y HP Prime Virtual.")] : null), " ", (v.compatOff ? [__h("span", {"style": "font-size: 14px"}, __h("span", {"class": "todo"}, "[COMPLETAR: confirmar compatibilidad con HP Prime G1, G2 y HP Prime Virtual]"))] : null), " ", __h("span", {"style": "font-size: 14px; color: #9FB0C3"}, "Para instalar necesitas una PC con HP Connectivity Kit."))), " ", __h("div", {"style": "display: grid; grid-template-columns: repeat(auto-fit, minmax(min(340px, 100%), 1fr)); gap: 28px 40px; align-items: start"}, __h("div", {"style": "display: flex; flex-direction: column"}, __h("h3", {"style": "margin: 0; font-size: 21px; font-weight: 600; line-height: 1.2; margin-bottom: 8px"}, "Preguntas frecuentes"), " ", __h("details", {"class": "faq"}, __h("summary", null, "¿Cómo recibo el programa?"), __h("p", null, "Después de confirmar tu pago, el programa y sus instrucciones de instalación llegan al correo que registres en la compra.")), " ", __h("details", {"class": "faq"}, __h("summary", null, "¿Para qué piden el número de serie de mi calculadora?"), __h("p", null, "Lo necesitamos para poder pasarte el programa. Revisa que esté bien escrito: lo encuentras en Help, Tree, About HP Prime.")), " ", __h("details", {"class": "faq"}, __h("summary", null, "¿Incluye soporte y actualizaciones?"), __h("p", null, "Sí. El soporte y las actualizaciones no tienen costo adicional para compradores.")), " ", __h("details", {"class": "faq", "style": "border-bottom: 1px solid #1E2A38"}, __h("summary", null, "¿Puedo pedir un reembolso?"), __h("p", null, "Aceptamos reembolso, reposición o corrección en los casos que indica nuestra política, si escribes al correo de soporte dentro de los 7 días posteriores a la compra. ", __h("button", {"type": "button", "class": "linkbtn", "onclick": v.openPolicy, "style": "padding: 4px 0"}, "Ver la Política de reembolsos")))), " ", __h("div", {"style": "display: flex; flex-direction: column; gap: 12px"}, __h("h3", {"style": "margin: 0; font-size: 21px; font-weight: 600; line-height: 1.2"}, "Programas relacionados"), " ", (v.dpRel || []).map(function (r, $index) { return [__h("button", {"type": "button", "class": "relcard", "onclick": r.open, "style": ("--c: " + String(r.color == null ? "" : r.color) + "; --t: " + String(r.tint == null ? "" : r.tint))}, (r.hasImg ? [__h("img", {"src": r.img, "alt": "", "class": "relimg"})] : null), " ", __h("span", {"style": "min-width: 0; flex: 1; display: flex; flex-direction: column; gap: 3px"}, __h("span", {"class": "catchip sm"}, __h("img", {"src": r.icon, "alt": "", "width": "12", "height": "12"}), r.cat), __h("strong", {"style": "font-family: 'IBM Plex Sans Condensed', 'Arial Narrow', sans-serif; font-size: 22px; font-weight: 700; line-height: 1.1"}, r.name), __h("span", {"style": "font-family: 'IBM Plex Mono', ui-monospace, Menlo, monospace; font-size: 12px; color: #9FB0C3"}, r.code)), " ", __h("span", {"style": "font-family: 'IBM Plex Mono', ui-monospace, Menlo, monospace; font-size: 15px; white-space: nowrap"}, r.priceTxt))]; }))))), " ", __h("div", {"class": "sheet", "role": "dialog", "aria-modal": "true", "aria-label": "Finalizar compra", "style": ("display: " + String(v.ckDisp == null ? "" : v.ckDisp) + "; position: fixed; top: 20px; left: 0; right: 0; z-index: 100; margin: 0 auto; width: min(1040px, calc(100% - 24px)); max-height: min(calc(100vh - 40px), 940px); overflow-y: auto; box-sizing: border-box; background: #0E141B; border: 1px solid #2A3A4D; border-radius: 14px; box-shadow: 0 40px 100px rgba(0, 0, 0, .6)")}, __h("div", {"style": "position: sticky; top: 0; z-index: 2; display: flex; align-items: center; justify-content: space-between; gap: 12px; padding: 14px 20px; background: #0E141B; border-bottom: 1px solid #1E2A38"}, __h("h2", {"style": "margin: 0; font-family: 'IBM Plex Sans Condensed', 'Arial Narrow', sans-serif; font-weight: 600; font-size: 26px; line-height: 1"}, "Finalizar compra"), " ", __h("button", {"type": "button", "class": "xbtn", "onclick": v.closeCk, "aria-label": "Cerrar compra"}, "×")), " ", __h("div", {"style": "padding: clamp(18px, 3vw, 28px); display: flex; flex-direction: column; gap: 24px"}, __h("ol", {"aria-label": "Pasos de la compra", "style": "list-style: none; margin: 0; padding: 0; display: flex; flex-wrap: wrap; gap: 10px 22px"}, (v.ckSteps || []).map(function (t, $index) { return [__h("li", {"style": ("display: flex; align-items: center; gap: 10px; font-size: 15px; color: " + String(t.lfg == null ? "" : t.lfg))}, __h("span", {"style": ("width: 28px; height: 28px; border-radius: 50%; display: inline-flex; align-items: center; justify-content: center; font-family: 'IBM Plex Mono', ui-monospace, Menlo, monospace; font-size: 13px; background: " + String(t.bg == null ? "" : t.bg) + "; color: " + String(t.fg == null ? "" : t.fg) + "; border: 1px solid " + String(t.bd == null ? "" : t.bd))}, t.n), t.label)]; })), " ", (v.adSheetsOff ? [__h("p", {"style": "margin: 0; padding: 12px 14px; border: 1px dashed rgba(242, 200, 121, .5); border-radius: 8px; background: rgba(242, 200, 121, .07); font-size: 14px; color: #F2C879"}, "Vista previa de la tienda. Los pagos con Yape, Plin y transferencia se verifican a mano antes de enviar cualquier programa. Las cuentas de usuario y el envío de correos están pendientes de conectar.")] : null), " ", __h("div", {"style": "display: grid; grid-template-columns: repeat(auto-fit, minmax(min(320px, 100%), 1fr)); gap: 28px 40px; align-items: start"}, __h("div", {"style": "display: flex; flex-direction: column; gap: 18px; min-width: 0"}, __h("div", {"style": ("display: " + String(v.s1Disp == null ? "" : v.s1Disp) + "; flex-direction: column; gap: 18px")}, __h("h3", {"style": "margin: 0; font-size: 21px; font-weight: 600; line-height: 1.2"}, "1. Tu cuenta"), " ", __h("div", {"role": "group", "aria-label": "Tipo de acceso", "style": "display: flex; flex-wrap: wrap; gap: 10px"}, (v.modeBtns || []).map(function (b, $index) { return [__h("button", {"type": "button", "class": "seg", "aria-pressed": b.pressed, "onclick": b.pick, "style": ("background: " + String(b.bg == null ? "" : b.bg) + "; color: " + String(b.fg == null ? "" : b.fg) + "; border: 1px solid " + String(b.bd == null ? "" : b.bd))}, b.label)]; })), " ", __h("div", {"style": "display: flex; flex-direction: column; gap: 6px"}, __h("label", {"for": "ix-ck-email", "style": "font-size: 14px; font-weight: 500; color: #C9D5E2"}, "Correo"), " ", __h("input", {"class": "fld", "id": "ix-ck-email", "name": "ck-email", "type": "email", "autocomplete": "email", "placeholder": "tu@correo.com"})), " ", __h("div", {"style": "display: flex; flex-direction: column; gap: 6px"}, __h("label", {"for": "ix-ck-pass", "style": "font-size: 14px; font-weight: 500; color: #C9D5E2"}, "Contraseña ", __h("span", {"style": "font-weight: 400; color: #9FB0C3"}, "(mínimo 8 caracteres)")), " ", __h("input", {"class": "fld", "id": "ix-ck-pass", "name": "ck-pass", "type": "password", "autocomplete": v.passAuto})), " ", __h("button", {"type": "button", "class": "btn btn-primary", "onclick": v.ckNext1}, v.acctBtnTxt, " ", __h("span", {"class": "arr", "aria-hidden": "true"}, "→")), " ", __h("div", {"style": "display: flex; align-items: center; gap: 12px; font-size: 13px; color: #7C8DA1"}, __h("span", {"style": "flex: 1; height: 1px; background: #1E2A38"}), "o", __h("span", {"style": "flex: 1; height: 1px; background: #1E2A38"})), " ", __h("button", {"type": "button", "class": "btn btn-ghost", "onclick": v.ckGoogle}, "Continuar con Google"), " ", __h("p", {"style": ("display: " + String(v.ckNoteDisp == null ? "" : v.ckNoteDisp) + "; margin: 0; font-size: 14px; color: #F2C879")}, v.ckNote)), " ", __h("div", {"style": ("display: " + String(v.s2Disp == null ? "" : v.s2Disp) + "; flex-direction: column; gap: 18px")}, __h("h3", {"style": "margin: 0; font-size: 21px; font-weight: 600; line-height: 1.2"}, "2. Entrega y calculadora"), " ", __h("div", {"style": "display: flex; flex-direction: column; gap: 6px"}, __h("label", {"for": "ix-ck-name", "style": "font-size: 14px; font-weight: 500; color: #C9D5E2"}, "Nombre completo"), " ", __h("input", {"class": "fld", "id": "ix-ck-name", "name": "ck-name", "type": "text", "autocomplete": "name"})), " ", __h("div", {"style": "display: flex; flex-direction: column; gap: 6px"}, __h("label", {"for": "ix-ck-dmail", "style": "font-size: 14px; font-weight: 500; color: #C9D5E2"}, "Correo donde recibirás el programa"), " ", __h("input", {"class": "fld", "id": "ix-ck-dmail", "name": "ck-dmail", "type": "email", "autocomplete": "email", "placeholder": "tu@correo.com"})), " ", __h("div", {"style": "display: flex; flex-direction: column; gap: 8px"}, __h("span", {"id": "ix-ck-model-lbl", "style": "font-size: 14px; font-weight: 500; color: #C9D5E2"}, "Modelo de calculadora"), " ", __h("div", {"role": "group", "aria-labelledby": "ix-ck-model-lbl", "style": "display: flex; flex-wrap: wrap; gap: 10px"}, (v.modelBtns || []).map(function (b, $index) { return [__h("button", {"type": "button", "class": "seg", "aria-pressed": b.pressed, "onclick": b.pick, "style": ("background: " + String(b.bg == null ? "" : b.bg) + "; color: " + String(b.fg == null ? "" : b.fg) + "; border: 1px solid " + String(b.bd == null ? "" : b.bd))}, b.label)]; }))), " ", __h("div", {"style": "display: flex; flex-direction: column; gap: 6px"}, __h("label", {"for": "ix-ck-serial", "style": "font-size: 14px; font-weight: 500; color: #C9D5E2"}, "Número de serie de tu HP Prime"), " ", __h("input", {"class": "fld", "id": "ix-ck-serial", "name": "ck-serial", "type": "text", "autocomplete": "off", "placeholder": "Ej.: 7CD5130XXX", "aria-describedby": "ix-ck-serial-help", "style": "font-family: 'IBM Plex Mono', ui-monospace, Menlo, monospace; text-transform: uppercase"}), " ", __h("span", {"id": "ix-ck-serial-help", "style": "font-size: 13px; color: #9FB0C3"}, "Lo necesitamos para poder pasarte el programa.")), " ", __h("div", {"style": "display: flex; flex-direction: column; gap: 12px; padding: 16px; border: 1px solid #1E2A38; border-radius: 10px; background: #101720"}, __h("p", {"style": "margin: 0; font-size: 15px; font-weight: 600"}, "Cómo encontrar el número de serie"), " ", __h("ol", {"style": "list-style: none; margin: 0; padding: 0; display: grid; grid-template-columns: repeat(auto-fit, minmax(min(130px, 100%), 1fr)); gap: 12px"}, __h("li", {"style": "display: flex; flex-direction: column; gap: 8px"}, __h("div", {"aria-hidden": "true", "style": "height: 74px; border-radius: 6px; background: #04070B; border: 1px solid #24313F; display: flex; align-items: center; justify-content: center"}, __h("span", {"style": "padding: 6px 14px; border-radius: 5px; background: #1A2430; border: 1px solid var(--ac); font-family: 'IBM Plex Mono', ui-monospace, Menlo, monospace; font-size: 12px; color: #F5F7FA"}, "Help")), " ", __h("span", {"style": "font-size: 13px; color: #9FB0C3"}, __h("strong", {"style": "color: #F5F7FA"}, "1."), " Presiona la tecla Help.")), " ", __h("li", {"style": "display: flex; flex-direction: column; gap: 8px"}, __h("div", {"aria-hidden": "true", "style": "height: 74px; border-radius: 6px; background: #04070B; border: 1px solid #24313F; display: flex; align-items: flex-end; overflow: hidden"}, __h("div", {"style": "display: flex; width: 100%; font-family: 'IBM Plex Mono', ui-monospace, Menlo, monospace; font-size: 10px"}, __h("span", {"style": "flex: 1; padding: 5px 0; text-align: center; background: var(--ac); color: #06121C"}, "Tree"), __h("span", {"style": "flex: 1; padding: 5px 0; background: #111A24"}), __h("span", {"style": "flex: 1; padding: 5px 0; background: #111A24"}))), " ", __h("span", {"style": "font-size: 13px; color: #9FB0C3"}, __h("strong", {"style": "color: #F5F7FA"}, "2."), " Toca Tree en la barra inferior.")), " ", __h("li", {"style": "display: flex; flex-direction: column; gap: 8px"}, __h("div", {"aria-hidden": "true", "style": "height: 74px; border-radius: 6px; background: #04070B; border: 1px solid #24313F; display: flex; flex-direction: column; justify-content: center; gap: 4px; padding: 0 8px; font-family: 'IBM Plex Mono', ui-monospace, Menlo, monospace; font-size: 10px; color: #7C8DA1"}, __h("span", {"style": "padding: 3px 6px; background: var(--ac); color: #06121C"}, "About HP Prime"), __h("span", {"style": "height: 6px; width: 70%; margin-left: 6px; background: #1E2A38"}), __h("span", {"style": "height: 6px; width: 40%; margin-left: 6px; background: #1E2A38"})), " ", __h("span", {"style": "font-size: 13px; color: #9FB0C3"}, __h("strong", {"style": "color: #F5F7FA"}, "3."), " Elige About HP Prime.")), " ", __h("li", {"style": "display: flex; flex-direction: column; gap: 8px"}, __h("div", {"aria-hidden": "true", "style": "height: 74px; border-radius: 6px; background: #04070B; border: 1px solid #24313F; display: flex; flex-direction: column; justify-content: center; gap: 3px; padding: 0 8px; font-family: 'IBM Plex Mono', ui-monospace, Menlo, monospace; font-size: 9px; color: #7C8DA1"}, __h("span", null, "Software Version"), __h("span", null, "CAS Version"), __h("span", {"style": "color: var(--ok)"}, "Serial Number: 7CD…")), " ", __h("span", {"style": "font-size: 13px; color: #9FB0C3"}, __h("strong", {"style": "color: #F5F7FA"}, "4."), " Copia la línea Serial Number."))), " ", __h("p", {"style": "margin: 0; font-size: 13px; color: #9FB0C3"}, "En la calculadora física también está en la etiqueta de la parte trasera. En HP Prime Virtual sigue los mismos pasos. Si tu calculadora está en español, los nombres del menú pueden aparecer traducidos.")), " ", __h("div", {"style": "display: flex; flex-wrap: wrap; gap: 12px"}, __h("button", {"type": "button", "class": "btn btn-ghost", "onclick": v.ckBack1}, "Atrás"), " ", __h("button", {"type": "button", "class": "btn btn-primary", "onclick": v.ckNext2, "style": "flex: 1 1 200px"}, "Continuar al pago ", __h("span", {"class": "arr", "aria-hidden": "true"}, "→")))), " ", __h("div", {"style": ("display: " + String(v.s3Disp == null ? "" : v.s3Disp) + "; flex-direction: column; gap: 18px")}, __h("h3", {"style": "margin: 0; font-size: 21px; font-weight: 600; line-height: 1.2"}, "3. Pago"), " ", __h("p", {"style": "margin: 0; font-size: 16px; color: #C9D5E2"}, "Realiza tu pago con Yape o Plin. También puedes pagar por transferencia bancaria."), " ", __h("div", {"role": "group", "aria-label": "Método de pago", "style": "display: grid; grid-template-columns: repeat(auto-fit, minmax(min(150px, 100%), 1fr)); gap: 10px"}, (v.payBtns || []).map(function (b, $index) { return [__h("button", {"type": "button", "class": "seg", "aria-pressed": b.pressed, "onclick": b.pick, "style": ("background: " + String(b.bg == null ? "" : b.bg) + "; color: " + String(b.fg == null ? "" : b.fg) + "; border: 1px solid " + String(b.bd == null ? "" : b.bd))}, b.label)]; })), " ", __h("p", {"style": ("display: " + String(v.payNoneDisp == null ? "" : v.payNoneDisp) + "; margin: 0; font-size: 15px; color: #9FB0C3")}, "Elige un método para ver cómo pagar."), " ", __h("div", {"style": ("display: " + String(v.payWalletDisp == null ? "" : v.payWalletDisp) + "; flex-direction: column; gap: 14px; padding: 16px; border: 1px solid #1E2A38; border-radius: 10px; background: #101720")}, __h("p", {"style": "margin: 0; font-size: 15px; font-weight: 600"}, "Realiza tu pago con ", v.payName), " ", __h("div", {"style": "display: flex; flex-wrap: wrap; gap: 18px; align-items: center"}, __h("img", {"src": v.payQr, "alt": ("Código QR de " + String(v.payName == null ? "" : v.payName) + " a nombre de " + String(v.payHolder == null ? "" : v.payHolder)), "style": "width: 176px; height: 176px; flex: none; object-fit: contain; border-radius: 10px; background: #FFFFFF; padding: 8px; box-sizing: border-box"}), " ", __h("div", {"style": "flex: 1 1 180px; display: flex; flex-direction: column; gap: 8px; font-size: 15px; color: #9FB0C3"}, __h("span", null, "Escanea el código con tu app de ", v.payName, "."), " ", __h("span", null, "A nombre de: ", __h("strong", {"style": "color: #F5F7FA"}, v.payHolder)), " ", __h("span", null, "Celular: ", __h("strong", {"style": "font-family: 'IBM Plex Mono', ui-monospace, Menlo, monospace; color: #F5F7FA"}, "944 542 116")), " ", __h("span", null, "Monto a pagar: ", __h("strong", {"class": "price", "style": "font-size: 22px"}, __h("span", {"class": "cur"}, "S/"), v.totalAmt))))), " ", __h("div", {"style": ("display: " + String(v.payBankDisp == null ? "" : v.payBankDisp) + "; flex-direction: column; gap: 14px; padding: 16px; border: 1px solid #1E2A38; border-radius: 10px; background: #101720")}, __h("p", {"style": "margin: 0; font-size: 15px; font-weight: 600"}, "Transferencia bancaria"), " ", __h("p", {"style": "margin: 0; font-size: 15px; color: #9FB0C3"}, "Transfiere ", __h("strong", {"class": "price", "style": "font-size: 20px"}, __h("span", {"class": "cur"}, "S/"), v.totalAmt), " a cualquiera de estas cuentas en soles. Titular: ", __h("strong", {"style": "color: #F5F7FA"}, "Elvis Arturo Sandoval Sosa")), " ", __h("div", {"style": "display: grid; grid-template-columns: repeat(auto-fit, minmax(min(250px, 100%), 1fr)); gap: 12px"}, __h("div", {"class": "acctcard"}, __h("strong", {"style": "font-size: 16px"}, "BCP"), " ", __h("span", {"style": "font-size: 13px; color: #9FB0C3"}, "Cuenta de ahorro en soles"), " ", __h("div", {"class": "acctrow"}, __h("span", {"style": "font-size: 13px; color: #9FB0C3"}, "Número de cuenta"), __h("span", {"style": "font-family: 'IBM Plex Mono', ui-monospace, Menlo, monospace; font-size: 16px; color: #F5F7FA; word-break: break-all"}, "21570385264021"), __h("button", {"type": "button", "class": "copybtn", "onclick": v.copyBcpCta, "aria-label": "Copiar Número de cuenta"}, "Copiar")), " ", __h("div", {"class": "acctrow"}, __h("span", {"style": "font-size: 13px; color: #9FB0C3"}, "CCI"), __h("span", {"style": "font-family: 'IBM Plex Mono', ui-monospace, Menlo, monospace; font-size: 16px; color: #F5F7FA; word-break: break-all"}, "00221517038526402126"), __h("button", {"type": "button", "class": "copybtn", "onclick": v.copyBcpCci, "aria-label": "Copiar CCI"}, "Copiar"))), " ", __h("div", {"class": "acctcard"}, __h("strong", {"style": "font-size: 16px"}, "Scotiabank"), " ", __h("span", {"style": "font-size: 13px; color: #9FB0C3"}, "Cuenta de ahorro en soles"), " ", __h("div", {"class": "acctrow"}, __h("span", {"style": "font-size: 13px; color: #9FB0C3"}, "Número de cuenta"), __h("span", {"style": "font-family: 'IBM Plex Mono', ui-monospace, Menlo, monospace; font-size: 16px; color: #F5F7FA; word-break: break-all"}, "7931208610"), __h("button", {"type": "button", "class": "copybtn", "onclick": v.copySbkCta, "aria-label": "Copiar Número de cuenta"}, "Copiar")), " ", __h("div", {"class": "acctrow"}, __h("span", {"style": "font-size: 13px; color: #9FB0C3"}, "CCI"), __h("span", {"style": "font-family: 'IBM Plex Mono', ui-monospace, Menlo, monospace; font-size: 16px; color: #F5F7FA; word-break: break-all"}, "00931320793120861083"), __h("button", {"type": "button", "class": "copybtn", "onclick": v.copySbkCci, "aria-label": "Copiar CCI"}, "Copiar"))))), " ", __h("div", {"style": ("display: " + String(v.proofDisp == null ? "" : v.proofDisp) + "; flex-direction: column; gap: 14px; padding: 16px; border: 1px solid #2A3A4D; border-radius: 10px; background: linear-gradient(135deg, rgba(124, 92, 255, .10), rgba(16, 23, 32, 0) 60%), #101720")}, __h("p", {"style": "margin: 0; font-size: 16px; font-weight: 600"}, "Envía el número de operación o captura de tu pago"), " ", __h("div", {"style": "display: flex; flex-direction: column; gap: 6px"}, __h("label", {"for": "ix-ck-op", "style": "font-size: 14px; font-weight: 500; color: #C9D5E2"}, "Número de operación o código de aprobación"), " ", __h("input", {"class": "fld", "id": "ix-ck-op", "name": "ck-op", "type": "text", "inputmode": "numeric", "autocomplete": "off", "placeholder": "Lo ves al terminar el pago", "style": "font-family: 'IBM Plex Mono', ui-monospace, Menlo, monospace"})), " ", __h("div", {"style": "display: flex; flex-direction: column; gap: 6px"}, __h("label", {"for": "ix-ck-proof", "style": "font-size: 14px; font-weight: 500; color: #C9D5E2"}, "Captura del comprobante"), " ", __h("input", {"class": "fld", "id": "ix-ck-proof", "type": "file", "accept": "image/*,.pdf", "onchange": v.onProof}), " ", __h("span", {"style": "font-size: 13px; color: #9FB0C3"}, v.proofTxt), " ", (v.proofImgOn ? [__h("img", {"src": v.proofImg, "alt": "Vista previa de tu comprobante", "style": "max-width: 220px; max-height: 220px; object-fit: contain; border-radius: 8px; border: 1px solid #24313F; background: #0B0F14"})] : null)), " ", __h("p", {"style": "margin: 0; font-size: 13px; color: #9FB0C3"}, "Completa al menos uno de los dos. Nunca te pediremos claves ni datos de tu cuenta.")), " ", __h("div", {"class": "accept"}, __h("input", {"type": "checkbox", "id": "ix-ck-accept"}), __h("label", {"for": "ix-ck-accept"}, "Acepto los Términos y condiciones y la Política de privacidad.")), " ", __h("p", {"style": "margin: -6px 0 0; font-size: 13px; color: #9FB0C3"}, "Lee los ", __h("button", {"type": "button", "class": "linkbtn", "onclick": v.openTerms, "style": "padding: 2px 0; font-size: 13px"}, "Términos y condiciones"), " y la ", __h("button", {"type": "button", "class": "linkbtn", "onclick": v.openPriv, "style": "padding: 2px 0; font-size: 13px"}, "Política de privacidad"), "."), " ", __h("div", {"style": "display: flex; flex-wrap: wrap; gap: 12px"}, __h("button", {"type": "button", "class": "btn btn-ghost", "onclick": v.ckBack2}, "Atrás"), " ", __h("button", {"type": "button", "class": "btn btn-primary", "onclick": v.ckConfirm, "style": "flex: 1 1 200px"}, v.confirmTxt, " ", __h("span", {"class": "arr", "aria-hidden": "true"}, "→"))), " ", __h("p", {"style": "margin: 0; font-size: 14px; color: #9FB0C3"}, "Antes de pagar, revisa nuestra ", __h("button", {"type": "button", "class": "linkbtn", "onclick": v.openPolicy, "style": "padding: 4px 0; font-size: 14px"}, "Política de reembolsos"), ".")), " ", __h("div", {"role": "status", "style": ("display: " + String(v.s4Disp == null ? "" : v.s4Disp) + "; flex-direction: column; gap: 16px; align-items: flex-start")}, __h("span", {"style": "width: 56px; height: 56px; border-radius: 50%; border: 1px solid #F2C879; color: #F2C879; display: flex; align-items: center; justify-content: center"}, __h("svg", {"width": "26", "height": "26", "viewBox": "0 0 24 24", "fill": "none", "stroke": "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", "aria-hidden": "true"}, __h("circle", {"cx": "12", "cy": "12", "r": "9"}), __h("path", {"d": "M12 7v5l3 2"}))), " ", __h("h3", {"style": "margin: 0; font-family: 'IBM Plex Sans Condensed', 'Arial Narrow', sans-serif; font-weight: 700; font-size: 32px; line-height: 1.1"}, "Recibimos tu comprobante"), " ", __h("p", {"style": "margin: 0; font-size: 17px; line-height: 1.55; color: #E3EAF2; max-width: 56ch"}, "Recibimos tu comprobante. Estamos verificando tu pago. Recibirás tu programa y las instrucciones en tu correo electrónico cuando se confirme el pago."), " ", __h("div", {"style": "display: flex; flex-wrap: wrap; align-items: center; gap: 10px 14px"}, __h("span", {"style": "font-size: 15px; color: #9FB0C3"}, "Pedido ", __h("strong", {"style": "font-family: 'IBM Plex Mono', ui-monospace, Menlo, monospace; color: #F5F7FA"}, v.orderNum)), " ", __h("span", {"class": "pill", "style": "color: #F2C879; border-color: #F2C879"}, "Estamos verificando tu pago")), " ", __h("p", {"style": "margin: 0; font-size: 15px; color: #9FB0C3"}, "Lo enviaremos a ", __h("strong", {"style": "color: #F5F7FA"}, v.orderMail), ". Guarda tu número de pedido para consultar su estado."), " ", __h("div", {"style": "display: flex; flex-wrap: wrap; gap: 12px"}, __h("button", {"type": "button", "class": "btn btn-primary", "onclick": v.openTrack}, "Ver estado de mi pedido ", __h("span", {"class": "arr", "aria-hidden": "true"}, "→")), " ", __h("a", {"class": "btn btn-ghost", "href": v.waOrderHref}, "Avisar por WhatsApp")), " ", (v.adSheetsOff ? [__h("p", {"style": "margin: 0; font-size: 13px"}, __h("span", {"class": "todo"}, "[COMPLETAR: conectar la hoja de Google para que los pedidos y los correos funcionen fuera de esta vista previa.]"))] : null), " ", __h("p", {"style": "margin: 0; font-size: 15px; color: #9FB0C3"}, "Si el programa no funciona como se describe, revisa la ", __h("button", {"type": "button", "class": "linkbtn", "onclick": v.openPolicy, "style": "padding: 4px 0; font-size: 15px"}, "Política de reembolsos"), "."), " ", __h("p", {"style": "margin: 0; font-size: 15px; color: #9FB0C3"}, "¿Necesitas ayuda? Escribe a ", __h("a", {"href": "mailto:elvissosa2303@gmail.com"}, "elvissosa2303@gmail.com"), " o al ", __h("a", {"href": "https://wa.me/51944542116"}, "WhatsApp +51 944 542 116"), "."), " ", __h("button", {"type": "button", "class": "linkbtn", "onclick": v.closeCk}, "Volver a la tienda")), " ", __h("p", {"role": "alert", "style": ("display: " + String(v.ckErrDisp == null ? "" : v.ckErrDisp) + "; margin: 0; padding: 12px 14px; border-radius: 8px; border: 1px solid #F2A65A; font-size: 15px; color: #F2A65A")}, v.ckErr)), " ", __h("aside", {"aria-label": "Resumen del pedido", "style": "display: flex; flex-direction: column; gap: 12px; padding: 20px; border: 1px solid #1E2A38; border-radius: 10px; background: #101720"}, __h("h3", {"style": "margin: 0; font-size: 21px; font-weight: 600; line-height: 1.2"}, v.sumTitle), " ", (v.sumLines || []).map(function (l, $index) { return [__h("div", {"style": "display: flex; justify-content: space-between; gap: 14px; padding-bottom: 10px; border-bottom: 1px solid #18222E"}, __h("div", {"style": "min-width: 0; display: flex; flex-direction: column; gap: 3px"}, __h("strong", {"style": "font-size: 15px; font-weight: 600"}, l.name), __h("span", {"style": "font-family: 'IBM Plex Mono', ui-monospace, Menlo, monospace; font-size: 12px; line-height: 1.5; color: #9FB0C3"}, l.sub)), " ", __h("span", {"style": "font-family: 'IBM Plex Mono', ui-monospace, Menlo, monospace; font-size: 15px; white-space: nowrap"}, l.priceTxt))]; }), " ", (v.cpEditable ? [__h("div", {"class": "cpbox"}, (v.cpOnEdit ? [(v.cpList || []).map(function (c, $index) { return [__h("div", {"class": "cpapplied"}, __h("span", {"style": "color: var(--ok); display: flex"}, __h("svg", {"width": "18", "height": "18", "viewBox": "0 0 24 24", "fill": "none", "stroke": "currentColor", "stroke-width": "2.2", "stroke-linecap": "round", "stroke-linejoin": "round", "aria-hidden": "true"}, __h("path", {"d": "M5 12.5l4.5 4.5L19 7.5"}))), __h("span", {"style": "flex: 1; min-width: 0; display: flex; flex-direction: column; gap: 1px"}, __h("strong", {"style": "font-size: 14px; font-weight: 600"}, c.lineName, ": -", c.amtTxt), __h("span", {"style": "font-family: 'IBM Plex Mono', ui-monospace, Menlo, monospace; font-size: 12px; color: #9FB0C3"}, c.kind, " ", c.code)), __h("button", {"type": "button", "class": "linkbtn", "onclick": c.remove, "style": "padding: 10px 0"}, "Quitar"))]; })] : null), " ", (v.cpFreeEdit ? [__h("label", {"for": "ix-cp-ck", "style": "font-size: 14px; font-weight: 500; color: #C9D5E2"}, "Código de descuento"), " ", __h("div", {"style": "display: flex; gap: 8px"}, __h("input", {"class": "fld", "id": "ix-cp-ck", "type": "text", "autocomplete": "off", "placeholder": "Escribe tu código", "style": "font-family: 'IBM Plex Mono', ui-monospace, Menlo, monospace; text-transform: uppercase; flex: 1; min-width: 0"}), __h("button", {"type": "button", "class": "btn btn-ghost", "onclick": v.cpApplyCk, "style": "flex: none; min-height: 48px"}, "Aplicar")), " ", (v.cpMultiTarget ? [__h("label", {"for": "ix-cp-ck-to", "style": "font-size: 13px; color: #C9D5E2"}, "Aplicar a"), " ", __h("select", {"class": "fld", "id": "ix-cp-ck-to"}, (v.cpTargets || []).map(function (t, $index) { return [__h("option", {"value": t.id}, t.name)]; }))] : null), " ", __h("span", {"style": "font-size: 12px; color: #9FB0C3"}, v.cpAmtTxt, " de descuento por programa. Un código por programa; también sirven los códigos de vendedor.")] : null), " ", __h("p", {"role": "alert", "style": ("display: " + String(v.cpErrDisp == null ? "" : v.cpErrDisp) + "; margin: 0; font-size: 14px; color: #F2A65A")}, v.cpErr))] : null), " ", __h("div", {"style": "display: flex; justify-content: space-between; gap: 12px; font-size: 15px; color: #9FB0C3"}, __h("span", null, "Subtotal"), __h("span", {"style": "font-family: 'IBM Plex Mono', ui-monospace, Menlo, monospace"}, v.subtotalTxt)), " ", __h("div", {"style": "display: flex; justify-content: space-between; gap: 12px; font-size: 15px; color: #9FB0C3"}, __h("span", null, "Descuento por pack"), __h("span", {"style": "font-family: 'IBM Plex Mono', ui-monospace, Menlo, monospace; color: var(--ok)"}, v.discountTxt)), " ", __h("div", {"style": ("display: " + String(v.cpRowDisp == null ? "" : v.cpRowDisp) + "; justify-content: space-between; gap: 12px; font-size: 15px; color: #9FB0C3")}, __h("span", null, v.cpRowLabel), __h("span", {"style": "font-family: 'IBM Plex Mono', ui-monospace, Menlo, monospace; color: var(--ok)"}, v.cpRowTxt)), " ", __h("div", {"style": "display: flex; justify-content: space-between; align-items: baseline; gap: 12px; font-size: 17px; font-weight: 600"}, __h("span", null, "Total"), __h("span", {"class": "price", "style": "font-size: 30px"}, __h("span", {"class": "cur"}, "S/"), v.totalAmt)), " ", __h("p", {"style": "margin: 0; font-size: 13px; color: #9FB0C3"}, "Precios en soles. Soporte y actualizaciones sin costo adicional."))))), " ", __h("div", {"class": "sheet", "role": "dialog", "aria-modal": "true", "aria-label": "Panel de vendedor", "style": ("display: " + String(v.sellerDisp == null ? "" : v.sellerDisp) + "; position: fixed; top: 20px; left: 0; right: 0; z-index: 100; margin: 0 auto; width: min(1000px, calc(100% - 24px)); max-height: min(calc(100vh - 40px), 940px); overflow-y: auto; box-sizing: border-box; background: radial-gradient(900px 420px at 100% 0%, rgba(179, 157, 250, .10), rgba(0, 0, 0, 0) 65%), #0E141B; border: 1px solid #2A3A4D; border-radius: 14px; box-shadow: 0 40px 100px rgba(0, 0, 0, .6); --c: #B39DFA; --t: rgba(179, 157, 250, .12)")}, __h("div", {"style": "position: sticky; top: 0; z-index: 2; display: flex; align-items: center; justify-content: space-between; gap: 12px; padding: 14px 20px; background: rgba(14, 20, 27, .94); -webkit-backdrop-filter: blur(8px); backdrop-filter: blur(8px); border-bottom: 1px solid #1E2A38"}, __h("h2", {"style": "margin: 0; font-family: 'IBM Plex Sans Condensed', 'Arial Narrow', sans-serif; font-weight: 700; font-size: 26px; line-height: 1"}, "Panel de vendedor"), " ", __h("button", {"type": "button", "class": "xbtn", "onclick": v.closeSeller, "aria-label": "Cerrar panel de vendedor"}, "×")), " ", __h("div", {"style": "padding: clamp(18px, 3vw, 30px); display: flex; flex-direction: column; gap: 24px"}, (v.adSheetsOn ? [(v.slRemoteOff ? [__h("div", {"style": "display: flex; flex-direction: column; gap: 16px; max-width: 460px"}, __h("h3", {"style": "margin: 0; font-size: 21px; font-weight: 600; line-height: 1.2"}, "Entra con tu correo y tu código"), " ", __h("div", {"style": "display: flex; flex-direction: column; gap: 6px"}, __h("label", {"for": "ix-sl-correo", "style": "font-size: 14px; font-weight: 500; color: #C9D5E2"}, "Correo"), " ", __h("input", {"class": "fld", "id": "ix-sl-correo", "name": "sl-correo", "type": "email", "autocomplete": "email", "placeholder": "tu@correo.com"})), " ", __h("div", {"style": "display: flex; flex-direction: column; gap: 6px"}, __h("label", {"for": "ix-sl-codigo", "style": "font-size: 14px; font-weight: 500; color: #C9D5E2"}, "Código de vendedor"), " ", __h("input", {"class": "fld", "id": "ix-sl-codigo", "name": "sl-codigo", "type": "text", "autocomplete": "off", "placeholder": "Tu código", "style": "font-family: 'IBM Plex Mono', ui-monospace, Menlo, monospace; text-transform: uppercase"})), " ", __h("p", {"role": "alert", "style": ("display: " + String(v.sellerErrDisp == null ? "" : v.sellerErrDisp) + "; margin: 0; font-size: 15px; color: #F2A65A")}, v.sellerErr), " ", __h("button", {"type": "button", "class": "btn btn-primary", "onclick": v.slrLogin}, v.slrLoginTxt, " ", __h("span", {"class": "arr", "aria-hidden": "true"}, "→")), " ", __h("p", {"style": "margin: 0; font-size: 14px; color: #9FB0C3"}, "¿Aún no tienes código? Solicítalo en la sección Programa de vendedores."))] : null), " ", (v.slRemoteOn ? [__h("div", {"class": "rankcard"}, __h("span", {"class": "rankbadge", "aria-hidden": "true"}, v.slrBadge), " ", __h("div", {"style": "display: flex; flex-direction: column; gap: 4px; min-width: 0"}, __h("span", {"class": "vlabel", "style": "color: #B39DFA"}, "Tu rango"), " ", __h("strong", {"style": "font-family: 'IBM Plex Sans Condensed', 'Arial Narrow', sans-serif; font-size: 40px; line-height: 1"}, v.slrRank), " ", __h("span", {"style": "font-size: 15px; color: #C9D5E2"}, v.slrName, " · código ", __h("span", {"style": "font-family: 'IBM Plex Mono', ui-monospace, Menlo, monospace; color: #F5F7FA"}, v.slrCode)))), " ", (v.slrVip ? [__h("p", {"style": "margin: 0; padding: 14px 16px; border-radius: 10px; border: 1px solid rgba(242, 200, 121, .55); background: rgba(242, 200, 121, .08); font-size: 15px; color: #F2C879"}, "Como Ultra VIP puedes canjear tus créditos por dinero real. Escríbenos por ", __h("a", {"href": "https://wa.me/51944542116", "style": "color: #F2C879"}, "WhatsApp +51 944 542 116"), " para coordinarlo.")] : null), " ", __h("div", {"style": "display: flex; flex-direction: column; gap: 8px"}, __h("span", {"class": "vlabel"}, "Mensaje para compartir"), " ", __h("p", {"style": "margin: 0; padding: 12px 14px; border-radius: 8px; border: 1px solid #24313F; background: #0B0F14; font-size: 15px; color: #E3EAF2"}, v.slrShare), " ", __h("div", {"style": "display: flex; flex-wrap: wrap; gap: 12px"}, __h("button", {"type": "button", "class": "btn btn-ghost", "onclick": v.slrCopy}, "Copiar mensaje"), __h("button", {"type": "button", "class": "linkbtn", "onclick": v.slrLogout}, "Salir")))] : null)] : null), " ", (v.adSheetsOff ? [__h("p", {"class": "previewnote"}, "Vista previa: los datos de vendedores se guardan solo en este navegador. El acceso real se activará al conectar la base de datos."), " ", (v.slLoginOn ? [__h("div", {"style": "display: flex; flex-direction: column; gap: 16px; max-width: 460px"}, __h("h3", {"style": "margin: 0; font-size: 21px; font-weight: 600; line-height: 1.2"}, "Entra con tu correo y tu código"), " ", __h("div", {"style": "display: flex; flex-direction: column; gap: 6px"}, __h("label", {"for": "ix-sl-correo", "style": "font-size: 14px; font-weight: 500; color: #C9D5E2"}, "Correo"), " ", __h("input", {"class": "fld", "id": "ix-sl-correo", "name": "sl-correo", "type": "email", "autocomplete": "email", "placeholder": "tu@correo.com"})), " ", __h("div", {"style": "display: flex; flex-direction: column; gap: 6px"}, __h("label", {"for": "ix-sl-codigo", "style": "font-size: 14px; font-weight: 500; color: #C9D5E2"}, "Código de vendedor"), " ", __h("input", {"class": "fld", "id": "ix-sl-codigo", "name": "sl-codigo", "type": "text", "autocomplete": "off", "placeholder": "VEND-...", "style": "font-family: 'IBM Plex Mono', ui-monospace, Menlo, monospace; text-transform: uppercase"})), " ", __h("p", {"role": "alert", "style": ("display: " + String(v.sellerErrDisp == null ? "" : v.sellerErrDisp) + "; margin: 0; font-size: 15px; color: #F2A65A")}, v.sellerErr), " ", __h("button", {"type": "button", "class": "btn btn-primary", "onclick": v.slLogin}, "Entrar a mi panel ", __h("span", {"class": "arr", "aria-hidden": "true"}, "→")), " ", __h("p", {"style": "margin: 0; font-size: 14px; color: #9FB0C3"}, "¿Aún no tienes código? Solicítalo en la sección Programa de vendedores."))] : null), " ", (v.slPanelOn ? [__h("div", {"style": "display: flex; flex-direction: column; gap: 24px"}, __h("div", {"style": "display: grid; grid-template-columns: repeat(auto-fit, minmax(min(320px, 100%), 1fr)); gap: 18px; align-items: stretch"}, __h("div", {"class": "excard"}, __h("p", {"class": "vlabel"}, "Hola, ", v.slName, ". Tu código"), " ", __h("div", {"style": "display: flex; flex-wrap: wrap; align-items: center; gap: 12px"}, __h("strong", {"style": "font-family: 'IBM Plex Mono', ui-monospace, Menlo, monospace; font-size: clamp(28px, 4vw, 40px); font-weight: 500; letter-spacing: 0.02em; color: #F5F7FA"}, v.slCode), " ", __h("button", {"type": "button", "class": "copybtn", "onclick": v.slCopyCode}, "Copiar código")), " ", __h("p", {"style": "margin: 0; font-size: 14px; color: #A9B8C9"}, "Quien lo use recibe ", v.cpAmtTxt, " de descuento.")), " ", __h("div", {"class": "excard", "style": "--t: rgba(61, 224, 184, .10)"}, __h("p", {"class": "vlabel", "style": "color: var(--ok)"}, "Mensaje listo para compartir"), " ", __h("p", {"style": "margin: 0; font-size: 15px; line-height: 1.5; color: #E3EAF2"}, v.slMsg), " ", __h("div", {"style": "display: flex; flex-wrap: wrap; gap: 10px"}, __h("button", {"type": "button", "class": "copybtn", "onclick": v.slCopyMsg}, "Copiar mensaje"), " ", __h("a", {"class": "btn btn-ghost", "href": v.slWa, "style": "min-height: 44px; font-size: 14px"}, "Compartir por WhatsApp")))), " ", __h("div", {"style": "display: grid; grid-template-columns: repeat(auto-fit, minmax(min(180px, 100%), 1fr)); gap: 12px"}, __h("div", {"class": "statcard"}, __h("span", {"class": "vlabel"}, "Compras aprobadas"), __h("strong", {"class": "statnum"}, v.slApproved)), " ", __h("div", {"class": "statcard"}, __h("span", {"class": "vlabel"}, "Compras por aprobar"), __h("strong", {"class": "statnum", "style": "color: #F2C879"}, v.slPending)), " ", __h("div", {"class": "statcard"}, __h("span", {"class": "vlabel"}, "Créditos disponibles"), __h("strong", {"class": "statnum", "style": "color: var(--ok)"}, v.slBalance)), " ", __h("div", {"class": "statcard"}, __h("span", {"class": "vlabel"}, "Créditos acumulados"), __h("strong", {"class": "statnum"}, v.slEarned), __h("span", {"style": "font-size: 13px; color: #9FB0C3"}, "Canjeado: ", v.slSpent))), " ", __h("div", {"style": "display: grid; grid-template-columns: repeat(auto-fit, minmax(min(380px, 100%), 1fr)); gap: 24px; align-items: start"}, __h("div", {"style": "display: flex; flex-direction: column; gap: 10px"}, __h("h3", {"style": "margin: 0; font-size: 21px; font-weight: 600; line-height: 1.2"}, "Historial de créditos"), " ", (v.slHistEmpty ? [__h("p", {"style": "margin: 0; font-size: 15px; color: #9FB0C3"}, "Todavía no hay compras con tu código.")] : null), " ", (v.slHist || []).map(function (h, $index) { return [__h("div", {"class": "listrow"}, __h("span", {"style": "min-width: 0; display: flex; flex-direction: column; gap: 2px"}, __h("strong", {"style": "font-size: 15px; font-weight: 600"}, h.label), __h("span", {"style": "font-size: 13px; color: #9FB0C3"}, h.date)), " ", __h("span", {"class": "pill", "style": ("color: " + String(h.color == null ? "" : h.color) + "; border-color: " + String(h.color == null ? "" : h.color))}, h.state), " ", __h("span", {"style": "font-family: 'IBM Plex Mono', ui-monospace, Menlo, monospace; font-size: 15px; white-space: nowrap"}, h.amt))]; }), " ", __h("h3", {"style": "margin: 0; font-size: 21px; font-weight: 600; line-height: 1.2; margin-top: 14px"}, "Mis canjes"), " ", (v.slRedsHas ? [(v.slReds || []).map(function (r, $index) { return [__h("div", {"class": "listrow"}, __h("span", {"style": "min-width: 0; display: flex; flex-direction: column; gap: 2px"}, __h("strong", {"style": "font-size: 15px; font-weight: 600"}, r.name), __h("span", {"style": "font-size: 13px; color: #9FB0C3"}, r.date, " · ", r.cost)), " ", __h("span", {"class": "pill", "style": ("color: " + String(r.color == null ? "" : r.color) + "; border-color: " + String(r.color == null ? "" : r.color))}, r.state))]; })] : null), " ", __h("p", {"style": "margin: 0; font-size: 14px; color: #9FB0C3"}, "Cada canje pasa por tres estados: Pendiente, Aprobado y Entregado.")), " ", __h("div", {"style": "display: flex; flex-direction: column; gap: 10px"}, __h("h3", {"style": "margin: 0; font-size: 21px; font-weight: 600; line-height: 1.2"}, "Programas canjeables"), " ", __h("div", {"class": "redeemlist"}, (v.slCatalog || []).map(function (c, $index) { return [__h("div", {"class": "listrow", "style": ("--c: " + String(c.color == null ? "" : c.color))}, __h("span", {"class": "icbox"}, __h("img", {"src": c.icon, "alt": "", "width": "16", "height": "16"})), " ", __h("span", {"style": "min-width: 0; flex: 1; display: flex; flex-direction: column; gap: 1px"}, __h("strong", {"style": "font-size: 15px; font-weight: 600"}, c.name), __h("span", {"style": "font-family: 'IBM Plex Mono', ui-monospace, Menlo, monospace; font-size: 12px; color: #9FB0C3"}, c.code, " · ", c.price, " en créditos")), " ", __h("button", {"type": "button", "class": "copybtn", "disabled": c.disabled, "aria-label": c.aria, "onclick": c.redeem}, c.btnTxt))]; })))), " ", __h("button", {"type": "button", "class": "linkbtn", "onclick": v.slLogout, "style": "align-self: flex-start"}, "Salir del panel"))] : null)] : null))), " ", __h("div", {"class": "admin", "role": "dialog", "aria-modal": "true", "aria-label": "Administración de INGNEX", "style": ("display: " + String(v.adminDisp == null ? "" : v.adminDisp))}, (v.adLockOn ? [__h("div", {"style": "min-height: 100%; display: flex; align-items: center; justify-content: center; padding: 24px; box-sizing: border-box"}, __h("form", {"onsubmit": v.adUnlockSubmit, "style": "width: 100%; max-width: 360px; display: flex; flex-direction: column; gap: 14px; padding: 28px; border: 1px solid #24313F; border-radius: 12px; background: #0F151C"}, __h("label", {"for": "ix-ad-gate", "style": "font-size: 14px; font-weight: 500; color: #C9D5E2"}, "Clave"), " ", __h("input", {"class": "fld", "id": "ix-ad-gate", "name": "ad-gate", "type": "password", "autocomplete": "current-password"}), " ", __h("p", {"role": "alert", "style": ("display: " + String(v.adGateErrDisp == null ? "" : v.adGateErrDisp) + "; margin: 0; font-size: 15px; color: #F2A65A")}, v.adGateErr), " ", (v.adGateIdle ? [__h("button", {"type": "submit", "class": "btn btn-primary"}, "Entrar")] : null), " ", (v.adGateBusy ? [__h("button", {"type": "button", "class": "btn btn-primary", "disabled": true}, "Revisando…")] : null), " ", __h("button", {"type": "button", "class": "linkbtn", "onclick": v.closeAdmin, "style": "align-self: center"}, "Volver a la tienda")))] : null), " ", (v.adOpenOn ? [__h("header", {"class": "adm-top"}, __h("div", {"style": "display: flex; align-items: center; gap: 12px; min-width: 0; flex-wrap: wrap"}, __h("img", {"src": "img/ingnex-mark.png", "alt": "", "style": "height: 30px; width: auto; display: block"}), " ", __h("strong", {"style": "font-family: 'IBM Plex Sans Condensed', 'Arial Narrow', sans-serif; font-weight: 700; font-size: 24px; line-height: 1"}, "Administración"), " ", (v.adSheetsOn ? [__h("span", {"class": "pill", "style": "color: #3DE0B8; border-color: rgba(61, 224, 184, .6)"}, "Hoja conectada")] : null), (v.adSheetsOff ? [__h("span", {"class": "pill", "style": "color: #F2C879; border-color: rgba(242, 200, 121, .6)"}, "Vista previa")] : null)), " ", __h("div", {"style": "display: flex; flex-wrap: wrap; gap: 10px"}, (v.adSheetsOn ? [__h("button", {"type": "button", "class": "btn btn-ghost", "onclick": v.adLock, "style": "min-height: 44px; font-size: 15px"}, "Cerrar sesión")] : null), __h("button", {"type": "button", "class": "btn btn-ghost", "onclick": v.closeAdmin, "style": "min-height: 44px; font-size: 15px"}, "Volver a la tienda"))), " ", __h("div", {"class": "adm-body"}, __h("nav", {"class": "adm-nav", "aria-label": "Secciones de administración"}, (v.adminTabs || []).map(function (t, $index) { return [__h("button", {"type": "button", "class": t.cls, "aria-current": t.current, "onclick": t.pick}, __h("span", null, t.label), (t.hasBadge ? [__h("span", {"class": "adm-badge"}, t.badge)] : null))]; })), " ", __h("main", {"class": "adm-main"}, (v.adSheetsOn ? [__h("p", {"class": "previewnote"}, "Panel conectado a tu hoja de Google: pedidos, entregas, códigos, precios, rangos y solicitudes de vendedores se guardan ahí. Los canjes de créditos y los pagos a vendedores los haces tú por fuera.")] : null), " ", (v.adSheetsOff ? [__h("p", {"class": "previewnote"}, "Vista previa: códigos, vendedores, créditos y métricas se guardan solo en este navegador y este espacio no tiene contraseña. Antes de usarlo con clientes reales, conéctalo a una base de datos con acceso protegido. Ningún crédito se otorga sin tu aprobación.")] : null), " ", __h("p", {"role": "status", "style": ("display: " + String(v.adminMsgDisp == null ? "" : v.adminMsgDisp) + "; margin: 0; padding: 12px 14px; border-radius: 8px; border: 1px solid rgba(61, 224, 184, .5); background: rgba(61, 224, 184, .08); font-size: 15px; color: #3DE0B8")}, v.adminMsg), " ", __h("p", {"role": "alert", "style": ("display: " + String(v.adminErrDisp == null ? "" : v.adminErrDisp) + "; margin: 0; padding: 12px 14px; border-radius: 8px; border: 1px solid #F2A65A; font-size: 15px; color: #F2A65A")}, v.adminErr), " ", __h("div", {"style": ("display: " + String(v.tOrders == null ? "" : v.tOrders) + "; flex-direction: column; gap: 18px")}, __h("div", {"style": "display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 12px"}, __h("div", {"style": "display: flex; flex-direction: column; gap: 6px"}, __h("h3", {"style": "margin: 0; font-family: 'IBM Plex Sans Condensed', 'Arial Narrow', sans-serif; font-weight: 700; font-size: 32px; line-height: 1.05"}, "Pedidos"), " ", __h("span", {"style": "font-size: 14px; color: #9FB0C3"}, "Fuente: ", __h("strong", {"style": ("color: " + String(v.oSourceColor == null ? "" : v.oSourceColor) + "; font-weight: 600")}, v.oSource), " ", __h("span", {"style": ("display: " + String(v.oLoadingDisp == null ? "" : v.oLoadingDisp))}, "· actualizando…"))), " ", __h("button", {"type": "button", "class": "copybtn", "onclick": v.oRefresh}, "Actualizar")), " ", __h("p", {"role": "alert", "style": ("display: " + String(v.oErrDisp == null ? "" : v.oErrDisp) + "; margin: 0; font-size: 14px; color: #F2A65A")}, v.oErr), " ", __h("p", {"style": "margin: 0; font-size: 14px; color: #9FB0C3"}, "Revisa el pago en tu Yape, Plin o banco. Al verificarlo se crea en tu Drive la carpeta del pedido, con una subcarpeta por programa: cifra cada programa con la serie del cliente, súbelo a su subcarpeta y toca Enviar programa. Si falta algún archivo, no se envía nada."), " ", __h("div", {"role": "group", "aria-label": "Filtrar pedidos", "style": "display: flex; flex-wrap: wrap; gap: 8px"}, (v.oFilters || []).map(function (f, $index) { return [__h("button", {"type": "button", "class": "tab", "aria-pressed": f.pressed, "onclick": f.pick, "style": ("background: " + String(f.bg == null ? "" : f.bg) + "; color: " + String(f.fg == null ? "" : f.fg) + "; border: 1px solid " + String(f.bd == null ? "" : f.bd))}, f.label)]; })), " ", (v.oEmpty ? [__h("p", {"style": "margin: 0; padding: 22px; border: 1px dashed #2E3F53; border-radius: 10px; font-size: 15px; color: #9FB0C3"}, "No hay pedidos en esta lista.")] : null), " ", (v.adOrders || []).map(function (o, $index) { return [__h("article", {"class": "ordcard", "style": ("--c: " + String(o.color == null ? "" : o.color))}, __h("div", {"style": "display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 10px"}, __h("div", {"style": "display: flex; flex-wrap: wrap; align-items: baseline; gap: 6px 14px"}, __h("strong", {"style": "font-family: 'IBM Plex Mono', ui-monospace, Menlo, monospace; font-size: 18px; font-weight: 500"}, o.num), __h("span", {"style": "font-size: 13px; color: #9FB0C3"}, o.date)), " ", __h("span", {"class": "pill", "style": ("color: " + String(o.color == null ? "" : o.color) + "; border-color: " + String(o.color == null ? "" : o.color))}, o.stateTxt)), " ", __h("div", {"class": "ordgrid"}, __h("div", {"class": "ordbox"}, __h("span", {"class": "vlabel"}, "Comprador"), __h("strong", {"style": "font-size: 15px"}, o.name), __h("span", {"class": "ordtxt"}, "Entrega: ", o.mail), __h("span", {"class": "ordtxt"}, "Cuenta: ", o.account)), " ", __h("div", {"class": "ordbox"}, __h("span", {"class": "vlabel"}, "Calculadora"), __h("strong", {"style": "font-size: 15px"}, o.model), __h("span", {"class": "ordtxt", "style": "font-family: 'IBM Plex Mono', ui-monospace, Menlo, monospace"}, "Serie: ", o.serial)), " ", __h("div", {"class": "ordbox"}, __h("span", {"class": "vlabel"}, "Pago"), __h("strong", {"class": "price", "style": "font-size: 24px"}, o.total), __h("span", {"class": "ordtxt"}, o.method, " · Operación: ", __h("span", {"style": "font-family: 'IBM Plex Mono', ui-monospace, Menlo, monospace; color: #F5F7FA"}, o.op)), __h("span", {"class": "ordtxt"}, "Código: ", o.coupon))), " ", __h("div", {"class": "ordgrid"}, __h("div", {"class": "ordbox"}, __h("span", {"class": "vlabel"}, "Programas a enviar"), " ", (o.progs || []).map(function (g, $index) { return [__h("span", {"class": "ordtxt", "style": "color: #E3EAF2"}, g.name, " ", __h("span", {"style": "font-family: 'IBM Plex Mono', ui-monospace, Menlo, monospace; color: #9FB0C3"}, g.code))]; }), " ", __h("span", {"class": "ordtxt"}, "Comprado: ", o.items), " ", (o.hasFolder ? [__h("a", {"href": o.folder, "target": "_blank", "rel": "noopener", "style": "padding: 8px 0"}, "Abrir carpeta del pedido en Drive")] : null)), " ", __h("div", {"class": "ordbox"}, __h("span", {"class": "vlabel"}, "Comprobante"), " ", (o.hasImg ? [__h("button", {"type": "button", "class": "proofbtn", "onclick": o.zoom, "aria-label": "Ampliar o reducir el comprobante"}, __h("img", {"class": o.zoomCls, "src": o.proofImg, "alt": ("Captura del comprobante del pedido " + String(o.num == null ? "" : o.num))}))] : null), " ", (o.hasLink ? [__h("a", {"href": o.proofLink, "style": "padding: 8px 0"}, "Abrir comprobante (", o.proofName, ")")] : null), " ", (o.hasPdf ? [__h("span", {"class": "ordtxt"}, "PDF adjunto: ", o.proofName)] : null), " ", (o.noProof ? [__h("span", {"class": "ordtxt"}, "Sin captura. Revisa el número de operación.")] : null))), " ", (o.hasAlert ? [__h("p", {"style": "margin: 0; padding: 10px 12px; border-radius: 8px; border: 1px solid #F2A65A; font-size: 14px; color: #F2A65A"}, "Atención: ", o.alert)] : null), " ", (o.hasMotivo ? [__h("p", {"style": "margin: 0; font-size: 14px; color: #F2A65A"}, "Motivo del rechazo: ", o.motivo)] : null), " ", (o.hasDelivered ? [__h("p", {"style": "margin: 0; font-size: 14px; color: #3DE0B8"}, "Entregado el ", o.delivered, " a ", o.mail, ".")] : null), " ", __h("details", {"class": "faq"}, __h("summary", null, "Historial del pedido"), " ", (o.hist || []).map(function (h, $index) { return [__h("div", {"class": "actrow"}, __h("span", {"style": "font-family: 'IBM Plex Mono', ui-monospace, Menlo, monospace; font-size: 12px; color: #9FB0C3"}, h.t), __h("span", {"style": "color: #C9D5E2"}, h.txt))]; })), " ", (o.rejecting ? [__h("div", {"style": "display: flex; flex-direction: column; gap: 8px; padding: 14px; border-radius: 10px; border: 1px solid #F2A65A"}, __h("label", {"for": "ix-rej", "style": "font-size: 14px; font-weight: 500; color: #C9D5E2"}, "Motivo del rechazo (lo verá el comprador)"), " ", __h("textarea", {"class": "fld", "id": "ix-rej", "rows": "2", "placeholder": "Ej.: el monto no coincide o no encontramos la operación"}), " ", __h("div", {"style": "display: flex; flex-wrap: wrap; gap: 10px"}, __h("button", {"type": "button", "class": "copybtn", "onclick": o.confirmReject, "style": "border-color: #F2A65A"}, "Confirmar rechazo"), __h("button", {"type": "button", "class": "copybtn", "onclick": o.startReject}, "Cancelar")))] : null), " ", __h("div", {"style": "display: flex; flex-wrap: wrap; align-items: center; gap: 10px"}, (o.canVerify ? [__h("button", {"type": "button", "class": "btn btn-primary", "onclick": o.verify, "style": "min-height: 44px; font-size: 15px"}, "Verificar pago")] : null), " ", (o.canReject ? [__h("button", {"type": "button", "class": "btn btn-ghost", "onclick": o.startReject, "style": "min-height: 44px; font-size: 15px"}, "Rechazar comprobante")] : null), " ", __h("button", {"type": "button", "class": "btn btn-ghost sendbtn", "disabled": o.sendDisabled, "onclick": o.send, "style": "min-height: 44px; font-size: 15px"}, o.sendTxt), " ", __h("span", {"style": "font-size: 13px; color: #9FB0C3"}, o.sendHint)))]; })), " ", __h("div", {"style": ("display: " + String(v.tMetrics == null ? "" : v.tMetrics) + "; flex-direction: column; gap: 20px")}, __h("div", {"style": "display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 12px"}, __h("div", {"style": "display: flex; flex-direction: column; gap: 6px"}, __h("h3", {"style": "margin: 0; font-family: 'IBM Plex Sans Condensed', 'Arial Narrow', sans-serif; font-weight: 700; font-size: 32px; line-height: 1.05"}, "Métricas de la tienda"), " ", __h("span", {"style": "font-size: 14px; color: #9FB0C3"}, "Fuente: ", __h("strong", {"style": ("color: " + String(v.mSourceColor == null ? "" : v.mSourceColor) + "; font-weight: 600")}, v.mSource), " ", __h("span", {"style": ("display: " + String(v.mLoadingDisp == null ? "" : v.mLoadingDisp))}, "· actualizando…"))), " ", __h("div", {"style": "display: flex; flex-wrap: wrap; gap: 8px"}, __h("div", {"role": "group", "aria-label": "Periodo", "style": "display: flex; gap: 6px"}, (v.mRanges || []).map(function (r, $index) { return [__h("button", {"type": "button", "class": "tab", "aria-pressed": r.pressed, "onclick": r.pick, "style": ("background: " + String(r.bg == null ? "" : r.bg) + "; color: " + String(r.fg == null ? "" : r.fg) + "; border: 1px solid " + String(r.bd == null ? "" : r.bd))}, r.label)]; })), " ", __h("button", {"type": "button", "class": "copybtn", "onclick": v.mRefresh}, "Actualizar"))), " ", __h("p", {"role": "alert", "style": ("display: " + String(v.mErrDisp == null ? "" : v.mErrDisp) + "; margin: 0; font-size: 14px; color: #F2A65A")}, v.mErr), " ", __h("div", {"style": "display: grid; grid-template-columns: repeat(auto-fit, minmax(min(210px, 100%), 1fr)); gap: 12px"}, (v.mKpis || []).map(function (k, $index) { return [__h("div", {"class": "kpi", "style": ("--c: " + String(k.color == null ? "" : k.color))}, __h("span", {"class": "vlabel", "style": ("color: " + String(k.color == null ? "" : k.color))}, k.label), __h("strong", {"class": "statnum", "style": "font-size: 32px"}, k.val), __h("span", {"style": "font-size: 13px; color: #9FB0C3"}, k.sub))]; })), " ", __h("div", {"style": "display: grid; grid-template-columns: repeat(auto-fit, minmax(min(420px, 100%), 1fr)); gap: 16px; align-items: stretch"}, __h("div", {"class": "adm-card"}, __h("h4", {"class": "adm-h"}, "Visitas por día"), " ", __h("div", {"class": "bars", "role": "img", "aria-label": v.mBarsAria}, (v.mBars || []).map(function (b, $index) { return [__h("div", {"class": "bar", "title": b.tip}, __h("span", {"class": "barval"}, b.v), __h("span", {"class": "barfill", "style": ("height: " + String(b.h == null ? "" : b.h) + "%")}), __h("span", {"class": "barlbl"}, b.lbl))]; })), " ", (v.mBarsEmpty ? [__h("p", {"style": "margin: 0; font-size: 14px; color: #9FB0C3"}, "Aún no hay visitas registradas en este periodo.")] : null)), " ", __h("div", {"class": "adm-card"}, __h("h4", {"class": "adm-h"}, "Embudo de compra"), " ", (v.mFunnel || []).map(function (f, $index) { return [__h("div", {"class": "funrow"}, __h("span", {"style": "font-size: 14px; color: #C9D5E2"}, f.label), __h("span", {"class": "funbar"}, __h("span", {"style": ("width: " + String(f.w == null ? "" : f.w) + "%")})), __h("span", {"style": "font-family: 'IBM Plex Mono', ui-monospace, Menlo, monospace; font-size: 14px; text-align: right"}, f.val), __h("span", {"style": "font-family: 'IBM Plex Mono', ui-monospace, Menlo, monospace; font-size: 12px; color: #9FB0C3; text-align: right"}, f.pct))]; }), " ", __h("p", {"style": "margin: 0; font-size: 13px; color: #9FB0C3"}, "Porcentaje respecto de las visitas."))), " ", __h("div", {"style": "display: grid; grid-template-columns: repeat(auto-fit, minmax(min(420px, 100%), 1fr)); gap: 16px; align-items: start"}, __h("div", {"class": "adm-card"}, __h("h4", {"class": "adm-h"}, "Programas más vistos"), " ", (v.mTopEmpty ? [__h("p", {"style": "margin: 0; font-size: 14px; color: #9FB0C3"}, "Todavía nadie abrió una ficha en este periodo.")] : null), " ", (v.mTop || []).map(function (t, $index) { return [__h("div", {"class": "funrow toprow"}, __h("span", {"style": "font-size: 14px; color: #C9D5E2; overflow: hidden; text-overflow: ellipsis; white-space: nowrap"}, t.name), __h("span", {"class": "funbar sp"}, __h("span", {"style": ("width: " + String(t.w == null ? "" : t.w) + "%")})), __h("span", {"style": "font-family: 'IBM Plex Mono', ui-monospace, Menlo, monospace; font-size: 14px; text-align: right"}, t.n))]; })), " ", __h("div", {"class": "adm-card"}, __h("h4", {"class": "adm-h"}, "Actividad reciente"), " ", (v.mRecentEmpty ? [__h("p", {"style": "margin: 0; font-size: 14px; color: #9FB0C3"}, "Sin actividad todavía.")] : null), " ", (v.mRecent || []).map(function (a, $index) { return [__h("div", {"class": "actrow"}, __h("span", {"style": "font-family: 'IBM Plex Mono', ui-monospace, Menlo, monospace; font-size: 12px; color: #9FB0C3"}, a.when), __h("span", {"style": "color: #C9D5E2"}, a.what, " ", __h("strong", {"style": "color: #F5F7FA; font-weight: 600"}, a.item)))]; }), " ", __h("p", {"style": "margin: 0; font-size: 13px; color: #9FB0C3"}, "Las visitas son anónimas: se cuentan por navegador, sin nombre ni correo."))), " ", __h("details", {"class": "faq", "style": "border-bottom: 1px solid #1E2A38"}, __h("summary", null, "¿Cómo se miden y cómo ver los datos de todos los visitantes?"), __h("p", null, "Cada visita, ficha abierta, programa agregado, compra iniciada, pedido y código aplicado se registra como un evento anónimo. En esta vista previa solo ves los de este navegador. Al publicar la tienda, conecta la hoja de Google y escribe tu clave en Ajustes: los eventos de todos los visitantes llegarán a la pestaña Eventos y este panel mostrará el total. Si además agregas Google Analytics a tu sitio, la tienda le envía los mismos eventos."))), " ", __h("div", {"style": ("display: " + String(v.tCodes == null ? "" : v.tCodes) + "; flex-direction: column; gap: 16px")}, (v.adSheetsOn ? [__h("h3", {"style": "margin: 0; font-size: 21px; font-weight: 600; line-height: 1.2"}, "Tus códigos están en tu hoja de Google"), " ", __h("p", {"style": "margin: 0; font-size: 15px; color: #C9D5E2"}, "Abre tu hoja, pestaña ", __h("strong", null, "Códigos"), ", y escribe un código por fila. Funcionan al instante en la tienda, desde cualquier equipo. Cada código da ", v.cpAmtTxt, " de descuento en un programa; cada programa del carrito acepta un código distinto. El monto se cambia en Ajustes."), " ", __h("div", {"style": "display: grid; grid-template-columns: repeat(auto-fit, minmax(min(220px, 100%), 1fr)); gap: 12px"}, __h("div", {"class": "ordbox"}, __h("span", {"class": "vlabel"}, "Código"), __h("span", {"class": "ordtxt"}, "Lo que escribe el comprador, sin espacios. Ej.: ", __h("span", {"style": "font-family: 'IBM Plex Mono', ui-monospace, Menlo, monospace; color: #F5F7FA"}, "JUAN5"))), " ", __h("div", {"class": "ordbox"}, __h("span", {"class": "vlabel"}, "Tipo"), __h("span", {"class": "ordtxt"}, __h("strong", null, "Descuento"), " para un cupón normal o ", __h("strong", null, "Vendedor"), " para el código de un vendedor.")), " ", __h("div", {"class": "ordbox"}, __h("span", {"class": "vlabel"}, "Vendedor"), __h("span", {"class": "ordtxt"}, "El nombre del vendedor, solo si el tipo es Vendedor.")), " ", __h("div", {"class": "ordbox"}, __h("span", {"class": "vlabel"}, "Activo"), __h("span", {"class": "ordtxt"}, __h("strong", null, "Sí"), " para que funcione, ", __h("strong", null, "No"), " para desactivarlo."))), " ", __h("p", {"style": "margin: 0; font-size: 14px; color: #9FB0C3"}, "La columna Usos se suma sola con cada pedido. En la pestaña Pedidos verás qué código usó cada compra; si alguien usa un código que no existe, aparece como «NO VÁLIDO» para que revises el monto antes de verificar el pago.")] : null), " ", (v.adSheetsOff ? [__h("h3", {"style": "margin: 0; font-size: 21px; font-weight: 600; line-height: 1.2"}, "Crear código"), " ", __h("div", {"style": "display: grid; grid-template-columns: repeat(auto-fit, minmax(min(200px, 100%), 1fr)); gap: 12px; align-items: end"}, __h("div", {"style": "display: flex; flex-direction: column; gap: 6px"}, __h("label", {"for": "ix-ad-code", "style": "font-size: 14px; font-weight: 500; color: #C9D5E2"}, "Código"), " ", __h("input", {"class": "fld", "id": "ix-ad-code", "type": "text", "autocomplete": "off", "placeholder": "Ej.: BIENVENIDA", "style": "font-family: 'IBM Plex Mono', ui-monospace, Menlo, monospace; text-transform: uppercase"})), " ", __h("div", {"style": "display: flex; flex-direction: column; gap: 6px"}, __h("label", {"for": "ix-ad-type", "style": "font-size: 14px; font-weight: 500; color: #C9D5E2"}, "Tipo"), " ", __h("select", {"class": "fld", "id": "ix-ad-type"}, __h("option", {"value": "promo"}, "Descuento para compradores"), __h("option", {"value": "seller"}, "Código de vendedor"))), " ", __h("div", {"style": "display: flex; flex-direction: column; gap: 6px"}, __h("label", {"for": "ix-ad-seller", "style": "font-size: 14px; font-weight: 500; color: #C9D5E2"}, "Vendedor ", __h("span", {"style": "font-weight: 400; color: #9FB0C3"}, "(solo códigos de vendedor)")), " ", __h("select", {"class": "fld", "id": "ix-ad-seller"}, __h("option", {"value": ""}, "Ninguno"), " ", (v.adSellerOpts || []).map(function (o, $index) { return [__h("option", {"value": o.id}, o.label)]; }))), " ", __h("button", {"type": "button", "class": "btn btn-primary", "onclick": v.adCreate}, "Crear código")), " ", __h("p", {"style": "margin: 0; font-size: 14px; color: #9FB0C3"}, "Todos los códigos descuentan ", v.cpAmtTxt, ". El comprador puede usar un solo código por compra."), " ", __h("h3", {"style": "margin: 0; font-size: 21px; font-weight: 600; line-height: 1.2; margin-top: 6px"}, "Códigos"), " ", (v.adCodes || []).map(function (c, $index) { return [__h("div", {"class": "listrow"}, __h("span", {"style": "min-width: 0; flex: 1; display: flex; flex-direction: column; gap: 2px"}, __h("strong", {"style": "font-family: 'IBM Plex Mono', ui-monospace, Menlo, monospace; font-size: 16px; font-weight: 500"}, c.code), __h("span", {"style": "font-size: 13px; color: #9FB0C3"}, c.typeTxt, " · ", c.seller, " · ", c.uses, " usos")), " ", __h("span", {"class": "pill", "style": ("color: " + String(c.stateColor == null ? "" : c.stateColor) + "; border-color: " + String(c.stateColor == null ? "" : c.stateColor))}, c.stateTxt), " ", __h("button", {"type": "button", "class": "copybtn", "aria-label": c.toggleAria, "onclick": c.toggle}, c.toggleTxt))]; })] : null)), " ", __h("div", {"style": ("display: " + String(v.tSellers == null ? "" : v.tSellers) + "; flex-direction: column; gap: 14px")}, __h("h3", {"style": "margin: 0; font-size: 21px; font-weight: 600; line-height: 1.2"}, "Solicitudes pendientes"), " ", (v.adReqsEmpty ? [__h("p", {"style": "margin: 0; font-size: 15px; color: #9FB0C3"}, "No hay solicitudes pendientes.")] : null), " ", (v.adReqs || []).map(function (r, $index) { return [__h("div", {"class": "listrow"}, __h("span", {"style": "min-width: 0; flex: 1; display: flex; flex-direction: column; gap: 2px"}, __h("strong", {"style": "font-size: 15px; font-weight: 600"}, r.name), __h("span", {"style": "font-size: 13px; color: #9FB0C3"}, r.email, " · ", r.contact, " · ", r.inst, " · ", r.date)), " ", __h("button", {"type": "button", "class": "copybtn", "onclick": r.approve, "style": "border-color: var(--ok)"}, "Aprobar y crear código"), " ", __h("button", {"type": "button", "class": "copybtn", "onclick": r.reject}, "Rechazar"))]; }), " ", __h("h3", {"style": "margin: 0; font-size: 21px; font-weight: 600; line-height: 1.2; margin-top: 8px"}, "Vendedores"), " ", (v.adSellers || []).map(function (v, $index) { return [__h("div", {"class": "listrow"}, __h("span", {"style": "min-width: 0; flex: 1; display: flex; flex-direction: column; gap: 2px"}, __h("strong", {"style": "font-size: 15px; font-weight: 600"}, v.name, " ", __h("span", {"style": "font-family: 'IBM Plex Mono', ui-monospace, Menlo, monospace; font-weight: 400; color: #B39DFA"}, v.code)), __h("span", {"style": "font-size: 13px; color: #9FB0C3"}, v.email, " · ", v.contact, " · ", v.approved, " aprobadas, ", v.pending, " por aprobar · Créditos: ", v.balance)), " ", __h("span", {"class": "pill", "style": ("color: " + String(v.stateColor == null ? "" : v.stateColor) + "; border-color: " + String(v.stateColor == null ? "" : v.stateColor))}, v.stateTxt), " ", __h("button", {"type": "button", "class": "copybtn", "onclick": v.toggle}, v.toggleTxt))]; })), " ", __h("div", {"style": ("display: " + String(v.tSales == null ? "" : v.tSales) + "; flex-direction: column; gap: 14px")}, __h("h3", {"style": "margin: 0; font-size: 21px; font-weight: 600; line-height: 1.2"}, "Créditos por compras con código de vendedor"), " ", __h("p", {"style": "margin: 0; font-size: 14px; color: #9FB0C3"}, "Aprueba el crédito cuando confirmes el pago del pedido. Solo las compras aprobadas suman créditos."), " ", (v.adSalesEmpty ? [__h("p", {"style": "margin: 0; font-size: 15px; color: #9FB0C3"}, "Aún no hay compras con códigos de vendedor.")] : null), " ", (v.adSales || []).map(function (x, $index) { return [__h("div", {"class": "listrow"}, __h("span", {"style": "min-width: 0; flex: 1; display: flex; flex-direction: column; gap: 2px"}, __h("strong", {"style": "font-family: 'IBM Plex Mono', ui-monospace, Menlo, monospace; font-size: 15px; font-weight: 500"}, x.order), __h("span", {"style": "font-size: 13px; color: #9FB0C3"}, x.date, " · ", x.code, " · ", x.seller, " · Total ", x.total)), " ", __h("span", {"class": "pill", "style": ("color: " + String(x.stateColor == null ? "" : x.stateColor) + "; border-color: " + String(x.stateColor == null ? "" : x.stateColor))}, x.stateTxt), " ", (x.pend ? [__h("button", {"type": "button", "class": "copybtn", "onclick": x.approve, "style": "border-color: var(--ok)"}, "Aprobar crédito"), " ", __h("button", {"type": "button", "class": "copybtn", "onclick": x.reject}, "Rechazar")] : null))]; })), " ", __h("div", {"style": ("display: " + String(v.tReds == null ? "" : v.tReds) + "; flex-direction: column; gap: 14px")}, __h("h3", {"style": "margin: 0; font-size: 21px; font-weight: 600; line-height: 1.2"}, "Canjes de créditos"), " ", (v.adRedsEmpty ? [__h("p", {"style": "margin: 0; font-size: 15px; color: #9FB0C3"}, "Aún no hay canjes.")] : null), " ", (v.adReds || []).map(function (x, $index) { return [__h("div", {"class": "listrow"}, __h("span", {"style": "min-width: 0; flex: 1; display: flex; flex-direction: column; gap: 2px"}, __h("strong", {"style": "font-size: 15px; font-weight: 600"}, x.name), __h("span", {"style": "font-size: 13px; color: #9FB0C3"}, x.seller, " · ", x.date, " · ", x.cost, " en créditos")), " ", __h("span", {"class": "pill", "style": ("color: " + String(x.stateColor == null ? "" : x.stateColor) + "; border-color: " + String(x.stateColor == null ? "" : x.stateColor))}, x.stateTxt), " ", (x.canAdvance ? [__h("button", {"type": "button", "class": "copybtn", "onclick": x.advance}, x.advanceTxt)] : null))]; })), " ", __h("div", {"style": ("display: " + String(v.tVend == null ? "" : v.tVend) + "; flex-direction: column; gap: 16px")}, __h("div", {"style": "display: flex; flex-wrap: wrap; justify-content: space-between; align-items: flex-end; gap: 12px"}, __h("div", {"style": "display: flex; flex-direction: column; gap: 6px"}, __h("h3", {"style": "margin: 0; font-size: 21px; font-weight: 600; line-height: 1.2"}, "Vendedores y rangos"), __h("p", {"style": "margin: 0; font-size: 14px; color: #9FB0C3"}, "Suben de rango con el total de cada pedido enviado («Programa enviado») que usó su código. Con «Rango mínimo» lo empiezas en el rango que elijas y desde ahí sigue subiendo. El vendedor solo ve su insignia.")), " ", __h("button", {"type": "button", "class": "btn btn-ghost", "onclick": v.adVendLoad, "style": "min-height: 44px"}, v.adVendTxt)), " ", (v.adVendEmpty ? [__h("p", {"class": "emptybox"}, "Todavía no hay códigos de tipo Vendedor en tu hoja (pestaña Códigos).")] : null), " ", (v.adVendHas ? [(v.adVendRows || []).map(function (v, $index) { return [__h("article", {"class": "vendrow"}, __h("span", {"class": "rankbadge small", "aria-hidden": "true"}, v.badge), " ", __h("div", {"style": "min-width: 0; display: flex; flex-direction: column; gap: 3px; flex: 1 1 200px"}, __h("strong", {"style": "font-size: 16px"}, v.name, " ", __h("span", {"style": "font-family: 'IBM Plex Mono', ui-monospace, Menlo, monospace; font-size: 13px; color: #9FB0C3"}, v.code)), " ", __h("span", {"style": "font-size: 13px; color: #9FB0C3"}, v.rank, " · ", v.state, " · ", v.mail)), " ", __h("div", {"class": "vendstat"}, __h("span", {"class": "vlabel"}, "Vendido (total de pedidos)"), __h("strong", null, v.sales), __h("span", null, v.progs)), " ", __h("div", {"class": "vendstat"}, __h("span", {"class": "vlabel"}, "Créditos"), __h("strong", null, v.credits), __h("span", null, "= ", v.creditsSoles)), " ", (v.hasMoney ? [__h("div", {"class": "vendstat"}, __h("span", {"class": "vlabel", "style": "color: #F2C879"}, "Dinero Ultra VIP"), __h("strong", {"style": "color: #F2C879"}, v.money))] : null), " ", __h("div", {"style": "display: flex; flex-direction: column; gap: 4px; min-width: 190px"}, __h("label", {"for": v.minId, "class": "vlabel"}, "Rango mínimo"), __h("select", {"class": "fld", "id": v.minId, "onchange": v.setMin, "style": "min-height: 40px; padding: 6px 10px; font-size: 14px"}, (v.opts || []).map(function (o, $index) { return [__h("option", {"value": o.v, "selected": o.sel}, o.t)]; }))))]; })] : null)), " ", __h("div", {"style": ("display: " + String(v.tPrices == null ? "" : v.tPrices) + "; flex-direction: column; gap: 16px; max-width: 760px")}, __h("h3", {"style": "margin: 0; font-size: 21px; font-weight: 600; line-height: 1.2"}, "Precios y ofertas"), " ", __h("p", {"style": "margin: 0; font-size: 14px; color: #9FB0C3"}, "Escribe el precio normal y, si quieres, un precio de oferta menor. Con oferta, la tienda muestra el precio normal tachado. Deja la oferta vacía para quitarla."), " ", __h("div", {"class": "pricegrid"}, __h("span", {"class": "vlabel"}, "Programa o pack"), __h("span", {"class": "vlabel"}, "Precio (S/)"), __h("span", {"class": "vlabel"}, "Oferta (S/)"), " ", (v.adPriceRows || []).map(function (r, $index) { return [__h("span", {"style": "font-size: 15px; color: #E3EAF2"}, r.name, " ", __h("span", {"style": "font-family: 'IBM Plex Mono', ui-monospace, Menlo, monospace; font-size: 12px; color: #9FB0C3"}, r.code)), " ", __h("input", {"class": "fld", "id": r.pid, "type": "text", "inputmode": "decimal", "autocomplete": "off", "aria-label": ("Precio de " + String(r.name == null ? "" : r.name)), "style": "font-family: 'IBM Plex Mono', ui-monospace, Menlo, monospace"}), " ", __h("input", {"class": "fld", "id": r.oid, "type": "text", "inputmode": "decimal", "autocomplete": "off", "placeholder": "Sin oferta", "aria-label": ("Oferta de " + String(r.name == null ? "" : r.name)), "style": "font-family: 'IBM Plex Mono', ui-monospace, Menlo, monospace"})]; })), " ", __h("div", null, __h("button", {"type": "button", "class": "btn btn-primary", "onclick": v.adPricesSave}, v.adPricesTxt))), " ", __h("div", {"style": ("display: " + String(v.tSettings == null ? "" : v.tSettings) + "; flex-direction: column; gap: 16px; max-width: 640px")}, (v.adSheetsOn ? [__h("h3", {"style": "margin: 0; font-size: 21px; font-weight: 600; line-height: 1.2"}, "Descuento y rangos de vendedor"), " ", __h("p", {"style": "margin: 0; font-size: 14px; color: #9FB0C3"}, "Se guardan en tu hoja (pestaña Ajustes). Los vendedores inician en Cobre 🥉 y suben a Plata 🥈, Oro 🥇, Diamante 💎 y Ultra VIP 👑 con el total de los pedidos que usaron su código. Para empezar a alguien en otro rango, usa «Rango mínimo» en la pestaña Vendedores."), " ", __h("div", {"class": "ajgrid"}, (v.adAjFields || []).map(function (f, $index) { return [__h("div", {"style": "display: flex; flex-direction: column; gap: 6px"}, __h("label", {"for": f.id, "style": "font-size: 14px; font-weight: 500; color: #C9D5E2"}, f.label), " ", __h("input", {"class": "fld", "id": f.id, "type": "text", "inputmode": "decimal", "autocomplete": "off", "style": "font-family: 'IBM Plex Mono', ui-monospace, Menlo, monospace"}))]; })), " ", __h("div", null, __h("button", {"type": "button", "class": "btn btn-primary", "onclick": v.adAjSave}, v.adAjTxt)), " ", __h("h3", {"style": "margin: 0; font-size: 21px; font-weight: 600; line-height: 1.2; margin-top: 12px"}, "Conexión")] : null), " ", (v.adSheetsOff ? [__h("h3", {"style": "margin: 0; font-size: 21px; font-weight: 600; line-height: 1.2"}, "Reglas del programa"), " ", __h("h3", {"style": "margin: 0; font-size: 21px; font-weight: 600; line-height: 1.2"}, "Reglas del programa"), " ", __h("div", {"style": "display: flex; flex-direction: column; gap: 6px"}, __h("label", {"for": "ix-ad-credit", "style": "font-size: 14px; font-weight: 500; color: #C9D5E2"}, "Créditos por cada compra aprobada (en S/ de la tienda)"), " ", __h("input", {"class": "fld", "id": "ix-ad-credit", "type": "text", "inputmode": "decimal", "autocomplete": "off", "placeholder": "Vacío hasta que lo definas", "style": "font-family: 'IBM Plex Mono', ui-monospace, Menlo, monospace"}), " ", __h("span", {"style": "font-size: 13px; color: #9FB0C3"}, "Los créditos se cuentan en soles de la tienda y un programa se canjea por su precio. Si lo dejas vacío, el canje queda deshabilitado."))] : null), " ", __h("div", {"style": "display: flex; flex-direction: column; gap: 6px"}, __h("label", {"for": "ix-ad-url", "style": "font-size: 14px; font-weight: 500; color: #C9D5E2"}, "Enlace de la tienda (para el mensaje de los vendedores)"), " ", __h("input", {"class": "fld", "id": "ix-ad-url", "type": "url", "autocomplete": "off", "placeholder": "https://..."})), " ", __h("div", {"style": "display: flex; flex-direction: column; gap: 6px"}, __h("label", {"for": "ix-ad-key", "style": "font-size: 14px; font-weight: 500; color: #C9D5E2"}, "Clave de administración para leer las métricas"), " ", __h("input", {"class": "fld", "id": "ix-ad-key", "type": "password", "autocomplete": "off", "placeholder": "La misma que pusiste en el script de la hoja", "style": "font-family: 'IBM Plex Mono', ui-monospace, Menlo, monospace"}), " ", __h("span", {"style": "font-size: 13px; color: #9FB0C3"}, "Se guarda solo en este navegador. Con la URL de la hoja conectada, el panel muestra las métricas de todos los visitantes.")), " ", __h("div", {"style": "display: flex; flex-wrap: wrap; gap: 12px"}, __h("button", {"type": "button", "class": "btn btn-primary", "onclick": v.adSave}, "Guardar ajustes"), " ", __h("button", {"type": "button", "class": "btn btn-ghost", "onclick": v.adReset}, "Restablecer datos de prueba")))))] : null)), " ", __h("div", {"class": "sheet", "role": "dialog", "aria-modal": "true", "aria-labelledby": "ix-pol-title", "style": ("display: " + String(v.policyDisp == null ? "" : v.policyDisp) + "; position: fixed; top: 20px; left: 0; right: 0; z-index: 110; margin: 0 auto; width: min(760px, calc(100% - 24px)); max-height: min(calc(100vh - 40px), 920px); overflow-y: auto; box-sizing: border-box; background: radial-gradient(700px 360px at 100% 0%, rgba(124, 92, 255, .14), rgba(0, 0, 0, 0) 65%), #0E141B; border: 1px solid #2A3A4D; border-radius: 14px; box-shadow: 0 40px 100px rgba(0, 0, 0, .6)")}, __h("div", {"style": "position: sticky; top: 0; z-index: 2; display: flex; align-items: center; justify-content: space-between; gap: 12px; padding: 14px 20px; background: rgba(14, 20, 27, .95); -webkit-backdrop-filter: blur(8px); backdrop-filter: blur(8px); border-bottom: 1px solid #1E2A38"}, __h("h2", {"id": "ix-pol-title", "style": "margin: 0; font-family: 'IBM Plex Sans Condensed', 'Arial Narrow', sans-serif; font-weight: 700; font-size: 28px; line-height: 1"}, "Política de reembolsos"), " ", __h("button", {"type": "button", "class": "xbtn", "onclick": v.closePolicy, "aria-label": "Cerrar política de reembolsos"}, "×")), " ", __h("div", {"class": "policy", "style": "padding: clamp(20px, 3vw, 32px); display: flex; flex-direction: column; gap: 16px"}, __h("p", null, "Los programas son productos digitales de acceso inmediato. Una vez enviados al correo del comprador, no se aceptan devoluciones por cambio de opinión o por no haber revisado la descripción del programa antes de la compra."), " ", __h("p", null, "Sin embargo, sí se acepta reembolso, reposición o corrección del programa cuando:"), " ", __h("ul", {"class": "dots ok", "style": "--c: #3DE0B8; font-size: 16px; color: #C9D5E2"}, __h("li", null, "El archivo no se puede descargar o instalar por un error atribuible a la plataforma."), " ", __h("li", null, "El programa presenta un defecto que impide su uso normal."), " ", __h("li", null, "El programa no corresponde a lo descrito en la ficha de producto."), " ", __h("li", null, "Se realizó un pago duplicado por error."), " ", __h("li", null, "El comprador recibió un programa distinto al que adquirió.")), " ", __h("p", null, "Para solicitar soporte o reportar un problema, el comprador debe escribir al correo de soporte dentro de los 7 días posteriores a la compra, indicando su número de pedido, correo registrado y una descripción del problema."), " ", __h("p", null, "Las solicitudes serán revisadas caso por caso. Si corresponde, se realizará la corrección, reposición del programa o reembolso del monto pagado."), " ", __h("p", null, "El reembolso se realizará por el mismo medio de pago utilizado en la compra, sujeto a los tiempos del banco o de la billetera correspondiente."), " ", __h("div", {"style": "display: flex; flex-direction: column; gap: 6px; margin-top: 4px; padding: 16px; border-radius: 10px; border: 1px solid #223041; background: #101720"}, __h("span", {"class": "vlabel", "style": "color: #9D86FF"}, "Correo de soporte"), " ", __h("a", {"href": "mailto:elvissosa2303@gmail.com", "style": "font-family: 'IBM Plex Mono', ui-monospace, Menlo, monospace; font-size: 17px; padding: 6px 0; align-self: flex-start"}, "elvissosa2303@gmail.com"), " ", __h("span", {"style": "font-size: 14px; color: #9FB0C3"}, "También puedes escribir al ", __h("a", {"href": "https://wa.me/51944542116"}, "WhatsApp +51 944 542 116"), ".")), " ", __h("button", {"type": "button", "class": "btn btn-ghost", "onclick": v.closePolicy, "style": "align-self: flex-start"}, "Entendido"))), " ", __h("div", {"class": "sheet", "role": "dialog", "aria-modal": "true", "aria-label": "Estado de mi pedido", "style": ("display: " + String(v.trackDisp == null ? "" : v.trackDisp) + "; position: fixed; top: 20px; left: 0; right: 0; z-index: 105; margin: 0 auto; width: min(760px, calc(100% - 24px)); max-height: min(calc(100vh - 40px), 920px); overflow-y: auto; box-sizing: border-box; background: radial-gradient(700px 360px at 100% 0%, rgba(124, 92, 255, .12), rgba(0, 0, 0, 0) 65%), #0E141B; border: 1px solid #2A3A4D; border-radius: 14px; box-shadow: 0 40px 100px rgba(0, 0, 0, .6)")}, __h("div", {"style": "position: sticky; top: 0; z-index: 2; display: flex; align-items: center; justify-content: space-between; gap: 12px; padding: 14px 20px; background: rgba(14, 20, 27, .95); -webkit-backdrop-filter: blur(8px); backdrop-filter: blur(8px); border-bottom: 1px solid #1E2A38"}, __h("h2", {"style": "margin: 0; font-family: 'IBM Plex Sans Condensed', 'Arial Narrow', sans-serif; font-weight: 700; font-size: 28px; line-height: 1"}, "Estado de mi pedido"), " ", __h("button", {"type": "button", "class": "xbtn", "onclick": v.closeTrack, "aria-label": "Cerrar estado del pedido"}, "×")), " ", __h("div", {"style": "padding: clamp(18px, 3vw, 30px); display: flex; flex-direction: column; gap: 18px"}, __h("div", {"style": "display: grid; grid-template-columns: repeat(auto-fit, minmax(min(220px, 100%), 1fr)); gap: 12px; align-items: end"}, __h("div", {"style": "display: flex; flex-direction: column; gap: 6px"}, __h("label", {"for": "ix-tr-num", "style": "font-size: 14px; font-weight: 500; color: #C9D5E2"}, "Número de pedido"), " ", __h("input", {"class": "fld", "id": "ix-tr-num", "type": "text", "autocomplete": "off", "placeholder": "INX-...", "style": "font-family: 'IBM Plex Mono', ui-monospace, Menlo, monospace; text-transform: uppercase"})), " ", __h("div", {"style": "display: flex; flex-direction: column; gap: 6px"}, __h("label", {"for": "ix-tr-mail", "style": "font-size: 14px; font-weight: 500; color: #C9D5E2"}, "Correo de la compra"), " ", __h("input", {"class": "fld", "id": "ix-tr-mail", "type": "email", "autocomplete": "email", "placeholder": "tu@correo.com"})), " ", __h("button", {"type": "button", "class": "btn btn-primary", "onclick": v.trLookup}, v.trLookupTxt)), " ", __h("p", {"role": "alert", "style": ("display: " + String(v.trErrDisp == null ? "" : v.trErrDisp) + "; margin: 0; font-size: 15px; color: #F2A65A")}, v.trErr), " ", (v.trHas ? [__h("div", {"style": "display: flex; flex-direction: column; gap: 16px; padding: 18px; border-radius: 12px; border: 1px solid #223041; background: #101720"}, __h("div", {"style": "display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 10px"}, __h("span", {"style": "font-size: 15px; color: #9FB0C3"}, "Pedido ", __h("strong", {"style": "font-family: 'IBM Plex Mono', ui-monospace, Menlo, monospace; color: #F5F7FA"}, v.trNum), " · ", v.trDate), " ", __h("span", {"class": "price", "style": "font-size: 22px"}, v.trTotal)), " ", __h("p", {"style": ("margin: 0; font-size: 19px; font-weight: 600; color: " + String(v.trColor == null ? "" : v.trColor))}, v.trState), " ", (v.trWaiting ? [__h("p", {"style": "margin: 0; font-size: 15px; color: #C9D5E2"}, "Recibimos tu comprobante. Estamos verificando tu pago. Recibirás tu programa y las instrucciones en tu correo electrónico cuando se confirme el pago.")] : null), " ", (v.trVerified ? [__h("p", {"style": "margin: 0; font-size: 15px; color: #C9D5E2"}, "Pago verificado. Tu programa será enviado a tu correo.")] : null), " ", (v.trSentOk ? [__h("p", {"style": "margin: 0; font-size: 15px; color: #C9D5E2"}, "Tu programa fue enviado a ", v.trMail, " el ", v.trDelivered, ". Revisa también la carpeta de spam.")] : null), " ", __h("div", {"style": "display: flex; flex-direction: column; gap: 4px"}, __h("span", {"class": "vlabel"}, "Programas"), " ", (v.trItems || []).map(function (i, $index) { return [__h("span", {"style": "font-size: 15px; color: #E3EAF2"}, i.name, " ", __h("span", {"style": "font-family: 'IBM Plex Mono', ui-monospace, Menlo, monospace; font-size: 12px; color: #9FB0C3"}, i.code))]; })), " ", (v.trRejected ? [__h("div", {"style": "display: flex; flex-direction: column; gap: 14px; padding: 16px; border-radius: 10px; border: 1px solid #F2A65A; background: rgba(242, 166, 90, .06)"}, __h("p", {"style": "margin: 0; font-size: 15px; color: #F2A65A"}, "No pudimos validar tu comprobante. Motivo: ", v.trMotivo), " ", __h("p", {"style": "margin: 0; font-size: 15px; color: #C9D5E2"}, "Sube uno nuevo o cambia el método de pago."), " ", __h("div", {"role": "group", "aria-label": "Método de pago", "style": "display: grid; grid-template-columns: repeat(auto-fit, minmax(min(150px, 100%), 1fr)); gap: 10px"}, (v.trMethodBtns || []).map(function (b, $index) { return [__h("button", {"type": "button", "class": "seg", "aria-pressed": b.pressed, "onclick": b.pick, "style": ("background: " + String(b.bg == null ? "" : b.bg) + "; color: " + String(b.fg == null ? "" : b.fg) + "; border: 1px solid " + String(b.bd == null ? "" : b.bd))}, b.label)]; })), " ", (v.trPayInfoOn ? [__h("p", {"style": "margin: 0; font-size: 14px; color: #C9D5E2"}, v.trPayInfo)] : null), " ", __h("p", {"style": "margin: 0; font-size: 15px; font-weight: 600"}, "Envía el número de operación o captura de tu pago"), " ", __h("div", {"style": "display: flex; flex-direction: column; gap: 6px"}, __h("label", {"for": "ix-tr-op", "style": "font-size: 14px; font-weight: 500; color: #C9D5E2"}, "Número de operación o código de aprobación"), " ", __h("input", {"class": "fld", "id": "ix-tr-op", "type": "text", "inputmode": "numeric", "autocomplete": "off", "style": "font-family: 'IBM Plex Mono', ui-monospace, Menlo, monospace"})), " ", __h("div", {"style": "display: flex; flex-direction: column; gap: 6px"}, __h("label", {"for": "ix-tr-proof", "style": "font-size: 14px; font-weight: 500; color: #C9D5E2"}, "Captura del comprobante"), " ", __h("input", {"class": "fld", "id": "ix-tr-proof", "type": "file", "accept": "image/*,.pdf", "onchange": v.onTrProof}), " ", __h("span", {"style": "font-size: 13px; color: #9FB0C3"}, v.trProofTxt)), " ", __h("button", {"type": "button", "class": "btn btn-primary", "onclick": v.trResubmit, "style": "align-self: flex-start"}, "Enviar nuevo comprobante"))] : null), " ", __h("p", {"role": "status", "style": ("display: " + String(v.trSentDisp == null ? "" : v.trSentDisp) + "; margin: 0; font-size: 15px; color: #3DE0B8")}, "Recibimos tu nuevo comprobante. Estamos verificando tu pago."))] : null), " ", __h("p", {"style": "margin: 0; font-size: 14px; color: #9FB0C3"}, "¿Dudas? Escribe a ", __h("a", {"href": "mailto:elvissosa2303@gmail.com"}, "elvissosa2303@gmail.com"), " o al ", __h("a", {"href": "https://wa.me/51944542116"}, "WhatsApp +51 944 542 116"), "."))), " ", __h("div", {"class": "sheet", "role": "dialog", "aria-modal": "true", "aria-labelledby": "ix-terms-title", "style": ("display: " + String(v.termsDisp == null ? "" : v.termsDisp) + "; position: fixed; top: 20px; left: 0; right: 0; z-index: 110; margin: 0 auto; width: min(820px, calc(100% - 24px)); max-height: min(calc(100vh - 40px), 940px); overflow-y: auto; box-sizing: border-box; background: radial-gradient(700px 360px at 100% 0%, rgba(124, 92, 255, .12), rgba(0, 0, 0, 0) 65%), #0E141B; border: 1px solid #2A3A4D; border-radius: 14px; box-shadow: 0 40px 100px rgba(0, 0, 0, .6)")}, __h("div", {"style": "position: sticky; top: 0; z-index: 2; display: flex; align-items: center; justify-content: space-between; gap: 12px; padding: 14px 20px; background: rgba(14, 20, 27, .95); -webkit-backdrop-filter: blur(8px); backdrop-filter: blur(8px); border-bottom: 1px solid #1E2A38"}, __h("h2", {"id": "ix-terms-title", "style": "margin: 0; font-family: 'IBM Plex Sans Condensed', 'Arial Narrow', sans-serif; font-weight: 700; font-size: 28px; line-height: 1"}, "Términos y condiciones"), " ", __h("button", {"type": "button", "class": "xbtn", "onclick": v.closeLegal, "aria-label": "Cerrar términos y condiciones"}, "×")), " ", __h("div", {"class": "policy legal", "style": "padding: clamp(20px, 3vw, 32px); display: flex; flex-direction: column; gap: 14px"}, __h("p", null, "Estos términos regulan la compra de programas en INGNEX (ingnex.online). Al realizar un pedido, aceptas estas condiciones."), " ", __h("h3", null, "1. Quiénes somos"), " ", __h("p", null, "INGNEX es operado por Elvis Arturo Sandoval Sosa, con domicilio en Perú. Correo: elvissosa2303@gmail.com. WhatsApp: +51 944 542 116."), " ", __h("h3", null, "2. Qué vendemos"), " ", __h("p", null, "Programas digitales para calculadoras HP Prime G1 y G2 y para HP Prime Virtual, que se entregan por correo electrónico junto con sus instrucciones de instalación. Los programas marcados como «Próximamente» no están a la venta."), " ", __h("p", null, "El programa se prepara a partir del modelo y del número de serie de la calculadora que registras en la compra. Revisa que esos datos sean correctos. Cada compra es una licencia personal para la calculadora cuyo número de serie registras."), " ", __h("h3", null, "3. Precios y pago"), " ", __h("p", null, "Los precios están en soles e incluyen los descuentos de packs y códigos que se muestran antes de pagar. Se puede usar un solo código de descuento por compra. El pago se hace por Yape, Plin o transferencia bancaria, y se verifica de forma manual. No aceptamos pagos con tarjeta."), " ", __h("h3", null, "4. Entrega"), " ", __h("p", null, "Una vez verificado el pago, enviamos al correo registrado los enlaces de descarga y las instrucciones. Cada enlace es personal, vence a los 7 días y se puede abrir hasta 5 veces. Si compraste un pack, recibes todos los programas incluidos. Si tu comprobante no se puede validar, te avisaremos para que envíes uno nuevo o cambies el método de pago."), " ", __h("h3", null, "5. Uso permitido"), " ", __h("p", null, "El programa es para tu uso personal. No está permitido copiarlo, revenderlo, publicarlo ni compartir los archivos o los enlaces de descarga con otras personas."), " ", __h("h3", null, "6. Programa de vendedores"), " ", __h("p", null, "Los códigos de descuento y de vendedor dan ", v.cpAmtTxt, " de descuento en un programa; cada programa admite un solo código. Los créditos del vendedor se suman solo cuando INGNEX confirma el pago de cada compra hecha con su código, y se canjean por programas de la tienda. INGNEX puede desactivar un código si se usa de forma indebida."), " ", __h("h3", null, "7. Reembolsos"), " ", __h("p", null, "Los reembolsos, reposiciones y correcciones se rigen por nuestra ", __h("button", {"type": "button", "class": "linkbtn", "onclick": v.openPolicy, "style": "padding: 2px 0"}, "Política de reembolsos"), "."), " ", __h("h3", null, "8. Responsabilidad"), " ", __h("p", null, "Los programas son herramientas de apoyo para el cálculo. Revisa los resultados antes de usarlos en trabajos, proyectos o exámenes. INGNEX no se responsabiliza por el uso que se dé a los resultados ni por el uso de los programas en situaciones donde no estén permitidos."), " ", __h("h3", null, "9. Reclamos"), " ", __h("p", null, "Si tienes un reclamo o una queja, escríbenos a ", __h("a", {"href": "mailto:elvissosa2303@gmail.com"}, "elvissosa2303@gmail.com"), " o al ", __h("a", {"href": "https://wa.me/51944542116"}, "WhatsApp +51 944 542 116"), " con tu número de pedido. Te responderemos por el mismo medio."), " ", __h("h3", null, "10. Cambios y ley aplicable"), " ", __h("p", null, "Podemos actualizar estos términos; la versión vigente es la publicada en esta página al momento de tu compra. Estos términos se rigen por las leyes de la República del Perú."), " ", __h("p", {"style": "color: #9FB0C3; font-size: 14px"}, "Última actualización: 18 de noviembre de 2026"))), " ", __h("div", {"class": "sheet", "role": "dialog", "aria-modal": "true", "aria-labelledby": "ix-priv-title", "style": ("display: " + String(v.privDisp == null ? "" : v.privDisp) + "; position: fixed; top: 20px; left: 0; right: 0; z-index: 110; margin: 0 auto; width: min(820px, calc(100% - 24px)); max-height: min(calc(100vh - 40px), 940px); overflow-y: auto; box-sizing: border-box; background: radial-gradient(700px 360px at 100% 0%, rgba(124, 92, 255, .12), rgba(0, 0, 0, 0) 65%), #0E141B; border: 1px solid #2A3A4D; border-radius: 14px; box-shadow: 0 40px 100px rgba(0, 0, 0, .6)")}, __h("div", {"style": "position: sticky; top: 0; z-index: 2; display: flex; align-items: center; justify-content: space-between; gap: 12px; padding: 14px 20px; background: rgba(14, 20, 27, .95); -webkit-backdrop-filter: blur(8px); backdrop-filter: blur(8px); border-bottom: 1px solid #1E2A38"}, __h("h2", {"id": "ix-priv-title", "style": "margin: 0; font-family: 'IBM Plex Sans Condensed', 'Arial Narrow', sans-serif; font-weight: 700; font-size: 28px; line-height: 1"}, "Política de privacidad"), " ", __h("button", {"type": "button", "class": "xbtn", "onclick": v.closeLegal, "aria-label": "Cerrar política de privacidad"}, "×")), " ", __h("div", {"class": "policy legal", "style": "padding: clamp(20px, 3vw, 32px); display: flex; flex-direction: column; gap: 14px"}, __h("p", null, "En INGNEX cuidamos tus datos personales y los usamos solo para lo que se explica aquí, de acuerdo con la Ley N.° 29733, Ley de Protección de Datos Personales del Perú."), " ", __h("h3", null, "1. Responsable"), " ", __h("p", null, "Elvis Arturo Sandoval Sosa. Correo: elvissosa2303@gmail.com."), " ", __h("h3", null, "2. Qué datos recogemos"), " ", __h("ul", {"class": "dots", "style": "--c: #9D86FF"}, __h("li", null, "Al comprar: nombre, correo, modelo y número de serie de tu calculadora, método de pago, número de operación y la captura del comprobante que decidas subir."), " ", __h("li", null, "Al escribirnos o pedir ser vendedor: nombre, correo, WhatsApp o Telegram, institución y tu mensaje."), " ", __h("li", null, "Al navegar: un registro anónimo de visitas y acciones en la tienda (por ejemplo, qué programas se ven), sin tu nombre ni tu correo.")), " ", __h("p", null, "No pedimos ni guardamos datos de tarjetas, claves de tu banco ni de tus billeteras."), " ", __h("h3", null, "3. Para qué los usamos"), " ", __h("p", null, "Para verificar tu pago, preparar y enviarte los programas, darte soporte y actualizaciones, gestionar el programa de vendedores, responder tus mensajes y mejorar la tienda con estadísticas anónimas. No vendemos tus datos ni los usamos para publicidad de terceros."), " ", __h("h3", null, "4. Dónde se guardan"), " ", __h("p", null, "En una hoja de cálculo y una carpeta de Google Drive bajo el control del responsable, y en el almacenamiento de tu propio navegador (ver punto 6). Las capturas de comprobantes son privadas y solo las ve el responsable."), " ", __h("h3", null, "5. Cuánto tiempo"), " ", __h("p", null, "Mientras sea necesario para atender tu pedido, el soporte, los reclamos y las obligaciones legales o contables que correspondan."), " ", __h("h3", null, "6. Almacenamiento local y cookies"), " ", __h("p", null, "La tienda no usa cookies de publicidad. Guarda en el almacenamiento local de tu navegador tu carrito, tus preferencias, que ya viste este aviso y un identificador anónimo para contar visitas. Puedes borrarlo cuando quieras desde la configuración de tu navegador; el carrito se vaciará."), " ", __h("h3", null, "7. Tus derechos"), " ", __h("p", null, "Puedes pedir acceder a tus datos, corregirlos, cancelarlos u oponerte a su uso escribiendo a elvissosa2303@gmail.com con el asunto «Datos personales». Responderemos dentro de los plazos de la ley."), " ", __h("h3", null, "8. Seguridad"), " ", __h("p", null, "Los enlaces de descarga son personales y vencen; el acceso a los pedidos está protegido con una clave de administración. Aun así, ningún sistema en internet es infalible: si detectamos un problema que afecte tus datos, te avisaremos."), " ", __h("h3", null, "9. Cambios"), " ", __h("p", null, "Si cambiamos esta política, publicaremos la nueva versión en esta página."), " ", __h("p", {"style": "color: #9FB0C3; font-size: 14px"}, "Última actualización: 18 de noviembre de 2026"))), " ", __h("div", {"class": "notice", "role": "region", "aria-label": "Aviso de almacenamiento", "style": ("display: " + String(v.noticeDisp == null ? "" : v.noticeDisp))}, __h("p", {"style": "margin: 0; flex: 1 1 320px; font-size: 14px; line-height: 1.5; color: #C9D5E2"}, "Usamos el almacenamiento local de tu navegador para guardar tu carrito y contar visitas de forma anónima. No usamos cookies de publicidad. ", __h("button", {"type": "button", "class": "linkbtn", "onclick": v.openPriv, "style": "padding: 2px 0; font-size: 14px"}, "Política de privacidad")), " ", __h("button", {"type": "button", "class": "btn btn-primary", "onclick": v.noticeOk, "style": "min-height: 44px; font-size: 15px"}, "Entendido")), " ", __h("div", {"class": "toast", "role": "status", "aria-live": "polite", "style": ("display: " + String(v.toastDisp == null ? "" : v.toastDisp) + "; position: fixed; left: 16px; right: 16px; bottom: 24px; z-index: 120; margin: 0 auto; width: fit-content; max-width: calc(100% - 32px); box-sizing: border-box; padding: 12px 18px; border-radius: 8px; background: #F5F7FA; color: #0B0F14; font-size: 15px; font-weight: 500; box-shadow: 0 16px 40px rgba(0, 0, 0, .5)")}, v.toastText)));
}

Component.prototype.render = function () { return view(this.renderVals()); };
var DEFAULTS = {"accent": "#0096D6", "resultado": "#3DE0B8", "espacial": "#7C5CFF", "animacionHero": true, "compatConfirmada": true, "tiendaAbierta": true, "sheetsUrl": ""};
var props = Object.assign({}, DEFAULTS, window.INGNEX_CONFIG || {});
render(__h(Component, props), document.getElementById('app'));
})();
