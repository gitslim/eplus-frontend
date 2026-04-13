<script>
</script>

<svelte:head>
    <title>Спасибо за заявку! | ООО Энергия Плюс</title>
</svelte:head>

<div id="ep-thanks-page">
    <section class="thanks-hero">
        <div class="site-container">
            <div class="thanks-content">
                <div class="icon-wrap">
                    <svg class="check-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="12" cy="12" r="11" stroke="#f07030" stroke-width="2"/>
                        <path d="M7 12.5L10.5 16L17 8" stroke="#f07030" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
                
                <h1 class="thanks-title">Спасибо за Вашу заявку!</h1>
                <p class="thanks-subtitle">
                    Ваши данные успешно отправлены. Наши специалисты свяжутся с Вами в самое ближайшее время для уточнения деталей.
                </p>
                
                <div class="thanks-btn-wrap">
                    <a href="/" class="btn-home">Вернуться на главную</a>
                </div>
            </div>
        </div>
    </section>
</div>

<style>
    #ep-thanks-page *, #ep-thanks-page *::before, #ep-thanks-page *::after {
        box-sizing: border-box;
    }
    #ep-thanks-page {
        font-family: inherit; /* Inherits Montserrat from root */
        background: #fcfcfc;
        min-height: calc(100vh - 3.25rem - 200px); 
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 50px 0;
    }
    
    .site-container {
        max-width: 1360px;
        width: 100%;
        margin: 0 auto;
        padding: 0 clamp(20px, 5vw, 40px);
    }
    
    .thanks-hero {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    
    .thanks-content {
        background: #ffffff;
        padding: 50px 30px;
        border-radius: 12px;
        box-shadow: 0 10px 40px rgba(0, 0, 0, 0.05);
        text-align: center;
        display: flex;
        flex-direction: column;
        align-items: center;
        border: 1px solid rgba(240, 112, 48, 0.15);
        max-width: 800px;
        margin: 0 auto;
    }
    
    .icon-wrap {
        width: 80px;
        height: 80px;
        margin-bottom: 25px;
    }
    
    .check-icon {
        width: 100%;
        height: 100%;
        animation: scaleIn 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
    }

    @keyframes scaleIn {
        0% { transform: scale(0); opacity: 0; }
        100% { transform: scale(1); opacity: 1; }
    }
    
    .thanks-title {
        font-family: "Montserrat", sans-serif;
        font-size: clamp(24px, 4vw, 36px);
        font-weight: 800;
        color: #111;
        margin-bottom: 16px;
        line-height: 1.2;
    }
    
    .thanks-subtitle {
        font-family: "Montserrat", sans-serif;
        font-size: clamp(15px, 2vw, 17px);
        color: #555;
        max-width: 600px;
        line-height: 1.6;
        margin-bottom: 35px;
    }
    
    .thanks-btn-wrap {
        display: flex;
        justify-content: center;
    }
    
    .btn-home {
        background-color: #f07030;
        color: #ffffff;
        font-size: 15px;
        font-weight: 700;
        text-decoration: none;
        padding: 15px 35px;
        border-radius: 8px;
        transition: all 0.3s ease;
        text-transform: uppercase;
        letter-spacing: 0.5px;
        box-shadow: 0 4px 15px rgba(240, 112, 48, 0.3);
    }
    
    .btn-home:hover {
        background-color: #d35d2d;
        transform: translateY(-2px);
        box-shadow: 0 8px 20px rgba(240, 112, 48, 0.4);
        color: #ffffff;
    }
</style>
