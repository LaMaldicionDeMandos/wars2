package org.pasut.war2.controllers;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

/**
 * Created by boot on 8/5/17.
 */
@RestController()
@RequestMapping("country")
public class CountryController {

    @RequestMapping(method = RequestMethod.GET)
    public String hello() {
        return "Hola Mundo";
    }
}
