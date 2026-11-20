import { IsString, Matches, Length, IsOptional, IsEmail } from "class-validator";
import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";

export class RequestOtpDto {
  @ApiPropertyOptional({ example: "+919876543210", description: "Indian mobile number (E.164)" })
  @IsOptional()
  @IsString()
  phoneNumber?: string;

  @ApiPropertyOptional({ example: "merchant@patilsabji.com", description: "Registered merchant email" })
  @IsOptional()
  @IsString()
  email?: string;

  @ApiPropertyOptional({ example: "merchant@patilsabji.com or +919823011223" })
  @IsOptional()
  @IsString()
  identifier?: string;
}

export class VerifyOtpDto {
  @ApiPropertyOptional({ example: "+919876543210" })
  @IsOptional()
  @IsString()
  phoneNumber?: string;

  @ApiPropertyOptional({ example: "merchant@patilsabji.com" })
  @IsOptional()
  @IsString()
  email?: string;

  @ApiPropertyOptional({ example: "merchant@patilsabji.com or +919823011223" })
  @IsOptional()
  @IsString()
  identifier?: string;

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
