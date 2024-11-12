document.addEventListener("DOMContentLoaded", () => {
    const activeUsers = document.getElementById("active-users");
    const transactions = document.getElementById("transactions");
    const revenue = document.getElementById("revenue");

    // Dados simulados (pode substituir por dados reais da API)
    const data = {
        users: 1200,
        transactions: 340,
        revenue: 15800,
    };

    // Atualizando a interface com os dados
    activeUsers.textContent = data.users;
    transactions.textContent = data.transactions;
    revenue.textContent = `$${data.revenue.toLocaleString()}`;
});
