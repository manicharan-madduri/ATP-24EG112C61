
            const order = {
                  orderId: "ORD1001",
                  customer: {
                    name: "Anita",
                    address: {
                      city: "Hyderabad",
                      pincode: 500085
                    }
                  },
                  items: [
                    { product: "Laptop", price: 70000 }
                  ]
                };
let copyorder=structuredClone(order)
order.customer.name='Mani'
         copyorder.customer.address.city="Mancherial";
         copyorder.items[0].price=60000;
         console.log(order)
         console.log(copyorder)       