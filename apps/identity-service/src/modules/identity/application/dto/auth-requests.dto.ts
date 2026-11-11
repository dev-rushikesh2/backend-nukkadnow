import { IsString, Matches, Length, IsOptional } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class RequestOtpDto {
  @ApiProperty({ example: "+919876543210", description: "Indian mobile number (E.164)" })
  @IsString()
  @Matches(/^(\+91)?[6-9]\d{9}$/, { message: "Invalid Indian mobile number format" })
  phoneNumber!: string;
}

export class VerifyOtpDto {
  @ApiProperty({ example: "+919876543210" })
  @IsString()
  phoneNumber!: string;

  @ApiProperty({ example: "123456", description: "6-digit OTP" })
  @IsString()
  @Length(6, 6)
  otp!: string;
}

export class RefreshTokenDto {
  @ApiProperty({ example: "eyJhbGciOi..." })
  @IsString()
  refreshToken!: string;
}
