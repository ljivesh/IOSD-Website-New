import * as React from "react";
import { Photo, PhotoAlbum, RenderPhotoProps } from "react-photo-album";
import clsx from "clsx";
import {
    closestCenter,
    DndContext,
    DragEndEvent,
    DragOverlay,
    DragStartEvent,
    KeyboardSensor,
    MouseSensor,
    TouchSensor,
    UniqueIdentifier,
    useSensor,
    useSensors,
} from "@dnd-kit/core";
import { arrayMove, SortableContext, sortableKeyboardCoordinates, useSortable } from "@dnd-kit/sortable";

// import photoSet from "./photos";
import "./Gallery.css";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

import codeIT1 from '@/assets/EventsImages/CodeIT1.jpeg';
import codeIT2 from '@/assets/EventsImages/CodeIT2.jpeg';
import codeIT3 from '@/assets/EventsImages/CodeIT3.jpeg';
import codeIT4 from '@/assets/EventsImages/CodeIT4.jpeg';
import codeIT5 from '@/assets/EventsImages/CodeIT5.jpeg';
import codeIT6 from '@/assets/EventsImages/CodeIT6.jpeg';
import codeIT7 from '@/assets/EventsImages/CodeIT7.jpeg';
import codeIT8 from '@/assets/EventsImages/CodeIT8.jpeg';
import codeIT9 from '@/assets/EventsImages/CodeIT9.jpeg';
import codeIT10 from '@/assets/EventsImages/CodeIT10.jpeg';
import codeIT11 from '@/assets/EventsImages/CodeIT11.jpeg';
import codeIT12 from '@/assets/EventsImages/CodeIT12.jpeg';
import codeIT13 from '@/assets/EventsImages/CodeIT13.jpeg';
import codeIT14 from '@/assets/EventsImages/CodeIT14.jpeg';
import codeIT15 from '@/assets/EventsImages/CodeIT15.jpeg';
import codeIT16 from '@/assets/EventsImages/CodeIT16.jpeg';
import kickstart221 from '@/assets/EventsImages/Kickstart221.jpeg';
import kickstart222 from '@/assets/EventsImages/Kickstart222.jpeg';
import kickstart223 from '@/assets/EventsImages/Kickstart223.jpeg';
import kickstart224 from '@/assets/EventsImages/Kickstart224.jpeg';


interface SortablePhoto extends Photo {
    id: string;
}

type SortablePhotoProps = RenderPhotoProps<SortablePhoto>;

type PhotoFrameProps = SortablePhotoProps & {
    overlay?: boolean;
    active?: boolean;
    insertPosition?: "before" | "after";
    attributes?: Partial<React.HTMLAttributes<HTMLDivElement>>;
    listeners?: Partial<React.HTMLAttributes<HTMLDivElement>>;
};
const breakpoints = [1080, 640, 384, 256, 128, 96, 64, 48];

const unsplashPhotos = [
    { src: codeIT1, width: 1080, height: 1080 },
    { src: codeIT2, width: 1080, height: 1080 },
    { src: codeIT3, width: 1080, height: 1620 },
    { src: codeIT4, width: 1080, height: 384 },
    { src: codeIT5, width: 1080, height: 1080 },
    { src: codeIT6, width: 1080, height: 1080 },
    { src: codeIT7, width: 1080, height: 1680 },
    { src: codeIT8, width: 1080, height: 1080 },
    { src: codeIT9, width: 1080, height: 1080 },
    { src: codeIT10, width: 1080, height: 1080 },
    { src: codeIT11, width: 1080, height: 1080 },
    { src: codeIT12, width: 1080, height: 1080 },
    { src: codeIT13, width: 1080, height: 1080 },
    { src: codeIT14, width: 1080, height: 1080 },
    { src: codeIT15, width: 1080, height: 1080 },
    { src: codeIT16, width: 1080, height: 1080 },
    { src: kickstart221, width: 1080, height: 1080 },
    { src: kickstart222, width: 1080, height: 1080 },
    { src: kickstart223, width: 1080, height: 1080 },
    { src: kickstart224, width: 1080, height: 1080 },
];
const photoSet =  unsplashPhotos.map((photo) => ({
    src: photo.src,
    width: photo.width,
    height: photo.height,
    srcSet: breakpoints.map((breakpoint) => {
        const height = Math.round((photo.height / photo.width) * breakpoint);
        return {
            src: photo.src,
            width: breakpoint,
            height,
        };
    }),
}));


const PhotoFrame = React.memo(
    React.forwardRef<HTMLDivElement, PhotoFrameProps>((props, ref) => {
        const { layoutOptions, imageProps, overlay, active, insertPosition, attributes, listeners } = props;
        const { alt, style,src, ...restImageProps } = imageProps;
        return (
            <div
                ref={ref}
                style={{
                    width: overlay ? `calc(100% - ${2 * layoutOptions.padding}px)` : style.width,
                    padding: style.padding,
                    marginBottom: style.marginBottom,
                }}
                className={clsx("photo-frame", {
                    overlay: overlay,
                    active: active,
                    insertBefore: insertPosition === "before",
                    insertAfter: insertPosition === "after",
                })}
                {...attributes}
                {...listeners}
            >
                <img
                    src={src}
                    alt={alt}
                    style={{
                        ...style,
                        width: "100%",
                        height: "auto",
                        padding: 0,
                        marginBottom: 0,
                    }}
                    {...restImageProps}
                />
            </div>
        );
    })
);
PhotoFrame.displayName = "PhotoFrame";

function SortablePhotoFrame(props: SortablePhotoProps & { activeIndex?: number }) {
    const { photo, activeIndex } = props;
    const { attributes, listeners, isDragging, index, over, setNodeRef } = useSortable({ id: photo.id });

    return (
        <PhotoFrame
            ref={setNodeRef}
            active={isDragging}
            insertPosition={
                activeIndex !== undefined && over?.id === photo.id && !isDragging
                    ? index > activeIndex
                        ? "after"
                        : "before"
                    : undefined
            }
            aria-label="sortable image"
            attributes={attributes}
            listeners={listeners}
            {...props}
        />
    );
}

export default function Gallery() {
        const [photos, setPhotos] = React.useState(
        (photoSet).map((photo) => ({
            ...photo,
            id: photo.src,
        }))
    );
    const renderedPhotos = React.useRef<{ [key: string]: SortablePhotoProps }>({});
    const [activeId, setActiveId] = React.useState<UniqueIdentifier | null>(null);
    const activeIndex = activeId ? photos.findIndex((photo) => photo.id === activeId) : undefined;

    const sensors = useSensors(
        useSensor(MouseSensor, { activationConstraint: { distance: 5 } }),
        useSensor(TouchSensor, { activationConstraint: { delay: 50, tolerance: 10 } }),
        useSensor(KeyboardSensor, { coordinateGetter: sortableKeyboardCoordinates })
    );

    const handleDragStart = React.useCallback(({ active }: DragStartEvent) => setActiveId(active.id), []);

    const handleDragEnd = React.useCallback((event: DragEndEvent) => {
        const { active, over } = event;

        if (over && active.id !== over.id) {
            setPhotos((items) => {
                const oldIndex = items.findIndex((item) => item.id === active.id);
                const newIndex = items.findIndex((item) => item.id === over.id);

                return arrayMove(items, oldIndex, newIndex);
            });
        }
    }, []);

    const renderPhoto = React.useCallback(
        (props: SortablePhotoProps) => {
            // capture rendered photos for future use in DragOverlay
            renderedPhotos.current[props.photo.id] = props;
            return <SortablePhotoFrame activeIndex={activeIndex} {...props} />;
        },
        [activeIndex]
    );
    const [index, setIndex] = React.useState(-1);
    return (
        <DndContext
            sensors={sensors}
            collisionDetection={closestCenter}
            onDragStart={handleDragStart}
            onDragEnd={handleDragEnd}
        >
            <SortableContext items={photos} >
                <div style={{ padding: 20 ,paddingLeft: 40, paddingRight: 40 ,paddingBottom: 80, backgroundColor: "#000"}}
                >
                    <div className="galleryHead">IOSD Memories</div>
                    <PhotoAlbum photos={photos} layout="rows" spacing={30} padding={20} renderPhoto={renderPhoto} onClick={({ index }) => setIndex(index)} />
                    <Lightbox
                        slides={photos}
                        open={index >= 0}
                        index={index}
                        close={() => setIndex(-1)}
                    />
                </div>
            </SortableContext>
            <DragOverlay>{activeId && <PhotoFrame overlay {...renderedPhotos.current[activeId]} />}</DragOverlay>
        </DndContext>
    );
}