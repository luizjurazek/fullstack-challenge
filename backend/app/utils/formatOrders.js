const formatOrders = (rows) => {
  const ordersMap = new Map();
  
  // Iterar sobre os resultados e agrupar os itens do pedido por order_id
  rows.forEach(row => {
    const { order_id, order_date,...rest } = row;
    if (!ordersMap.has(order_id)) {
      ordersMap.set(order_id, { id_order: order_id, order_date: order_date, items: [] });
    }
    ordersMap.get(order_id).items.push(rest);
  });
  
  // Converter o Map para um array de objetos
  const formattedOrders = Array.from(ordersMap.values());
  
  return formattedOrders;
};

module.exports = { formatOrders }