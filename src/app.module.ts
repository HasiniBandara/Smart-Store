import { Module } from '@nestjs/common';
import { ProductsModule } from './products/products.module';  
import { AuthModule } from './auth/auth.module';
import { DatabaseModule } from './database/database.module';
import { PaymentModule } from './payment/payment.module';
import { OrdersModule } from './orders/orders.module';
import { CategoriesModule } from './categories/categories.modules';

@Module({
  imports: [
    DatabaseModule,
    AuthModule,  
    ProductsModule,  
    PaymentModule,
    OrdersModule,
    CategoriesModule,
  ],
})
export class AppModule {}
