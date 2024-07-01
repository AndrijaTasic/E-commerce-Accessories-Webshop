using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Entites.OrderAggregate;

namespace API.DTOs
{
    public class CreateOrderDto
{
    public bool SaveAddress { get; set; }
    public ShippingAddress ShippingAddress { get; set; }
}
}