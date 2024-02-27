<?php 
    $sql = "SELECT * FROM uporabniki WHERE id = " . $_SESSION['id'];
    $result = $conn->query($sql);
    $user = $result->fetch_assoc();

    $ime = $user['ime'];
    $priimek = $user['priimek'];
    $email = $user['mail'];
    $userId = $user['id'];
?>
<p id = "userId" style = "display: none;"><?php echo $userId; ?></p>
<div class="container" id = "profilContainer" style = "display: none;">
<div class = "profil" id = "profil">
<div class="success">
    <div class="success-content">
        <img src="img/checkmark.png" alt="Success" class="success-image">
        <h2 class="success-message">Informacije uspešno posodobljene!</h2>
    </div>
    <p id = "gesloText">Če ste vnesli pravo geslo, bo to spremenjeno.</p>
</div>
    <h2>Profil</h2>
    <p style = "text-align:center;">Uredi ali preglej svoje podatke</p>
    <div class = "modern-form">
    <label>Ime</label>
    <input type="text" id="ime" name="ime" required value = "<?php echo $ime ?>"><br>
    <label>Priimek</label>
    <input type="text" id="priimek" name="priimek" required value = "<?php echo $priimek ?>"><br>
    <label>Email</label>
    <input type="email" id="email" name="email" required value = "<?php echo $email ?>"><br>
    <br>
    <p style = "text-align:center;">Če želite spremeniti geslo, vnesite staro geslo in novo geslo.</p>

    <label>Staro geslo</label>
    <input type="password" id="geslo" name="geslo" required><br>
    <label>Novo geslo</label>
    <input type="password" id="geslo2" name="geslo2" required><br>
    <br>
    <button class="profile-submit-button" id = "profilSubmit">Shrani</button>
    </div>
</div>
</div>