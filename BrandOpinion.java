package com.brandmap.backend.model;

public class BrandOpinion {
    private String brand;
    private String opinion;

    public BrandOpinion() {}

    public BrandOpinion(String brand, String opinion) {
        this.brand = brand;
        this.opinion = opinion;
    }

    public String getBrand() {
        return brand;
    }

    public void setBrand(String brand) {
        this.brand = brand;
    }

    public String getOpinion() {
        return opinion;
    }

    public void setOpinion(String opinion) {
        this.opinion = opinion;
    }

    private String summarizedOpinion;

    public String getSummarizedOpinion() {
        return summarizedOpinion;
    }

    public void setSummarizedOpinion(String summarizedOpinion) {
        this.summarizedOpinion = summarizedOpinion;
    }
}
