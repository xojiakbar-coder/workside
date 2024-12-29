"use client";

import * as React from "react";
import { CloseButton } from "./close-button";
import type { CollectionItem } from "@chakra-ui/react";
import { Select as ChakraSelect, Portal } from "@chakra-ui/react";

interface SelectTriggerProps extends ChakraSelect.ControlProps {
  clearable?: boolean;
}

export const SelectTrigger = React.forwardRef<
  HTMLButtonElement,
  SelectTriggerProps
>(function SelectTrigger(props, ref) {
  const { children, clearable, ...rest } = props;
  return (
    <ChakraSelect.Control {...rest}>
      <ChakraSelect.Trigger ref={ref}>{children}</ChakraSelect.Trigger>
      <ChakraSelect.IndicatorGroup>
        {clearable && <SelectClearTrigger />}
        <ChakraSelect.Indicator className="px-[8px] scale-125" />
      </ChakraSelect.IndicatorGroup>
    </ChakraSelect.Control>
  );
});

const SelectClearTrigger = React.forwardRef<
  HTMLButtonElement,
  ChakraSelect.ClearTriggerProps
>(function SelectClearTrigger(props, ref) {
  return (
    <ChakraSelect.ClearTrigger asChild {...props} ref={ref}>
      <CloseButton
        size="md"
        variant="plain"
        // focusVisibleRing="inside"
        focusRingWidth="2px"
        pointerEvents="auto"
      />
    </ChakraSelect.ClearTrigger>
  );
});

interface SelectContentProps extends ChakraSelect.ContentProps {
  portalled?: boolean;
  portalRef?: React.RefObject<HTMLElement>;
}

export const SelectContent = React.forwardRef<
  HTMLDivElement,
  SelectContentProps
>(function SelectContent(props, ref) {
  const { portalled = true, portalRef, ...rest } = props;
  return (
    <Portal disabled={!portalled} container={portalRef}>
      <ChakraSelect.Positioner className="w-full py-[6px] overflow-hidden">
        <ChakraSelect.Content
          {...rest}
          ref={ref}
          className="flex gap-[6px] justify-start w-full px-[12px] bg-[#1d1e27] py-[14px] rounded-md h-max min-h-[150px]"
        />
      </ChakraSelect.Positioner>
    </Portal>
  );
});

export const SelectItem = React.forwardRef<
  HTMLDivElement,
  ChakraSelect.ItemProps
>(function SelectItem(props, ref) {
  const { item, children, ...rest } = props;
  return (
    <ChakraSelect.Item
      key={item.value}
      item={item}
      {...rest}
      ref={ref}
      className="px-[12px] rounded-md py-[14px] cursor-pointer text-light"
    >
      {children}
      <ChakraSelect.ItemIndicator />
    </ChakraSelect.Item>
  );
});

interface SelectValueTextProps
  extends Omit<ChakraSelect.ValueTextProps, "children"> {
  children?(items: CollectionItem[]): React.ReactNode;
}

export const SelectValueText = React.forwardRef<
  HTMLSpanElement,
  SelectValueTextProps
>(function SelectValueText(props, ref) {
  const { children, placeholder, ...rest } = props;

  return (
    <ChakraSelect.ValueText
      {...rest}
      ref={ref}
      className="px-[10px] py-[8px] text-light"
    >
      <ChakraSelect.Context>
        {(select) => {
          const items = select.selectedItems;
          const isDefault = items.length === 0;

          return (
            <span
              style={{
                color: isDefault ? "#a1a1aa" : "#ffffffff",
              }}
            >
              {isDefault
                ? placeholder
                : children
                ? children(items)
                : items.length === 1
                ? select.collection.stringifyItem(items[0])
                : `${items.length} selected`}
            </span>
          );
        }}
      </ChakraSelect.Context>
    </ChakraSelect.ValueText>
  );
});

export const SelectRoot = React.forwardRef<
  HTMLDivElement,
  ChakraSelect.RootProps
>(function SelectRoot(props, ref) {
  return (
    <ChakraSelect.Root
      {...props}
      ref={ref}
      positioning={{ sameWidth: true, ...props.positioning }}
    >
      {props.asChild ? (
        props.children
      ) : (
        <>
          <ChakraSelect.HiddenSelect />
          {props.children}
        </>
      )}
    </ChakraSelect.Root>
  );
}) as ChakraSelect.RootComponent;

interface SelectItemGroupProps extends ChakraSelect.ItemGroupProps {
  label: React.ReactNode;
}

export const SelectItemGroup = React.forwardRef<
  HTMLDivElement,
  SelectItemGroupProps
>(function SelectItemGroup(props, ref) {
  const { children, label, ...rest } = props;
  return (
    <ChakraSelect.ItemGroup {...rest} ref={ref}>
      <ChakraSelect.ItemGroupLabel>{label}</ChakraSelect.ItemGroupLabel>
      {children}
    </ChakraSelect.ItemGroup>
  );
});

export const SelectLabel = ChakraSelect.Label;
export const SelectItemText = ChakraSelect.ItemText;
