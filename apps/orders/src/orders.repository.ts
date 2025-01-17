import { AbstractRepository } from "@app/common";
import { Injectable, Logger } from "@nestjs/common";
import { Order } from "./schemas/orders.schema";
import { InjectModel, InjectConnection } from "@nestjs/mongoose";
import { Model, Connection } from "mongoose";


@Injectable()
export class OrdersRepository extends AbstractRepository<Order> {
    protected readonly logger = new Logger(OrdersRepository.name);

    constructor(@InjectModel(Order.name) orderModel: Model<Order>,
                @InjectConnection() connection: Connection,
    ) {
        super(orderModel, connection);
    }
}