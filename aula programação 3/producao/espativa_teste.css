:root {
    --verde-1:#14532d;
      --verde-2:#19592F;
      --verde-3:#16a34a;
      --verde-4:#108F3C;
      --verde-claro:#bbf7d0;

      --cinza:#4b5563;
      --bg:#f5f7f6;
      --branco:#ffffff;
      --escuro:#142a0f;
}

html {
    scroll-behavior: smooth;
}

* { margin: 0; padding: 0; box-sizing: border-box; }
body { font-family: 'Segoe UI', Arial, sans-serif; background-color: var(--cor-fundo); color: var(--cor-texto); line-height: 1.6; }

/* --- NAVBAR RESPONSIVA --- */
.topnav {
    background-color: var(--verde-2);
    color: white;
    padding: 15px 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: sticky;
    top: 0;
    z-index: 1000;
    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}
.topnav .logo { font-weight: bold; font-size: 20px;}
.topnav a { color: white; text-decoration: none; padding: 15px; display: block; font-weight: 500; }
.topnav a:hover {color: #0bdb0f;}

.menu-toggle { background: none; border: none; color: white; font-size: 24px; cursor: pointer; }

.menu-links {
    display: none; 
    flex-direction: column;
    position: absolute;
    top: 100%; left: 0; width: 100%;
    background-color: var(--verde-2);
    list-style: none;
    box-shadow: 0 4px 10px rgba(0,0,0,0.15);
}
.menu-links.ativo { display: flex; } 

/* --- CARROSSEL --- */
.carrossel-container {
    position: relative; height: 400px; overflow: hidden; background-color: #1a1a1a; color: white;
    z-index: 1;
}
.carrossel-slide {
    position: absolute; top: 0; left: 0; width: 100%; height: 100%;
    display: flex; flex-direction: column; justify-content: center; align-items: center; text-align: center;
    opacity: 0; transition: opacity 0.5s ease-in-out; padding: 20px;
}
.carrossel-slide h1 { font-size: 32px; margin-bottom: 10px; }
.carrossel-slide.ativa { opacity: 1; z-index: 2; }
.btn-carrossel {
    position: absolute; top: 50%; transform: translateY(-50%);
    background: rgba(0,0,0,0.4); color: white; border: none; padding: 15px; cursor: pointer; z-index: 3; font-size: 18px;
}
.btn-carrossel:hover { background: rgba(0,0,0,0.7); }
.btn-carrossel.prev { left: 10px; }
.btn-carrossel.next { right: 10px; }

/* --- SEÇÕES DA PÁGINA --- */
.conteudo-principal { width: 100%; }
.secao-pagina { padding: 60px 20px; max-width: 1200px; margin: 0 auto; text-align: center; }
.secao-fundo-claro { background-color: var(--cor-fundo-alternativo); max-width: 100%; border-top: 1px solid #e9ecef; border-bottom: 1px solid #e9ecef; }
.secao-pagina h2 { font-size: 28px; margin-bottom: 30px; color: var(--cor-primaria); }
.subtitulo-secao { margin-top: -20px; margin-bottom: 30px; color: #6c757d; }

/* --- DEPOIMENTOS & CARDS --- */
.grid-cards { display: flex; flex-direction: column; gap: 20px; }
.card { background: var(--cor-fundo-alternativo); padding: 25px; border-radius: var(--borda-raio); box-shadow: 0 4px 6px rgba(0,0,0,0.05); text-align: left; border: 1px solid #e9ecef; }
.card h3 { margin-bottom: 10px; color: var(--cor-secundaria); }

section{
      padding:100px 20px;
    }

    .container{
      max-width:1200px;
      margin:auto;
    }

    .titulo-section{
      text-align:center;
      margin-bottom:65px;
    }

    .titulo-section h2{
      font-size:44px;
      color:var(--verde-1);
      margin-bottom:15px;
    }

    .titulo-section h2::after{
      content:'';
      display:block;
      width:80px;
      height:4px;
      background:var( --cor-secundaria);
      border-radius:20px;
      margin:15px auto 0;
    }
.estatisticas{
      background:linear-gradient(135deg,var(--cor-texto),var(--cor-primaria));
      color:white;
    }
    
.stats-container{
      display:flex;
      flex-wrap:wrap;
      justify-content:center;
      gap:35px;
    }
     .stat{
      flex:1 1 240px;
      max-width:300px;

      background:rgba(255,255,255,0.08);
      backdrop-filter:blur(8px);

      padding:40px 30px;

      border-radius:25px;
      text-align:center;

      transition:var(--transition);
    }

    .stat:hover{
      transform:translateY(-8px);
    }

    .stat h3{
      font-size:58px;
      color:var(--verde-claro);
      margin-bottom:10px;
    }

/* --- FORMULÁRIO DE CONTATO --- */
.container-formulario { max-width: 600px; margin: 0 auto; text-align: left; }
.form-cta { display: flex; flex-direction: column; gap: 15px; margin-top: 20px; }
.grupo-campo { display: flex; flex-direction: column; gap: 5px; }
.grupo-campo label { font-weight: 600; font-size: 14px; }
.grupo-campo input, .grupo-campo textarea {
    padding: 12px; border: 1px solid #ced4da; border-radius: 4px; font-size: 16px; font-family: inherit; transition: border-color 0.3s, box-shadow 0.3s;
}
.grupo-campo input:focus, .grupo-campo textarea:focus {
    border-color: var(--cor-primaria); outline: none; box-shadow: 0 0 0 3px rgba(0, 86, 179, 0.25);
}
.btn-enviar {
    background-color: #0c700d; color: white; border: 3px; padding: 15px;
    border-radius: 4px; font-size: 18px; font-weight: bold; cursor: pointer; transition: background-color 0.3s; margin-top: 10px;
}
.btn-enviar:hover { background-color: #218838; }
.feedback-sucesso { display: none; margin-top: 15px; padding: 15px; background-color: #d4edda; color: #155724; border-radius: 4px; font-weight: bold; }

/* --- MAPA E LOCALIZAÇÃO --- */
.layout-localizacao { display: flex; flex-direction: column; gap: 30px; }
.mapa-container { width: 100%; border-radius: var(--borda-raio); overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.1); height: 350px; }
.mapa-container iframe { width: 100%; height: 100%; border: 0; }
.gps-container { background: var(--cor-fundo-alternativo); padding: 25px; border-radius: var(--borda-raio); box-shadow: 0 4px 6px rgba(0,0,0,0.05); text-align: left; }
.btn-acao { background-color: var(--cor-primaria); color: white; border: none; padding: 12px 20px; border-radius: 4px; margin-top: 15px; cursor: pointer; font-weight: 600; }
.btn-acao:hover { background-color: var(--cor-secundaria); }
#resultado-gps { margin-top: 15px; font-size: 14px; color: #495057; }

/* --- FOOTER & TOP PAGE --- */
.rodape { background-color: #14532d; color: #f8f9fa; text-align: center; padding: 30px 20px; }
.rodape p { font-size: 14px; color: #adb5bd; }

#btnVoltarTopo {
    display: none; position: fixed; bottom: 20px; right: 20px; z-index: 999; font-size: 20px;
    border: none; background-color: var(--cor-primaria); color: white; cursor: pointer;
    padding: 12px 15px; border-radius: 50%; box-shadow: 0 4px 8px rgba(0,0,0,0.2); transition: background-color 0.3s;
}
#btnVoltarTopo:hover { background-color: var(--cor-secundaria); }

/* =========================================
   MEDIA QUERIES (TABLET / DESKTOP)
   ========================================= */
@media (min-width: 768px) {
    .menu-toggle { display: none; }
    .menu-links { display: flex; flex-direction: row; position: static; width: auto; background: transparent; box-shadow: none; }
    .carrossel-slide h1 { font-size: 48px; }
    .grid-cards { display: grid; grid-template-columns: repeat(3, 1fr); gap: 25px; }
    .layout-localizacao { flex-direction: row; align-items: stretch; text-align: left; }
    .mapa-container { flex: 2; height: auto; min-height: 400px; }
    .gps-container { flex: 1; display: flex; flex-direction: column; justify-content: center; }
}
