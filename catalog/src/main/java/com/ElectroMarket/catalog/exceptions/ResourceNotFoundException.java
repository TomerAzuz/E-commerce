package com.ElectroMarket.catalog.exceptions;

public class ResourceNotFoundException extends RuntimeException  {
    public ResourceNotFoundException(String resource, Long id) {
        super("The " + resource + " with id " + id + " was not found.");
    }
}
