package com.bdb.bookdatabase.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import java.util.Map;
import com.bdb.bookdatabase.Services.BookApiService;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.core.type.TypeReference;

@RestController
public class SearchController {

    private final BookApiService bookApiService;
    private final ObjectMapper objectMapper;

    @Autowired
    public SearchController(BookApiService bookApiService, ObjectMapper objectMapper) {
        this.bookApiService = bookApiService;
        this.objectMapper = objectMapper;
    }

    @PostMapping("/search")
    public Map<String, Object> searchBook(@RequestBody String query) {
        String searchResult = bookApiService.searchBooks(query);
        Map<String, Object> resultMap = null;
        try {
            resultMap = objectMapper.readValue(searchResult, new TypeReference<Map<String, Object>>() {
            });
        } catch (Exception e) {
            e.printStackTrace();
        }

        return resultMap;
    }
}
