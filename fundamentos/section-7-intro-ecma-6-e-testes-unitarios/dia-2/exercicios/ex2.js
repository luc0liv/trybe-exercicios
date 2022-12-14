const order = {
    name: 'Rafael Andrade',
    phoneNumber: '11-98763-1416',
    address: {
      street: 'Rua das Flores',
      number: '389',
      apartment: '701',
    },
    order: {
      pizza: {
        marguerita: {
          amount: 1,
          price: 25,
        },
        pepperoni: {
          amount: 1,
          price: 20,
        },
      },
      drinks: {
        coke: {
          type: 'Coca-Cola Zero',
          price: 10,
          amount: 1,
        },
      },
      delivery: {
        deliveryPerson: 'Ana Silveira',
        price: 5,
      },
    },
    payment: {
      total: 60,
    },
  };
  
  const customerInfo = (order) => {
    const deliveryPerson = order.order.delivery.deliveryPerson;
    const deliveryCustomer = `${order.name}, Telefone: ${order.phoneNumber}, R. ${order.address.street}, Número: ${order.address.number}, AP: ${order.address.apartment}`;

    console.log(`Oi, ${deliveryPerson}! Entrega para: ${deliveryCustomer}`);
  };
  
  customerInfo(order);
  
  const orderModifier = (order) => {
    const pizzas = Object.keys(order.order.pizza);
    order.name = 'Luiz Silva';
    order.payment = 50;

    console.log(`Olá ${order.name}, o total do seu pedido de ${pizzas[0]}, ${pizzas[1]} e ${order.order.drinks.coke.type} é R$ ${order.payment},00 reais.`);
  };
  
  orderModifier(order);