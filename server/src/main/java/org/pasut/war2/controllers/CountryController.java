package org.pasut.war2.controllers;

import org.pasut.war2.models.Country;
import org.pasut.war2.repositories.CountryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

/**
 * Created by boot on 8/5/17.
 */
@RestController()
@RequestMapping("country")
public class CountryController {

    @Autowired
    CountryRepository repository;

    @RequestMapping(method = RequestMethod.POST)
    public ResponseEntity<Country> create(@RequestBody final Country country) {
        return ResponseEntity.status(HttpStatus.CREATED).body(repository.insert(country));
    }
}
