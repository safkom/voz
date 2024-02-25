<section class = "text-section">
            <h2 class = "konfigurator">Konfigurator</h2>
            <div class="cenik">
                <div id = "cenik">
                <div class = "opozorilo-izbira" id = "opozorilo-izbira"  style = "display: none;"></div>
                <div class="option-section">
                    <h2>Velikost</h2>
                    <div class="option-buttons" id="size-options">
                    </div>
                </div>
                
                <div class="option-section">
                    <h2>Rezkar</h2>
                    <div class="option-buttons" id="drilling-options">
                    </div>
                </div>
                
                <div class="option-section">
                    <h2>Laser</h2>
                    <div class="option-buttons" id="laser-options">
                    </div>
                </div>
                
                <div class="option-section">
                    <h2>Dodatki</h2>
                    <div class="option-buttons" id="addon-options">
                    </div>
                </div>
                
                <div id="total-price">Skupna cena: 0€</div>
                <br>
                <br>
                <button class="submit-button" id = "povprasevanje">Pošlji povpraševanje</button>
            </div>
            <div class = "povprasevanje-form" id = "povprasevanje-form" style = "display: none;">
            <div class = "modern-form">
            <label for="ime">Ime in priimek:</label>
                <input type="text" id="ime" name="ime" required><br>

                <label for="email">Email:</label>
                <input type="email" id="email" name="email" required><br>

                <label for="telefon">Telefon:</label>
                <input type="text" id="telefon" name="telefon"><br>

                <label for="opombe">Opombe:</label>
                <textarea id="opombe" name="opombe" rows="4" cols="50"></textarea><br><br>

                <div class="button-container">
                    <button class="submit-button-form" name="povprasevanje">Pošlji</button>
                    <button class="back-button" id="nazaj">Nazaj</button>
                </div>
            </div>
            </div>
            <div class="success" style="display: none; background-color: #dff0d8; border: 1px solid #c3e6cb; border-radius: .25rem; padding: 20px; margin-top: 20px;">
                <img src="img/checkmark.png" alt="Success" class="success-image" style="width: 200px; margin-bottom: 20px;">
                <h2 class="success-message" style="font-family: Arial, sans-serif; font-size: 24px; color: #155724; margin: 0;">Povpraševanje uspešno poslano!</h2>
            </div>
        </div>
            </div>  
</section>