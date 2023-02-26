const useNumberFormatter = (number) => {
    const formatter = Intl.NumberFormat("en", { notation: "compact" });
    return formatter.format(number);
}

export default useNumberFormatter;