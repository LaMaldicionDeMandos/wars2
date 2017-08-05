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
    private final float lat;
    private final float lon;

    Country(){
        this("", "", 0, 0f, 0f);
    }

    public Country(final String id, final String code, final String name, final long annualBudget, final float lat,
                   final float lon) {
        this.id = id;
        this.code = code;
        this.name = name;
        this.annualBudget = annualBudget;
        this.lat = lat;
        this.lon = lon;
    }

    public Country(final String code, final String name, final long annualBudget, final float lat, final float lon) {
        this(null, code, name, annualBudget, lat, lon);
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

    public float getLat() {
        return lat;
    }

    public float getLon() {
        return lon;
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
