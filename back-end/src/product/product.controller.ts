import { ProductService } from './product.service';
import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { ProductDto } from './dto';
import { produto as ProductModel } from "@prisma/client";

@Controller('products')
export class ProductController {
    constructor(private readonly productService: ProductService) {}

    @Post()
    saveProduct(@Body() productDto: ProductDto): Promise<ProductModel> {
        return this.productService.saveProduct(productDto);
    }

    @Get(':barcode')
    findProductByBarcode(@Param('barcode') barcode: string): Promise<ProductModel> {
        return this.productService.findProductByBarcode(barcode);
    }

}