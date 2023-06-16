function login() {
    local1 = document.getElementById("Player_1_name").value ;
    local2 = document.getElementById("Player_2_name").value ;
    
    localStorage.setItem("Player 1",local1);
    localStorage.setItem("Player 2",local2);

    window.location = "index1.html"
}