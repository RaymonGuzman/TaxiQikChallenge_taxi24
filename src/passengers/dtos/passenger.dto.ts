import { Transform } from 'class-transformer';
import { IsNumber, Max, Min, IsString, IsEmail, IsArray } from 'class-validator';


// export class CoordinatesQuery {
//   @IsNumber()
//   @Min(-90)
//   @Max(90)
//   @Transform(({ value }) => parseFloat(value))
//   public latitude: number

//   @IsNumber()
//   @Min(-180)
//   @Max(180)
//   @Transform(({ value }) => parseFloat(value))
//   public longitude: number

//   @IsNumber()
//   @Transform(({ value }) => parseFloat(value))
//   public distance: number
// }

export class CreatePassengerDto {
  /*
   lastName     String        @map("last_name")
  email        String
  phone        String
  document     String
  documentType DocumentTypes @map("document_type")
  trips     
  
  */
  @IsString()
  firstName: string

  @IsString()
  lastName: string

  @IsEmail()
  email: string
  
  @IsString()
  phone: string

  // @IsNumber()
  // companyId: number

  @IsString()
  document: string

  @IsString()
  documentType: string

  // @IsArray()
  // trips: string[]
}
