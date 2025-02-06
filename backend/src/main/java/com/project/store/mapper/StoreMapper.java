package com.project.store.mapper;

import com.project.store.dto.StoreResponse;
import com.project.store.entity.Store;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.factory.Mappers;

import java.util.List;

@Mapper
public interface StoreMapper {
    StoreMapper STORE_MAPPER = Mappers.getMapper(StoreMapper.class);

    @Mapping(target = "local", source = "local.local")
    @Mapping(target = "foodCategory", source = "foodCategory.foodCategory")
    @Mapping(target = "theme", source = "theme.theme")
    StoreResponse toDto(Store store);

    List<StoreResponse> toDto(List<Store> stores);
}
