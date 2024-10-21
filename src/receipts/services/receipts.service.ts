import { Injectable } from '@nestjs/common';
import { CreateReceiptDto } from '../dto/receipt.dto/receipt.dto';
// import { PaymentMethod, Receipt, ReceiptStatus } from '@prisma/client';
import { PaymentMethod, Receipt } from '@prisma/client';
import { DatabaseService } from '../../database/database.service';


@Injectable()
export class ReceiptsService {
    constructor(private db: DatabaseService) {}
    async create(receipts: CreateReceiptDto, taxes: number, amount: number): Promise<Receipt> {
        return this.db.receipt.create({
            data: {
                tripId: receipts.tripId,
                taxes,
                amount,
                // status: receipts.status as ReceiptStatus,
                status: receipts.status,
                paymentMethod: receipts.paymentMethod as PaymentMethod
            }
        })
    }
}
