import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { ProductModule } from './product/product.module';
import { CampaignModule } from './campaign/campaign.module';
import { DonationModule } from './donation/donation.module';

@Module({
  imports: [
    PrismaModule,
    ProductModule,
    CampaignModule,
    DonationModule
  ]
})
export class AppModule {}
