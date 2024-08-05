(() => {
    const dataSessionStorage: string | null = sessionStorage.getItem('user');
    
    if (!dataSessionStorage) {

        window.location.href = "../views/login.html";
    }
})();
