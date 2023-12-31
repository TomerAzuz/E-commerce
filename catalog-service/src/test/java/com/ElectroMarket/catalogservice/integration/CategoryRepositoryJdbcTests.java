package com.ElectroMarket.catalogservice.integration;

import com.ElectroMarket.catalogservice.config.DataConfig;
import com.ElectroMarket.catalogservice.models.Category;
import com.ElectroMarket.catalogservice.repositories.CategoryRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.data.jdbc.DataJdbcTest;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.context.annotation.Import;
import org.springframework.data.jdbc.core.JdbcAggregateTemplate;
import org.springframework.test.context.ActiveProfiles;

import java.util.Optional;
import java.util.stream.Collectors;
import java.util.stream.StreamSupport;

import static org.assertj.core.api.Assertions.assertThat;

@DataJdbcTest
@Import(DataConfig.class)
@AutoConfigureTestDatabase(
        replace = AutoConfigureTestDatabase.Replace.NONE
)
@ActiveProfiles("integration")
public class CategoryRepositoryJdbcTests {
    @Autowired
    private CategoryRepository categoryRepository;

    @Autowired
    private JdbcAggregateTemplate jdbcAggregateTemplate;

    @Test
    void findAllCategories()    {
        categoryRepository.deleteAll();
        var category1 = Category.of("Laptops");
        var category2 = Category.of("Screens");
        var category3 = Category.of("Smartphones");

        jdbcAggregateTemplate.insert(category1);
        jdbcAggregateTemplate.insert(category2);
        jdbcAggregateTemplate.insert(category3);

        Iterable<Category> actualCategories = categoryRepository.findAll();
        assertThat(StreamSupport.stream(actualCategories.spliterator(), true)
                .filter(category -> category.name().equals(category1.name()) || category.name().equals(category2.name()) || category.name().equals(category3.name()))
                .collect(Collectors.toList())).hasSize(3);
    }

    @Test
    void findCategoryByName()  {
        var category = Category.of("Smartphones");
        jdbcAggregateTemplate.insert(category);
        Optional<Category> actualCategory = categoryRepository.findByName(category.name());

        assertThat(actualCategory).isPresent();
        assertThat(actualCategory.get().name()).isEqualTo(category.name());
    }

    @Test
    void saveCategory() {
        var category = Category.of("Headphones");

        Category savedCategory = categoryRepository.save(category);

        assertThat(savedCategory).isNotNull();
        assertThat(savedCategory.id()).isNotNull();
        assertThat(savedCategory.name()).isEqualTo(category.name());
    }

    @Test
    void updateCategory()   {
        categoryRepository.deleteAll();
        var category = Category.of("Laptops");

        jdbcAggregateTemplate.insert(category);
        categoryRepository.updateByName(category.name(), "Headphones");

        Optional<Category> newCategory = categoryRepository.findByName("Headphones");
        assertThat(newCategory).isPresent();
        assertThat(newCategory.get().id()).isNotNull();
        assertThat(newCategory.get().name()).isEqualTo("Headphones");
    }

    @Test
    void deleteCategory() {
        var category = Category.of("Cameras");

        jdbcAggregateTemplate.insert(category);
        categoryRepository.deleteByName(category.name());

        Optional<Category> deletedCategory = categoryRepository.findByName(category.name());
        assertThat(deletedCategory).isEmpty();
    }

    @Test
    void findNonExistingCategoryByName() {
        Optional<Category> actualCategory = categoryRepository.findByName("Nonexistent Category");
        assertThat(actualCategory).isEmpty();
    }
}
