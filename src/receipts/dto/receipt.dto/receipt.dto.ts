import { Transform } from 'class-transformer'
import { IsNumber, Max, Min } from 'class-validator'

export class CreateReceiptDto {
    @IsNumber()
    tripId: number

    // @IsNumber()
    // @Transform(({ value }) => parseFloat(value))
    // taxes: number
    
    // @IsNumber()
    // @Transform(({ value }) => parseFloat(value))
    // amount: number

    status: string
    
    paymentMethod: string
}
