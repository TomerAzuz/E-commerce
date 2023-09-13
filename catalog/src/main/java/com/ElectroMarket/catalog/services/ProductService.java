package com.ElectroMarket.catalog.services;

import com.ElectroMarket.catalog.models.Product;
import com.ElectroMarket.catalog.exceptions.ResourceAlreadyExistsException;
import com.ElectroMarket.catalog.exceptions.ResourceNotFoundException;
import com.ElectroMarket.catalog.repositories.CategoryRepository;
import com.ElectroMarket.catalog.repositories.ProductRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductService {
    private final ProductRepository productRepository;
    private final CategoryRepository categoryRepository;


    public ProductService(ProductRepository productRepository, CategoryRepository categoryRepository) {
        this.productRepository = productRepository;
        this.categoryRepository = categoryRepository;
    }

    public Iterable<Product> viewProductList()    {
        return productRepository.findAll();
    }

    public Product viewProductDetails(Long id)    {
        return productRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("product", id));
    }

    public Product addProductToCatalog(Product product)   {
        List<Product> existingProducts = productRepository.findByName(product.name());
        if (!existingProducts.isEmpty()) {
            throw new ResourceAlreadyExistsException("product", product.id());
        }
        categoryRepository.findById(product.categoryId())
                .orElseThrow(() -> new ResourceNotFoundException("category", product.categoryId()));

        return productRepository.save(product);
    }

    public List<Product> viewProductsByCategory(Long id)  {
        categoryRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("category", id));
        return productRepository.findByCategoryId(id);
    }

    public void removeProductFromCatalog(Long id)  {
        productRepository.deleteById(id);
    }

    public Product editProductDetails(Long id, Product product) {
        return productRepository.findById(id)
                .map(existingProduct -> {
                    var productToUpdate = new Product(
                            existingProduct.id(),
                            existingProduct.name(),
                            product.description(),
                            product.price(),
                            product.categoryId(),
                            product.stock(),
                            product.imageUrl(),
                            existingProduct.createdDate(),
                            existingProduct.lastModifiedDate(),
                            existingProduct.version());
                    return productRepository.save(productToUpdate);
                })
                .orElseGet(() -> addProductToCatalog(product));
    }
}
