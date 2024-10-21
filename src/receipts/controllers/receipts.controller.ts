import { Controller, Post, Body } from '@nestjs/common';
import { CreateReceiptDto } from '../dto/receipt.dto/receipt.dto';
import { ReceiptsService } from '../services/receipts.service';
import { TripsService } from '@trips/services/trips.service';
import { DriverStatus, $Enums } from '@prisma/client'
import { Geo } from '../../utils/geo.utils'

@Controller('receipts')
export class ReceiptsController {
  constructor(
    private readonly receiptService: ReceiptsService,
    private readonly tripService: TripsService
  ) { }
    @Post()
    // async create(@Body() input: CreateReceiptDto) {
      async create(@Body() input: CreateReceiptDto) {
      const { tripId } = input;
      const trip = await this.tripService.findOne(tripId);
      const distance = Geo.calculateDistance(trip?.fromLatitude!, trip?.fromLongitude!, trip?.toLatitude!, trip?.toLongitude!);
      // const { fromLatitude, fromLongitude, toLatitude, toLongitude } = trip;
      const priceForKM = 2;
      
      const taxes = 1.18;
      const amount = distance*priceForKM*taxes;
      console.log(distance*priceForKM*taxes);

      const receipt = await this.receiptService.create(input, taxes, amount);

      // const receipt = await this.receiptService.create({ ...input, status: $Enums.DriverStatus.PENDING })
      return receipt;
    }
}
