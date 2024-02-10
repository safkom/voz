<section class = "text-section">
            <h2 class = "konfigurator">Konfigurator</h2>
            <div class="cenik">
                <div class="option-section">
                    <h2>Velikost</h2>
                    <div class="option-buttons" id="size-options">
                    <button class="option-button" data-group="size" data-price="1500" onclick="selectOption('size', this)">40x30cm (1500€)</button>
                    <button class="option-button" data-group="size" data-price="2000" onclick="selectOption('size', this)">60x40cm (2000€)</button>
                    <button class="option-button" data-group="size" data-price="2500" onclick="selectOption('size', this)">80x60cm (2500€)</button>
                    <button class="option-button" data-group="size" data-price="3000" onclick="selectOption('size', this)">100x70cm (3000€)</button>
                    <button class="option-button" data-group="size" data-price="3500" onclick="selectOption('size', this)">120x80cm (3500€)</button>
                    <button class="option-button" data-group="size" data-price="4000" onclick="selectOption('size', this)">150x100cm (4000€)</button>
                    <button class="option-button" data-group="size" data-price="4500" onclick="selectOption('size', this)">200x125cm (4500€)</button>
                    <button class="option-button" data-group="size" data-price="5000" onclick="selectOption('size', this)">220x140cm (5000€)</button>
                    <button class="option-button" data-group="size" data-price="5500" onclick="selectOption('size', this)">250x150cm (5500€)</button>
                    </div>
                </div>
                
                <div class="option-section">
                    <h2>Rezkar</h2>
                    <div class="option-buttons" id="drilling-options">
                    <button class="option-button" data-group="drilling" data-price="1000" onclick="selectOption('drilling', this)">Motor A (1000€)</button>
                    <button class="option-button" data-group="drilling" data-price="1200" onclick="selectOption('drilling', this)">Motor B (1200€)</button>
                    <button class="option-button" data-group="drilling" data-price="1500" onclick="selectOption('drilling', this)">Motor C (1500€)</button>
                    </div>
                </div>
                
                <div class="option-section">
                    <h2>Laser</h2>
                    <div class="option-buttons" id="laser-options">
                    <button class="option-button" data-group="laser" data-price="0" onclick="selectOption('laser', this)">Brez (0€)</button>
                    <button class="option-button" data-group="laser" data-price="2000" onclick="selectOption('laser', this)">Laser 1 (2000€)</button>
                    <button class="option-button" data-group="laser" data-price="2500" onclick="selectOption('laser', this)">Laser 2 (2500€)</button>
                    <button class="option-button" data-group="laser" data-price="3000" onclick="selectOption('laser', this)">Laser 3 (3000€)</button>
                    </div>
                </div>
                
                <div class="option-section">
                    <h2>Dodatki</h2>
                    <div class="option-buttons" id="addon-options">
                    <button class="option-button" data-price="500" onclick="toggleAddon('Addon 1')">Addon 1 (500€)</button>
                    <button class="option-button" data-price="750" onclick="toggleAddon('Addon 2')">Addon 2 (750€)</button>
                    <button class="option-button" data-price="1000" onclick="toggleAddon('Addon 3')">Addon 3 (1000€)</button>
                    <button class="option-button" data-price="1500" onclick="toggleAddon('Addon 4')">Addon 4 (1500€)</button>
                    </div>
                </div>
                
                <div id="total-price">Skupna cena: 0€</div>
                </div>
        </section>