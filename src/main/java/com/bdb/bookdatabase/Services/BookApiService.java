package com.bdb.bookdatabase.Services;

import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.util.UriComponentsBuilder;

@Service
public class BookApiService {

    // search URL example https://www.googleapis.com/books/v1/volumes?q=harry+potter&key=AIzaSyCsaPI3ETOxzfgIp7pV27O-BnvY_QI1-K8
    private final String API_KEY = "AIzaSyCsaPI3ETOxzfgIp7pV27O-BnvY_QI1-K8";
    private final String API_URL = "https://www.googleapis.com/books/v1/volumes";
    private final RestTemplate restTemplate;

    public BookApiService() {
        this.restTemplate = new RestTemplate();
    }

    public String searchBooks(String query) {
        String url = UriComponentsBuilder.fromHttpUrl(API_URL)
            .queryParam("q", query)
            .queryParam("key", API_KEY)
            .toUriString();

        return restTemplate.getForObject(url, String.class);
    }
}
