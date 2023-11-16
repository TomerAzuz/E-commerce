package com.ElectroMarket.catalogservice.integration;

import java.time.Instant;

import com.ElectroMarket.catalogservice.models.Product;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.json.JsonTest;
import org.springframework.boot.test.json.JacksonTester;

import static org.assertj.core.api.Assertions.assertThat;

@JsonTest
public class ProductJsonTests {

    @Autowired
    private JacksonTester<Product> json;

    @Test
    void testSerialize() throws Exception {
        var now = Instant.now();
        var product = new Product(123L, "Product", 9.99, 1L,
                            10, "https://example.com/image.jpg", "brand",  now, now, "tomer", "tomer", 25);
        var jsonContent = json.write(product);

        assertThat(jsonContent).extractingJsonPathNumberValue("@.id")
                .isEqualTo(product.id().intValue());
        assertThat(jsonContent).extractingJsonPathStringValue("@.name")
                .isEqualTo(product.name());
        assertThat(jsonContent).extractingJsonPathNumberValue("@.price")
                .isEqualTo(product.price());
        assertThat(jsonContent).extractingJsonPathNumberValue("@.categoryId")
                .isEqualTo(product.categoryId().intValue());
        assertThat(jsonContent).extractingJsonPathStringValue("@.imageUrl")
                .isEqualTo(product.imageUrl());
        assertThat(jsonContent).extractingJsonPathStringValue("@.brand")
                .isEqualTo(product.brand());
        assertThat(jsonContent).extractingJsonPathStringValue("@.createdDate")
                .isEqualTo(product.createdDate().toString());
        assertThat(jsonContent).extractingJsonPathStringValue("@.lastModifiedDate")
                .isEqualTo(product.lastModifiedDate().toString());
        assertThat(jsonContent).extractingJsonPathStringValue("@.createdBy")
                .isEqualTo(product.createdBy().toString());
        assertThat(jsonContent).extractingJsonPathStringValue("@.lastModifiedBy")
                .isEqualTo(product.lastModifiedBy().toString());
        assertThat(jsonContent).extractingJsonPathNumberValue("@.version")
                .isEqualTo(product.version());
    }

    @Test
    void testDeserialize() throws Exception {
        var content = """
                    {
                        "id": 242,
                        "name": "product",
                        "price": 5.5,
                        "categoryId": "24",
                        "stock": 10,
                        "imageUrl": "https://example.com/image.jpg",
                        "brand": "brand",
                        "createdDate": "2023-09-10T13:48:51.199355Z",
                        "lastModifiedDate": "2023-09-10T13:48:51.199355Z",
                        "createdBy": "tomer",
                        "lastModifiedBy":  "tomer",
                        "version": 65
                    }
                    """;
        var instant = Instant.parse("2023-09-10T13:48:51.199355Z");
        assertThat(json.parse(content))
                .usingRecursiveComparison()
                .isEqualTo(new Product(242L, "product", 5.5, 24L, 10, "https://example.com/image.jpg", "brand", instant, instant, "tomer", "tomer", 65));

    }
}
