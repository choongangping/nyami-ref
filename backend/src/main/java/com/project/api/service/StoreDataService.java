package com.project.api.service;

import com.fasterxml.jackson.databind.JsonNode;
import com.project.api.dto.StoreDataRequestDTO;
import com.project.api.entity.StoreData;
import com.project.api.repository.StoreDataRepository;
import lombok.Data;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;

@Service
@Data
@RequiredArgsConstructor
@Slf4j
public class StoreDataService {
    private final StoreDataRepository storeDataRepository;

    public void saveData(JsonNode rows) {
        for (JsonNode row : rows) {
            StoreDataRequestDTO dto = jsonToDto(row);
            StoreData entity = toEntity(dto);
            storeDataRepository.save(entity);
        }
    }

    public StoreDataRequestDTO jsonToDto(JsonNode row) {
        StoreDataRequestDTO dto = new StoreDataRequestDTO();
        dto.setTrdStateGbn(row.get("TRDSTATEGBN").asText());
        dto.setTrdStateNm(row.get("TRDSTATENM").asText());
        dto.setSiteTel(row.get("SITETEL").asText());
        dto.setRdnWhlAddr(row.get("RDNWHLADDR").asText());
        dto.setBplcNm(row.get("BPLCNM").asText());
        dto.setLastModTs(LocalDateTime.parse(row.get("LASTMODTS").asText()));
        dto.setUptaeNm(row.get("UPTAENM").asText());
        dto.setX(row.get("X").asDouble());
        dto.setY(row.get("Y").asDouble());
        return dto;
    }

    public StoreData toEntity(StoreDataRequestDTO dto) {
        StoreData entity = new StoreData();
        entity.setTrdStateGbn(dto.getTrdStateGbn());
        entity.setTrdStateNm(dto.getTrdStateNm());
        entity.setSiteTel(dto.getSiteTel());
        entity.setRdnWhlAddr(dto.getRdnWhlAddr());
        entity.setBplcNm(dto.getBplcNm());
        entity.setLastModTs(dto.getLastModTs());
        entity.setUptaeNm(dto.getUptaeNm());
        entity.setX(dto.getX());
        entity.setY(dto.getY());
        return entity;
    }
}
