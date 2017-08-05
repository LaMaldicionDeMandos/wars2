package org.pasut.war2.models;

import org.springframework.data.annotation.Id;

/**
 * Created by boot on 8/5/17.
 */
public class Country {
    @Id
    private final String id;
    private final String code;
    private final String name;
    private final long annualBudget;

    Country(){
        this("", "", 0);
    }

    public Country(final String id, final String code, final String name, final long annualBudget) {
        this.id = id;
        this.code = code;
        this.name = name;
        this.annualBudget = annualBudget;
    }

    public Country(final String code, final String name, final long annualBudget) {
        this(null, code, name, annualBudget);
    }

    public String getId() {
        return id;
    }

    public String getCode() {
        return code;
    }

    public String getName() {
        return name;
    }

    public long getAnnualBudget() {
        return annualBudget;
    }

    @Override
    public boolean equals(final Object o) {
        if (o == this) return true;
        if (!(o instanceof Country)) return false;
        Country c = (Country)o;
        return c.code.equals(code);
    }

    @Override
    public int hashCode() {
        return code.hashCode();
    }

    @Override
    public String toString() {
        return name + "(" + code + ")";
    }
}
