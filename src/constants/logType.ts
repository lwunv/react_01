export enum LOG_TYPE {
    KIOSK = 1,
    MENU = 2,
    LANGUAGE = 3,
    MAP = 4, 
    KEYWORD = 5,
    HASHTAG = 6,
    LIST = 7,
    SCREEN = 8,
    EVENT = 9,
}
export enum LOG_POI_SUB_TYPE {
    POI_CLICK = 101,
    NAVIGATION_CLICK = 102,
    SEARCH_CLICK = 201
}

export enum LOG_USED_SUB_TYPE {
    SAVER_SCREEN_CLICK = 100,
    TIME_OUT_USED = 110,
}

export enum LOG_SCREEN_SUB_TYPE {
    SCREEN_SAVER = 1,
    MAIN_SCREEN = 2
}

export enum LOG_KIOSK_SUB_TYPE {    
    ROUTER_MODE_CLICK = 301,
    TAB_CLICK = 302,
    FLOOR_CLICK = 303,
    BUTTON_CLICK = 304,
    CATEGORY_CLICK = 305,
    POSITION_CLICK = 306,
    FACILITIES_CLICK = 307
}