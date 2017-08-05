package org.pasut.war2.repositories;

import org.pasut.war2.models.Country;
import org.springframework.data.mongodb.repository.MongoRepository;

/**
 * Created by boot on 8/5/17.
 */
public interface CountryRepository extends MongoRepository<Country, String> {
}
