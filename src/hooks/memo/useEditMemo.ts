import { ChangeEvent, useEffect, useState } from "react";
import { useUpdateMemo } from "../../queries/memo/updateMemo";
import { useGetMemo } from "../../queries/memo/getMemo";

export const useEditMemo = () => {
  const memoData = useGetMemo();
  const [memo, setMemo] = useState<string>("");
  const [debouncedMemo, setDebouncedMemo] = useState<string>("");
  const { mutateAsync } = useUpdateMemo(setMemo);

  useEffect(() => {
    if (memoData.data?.content) {
      setMemo(memoData.data.content);
      setDebouncedMemo(memoData.data.content);
    }
  }, [memoData.data?.content]);

  useEffect(() => {
    if (!memoData.data) return;

    const handler = setTimeout(() => {
      setDebouncedMemo(memo);
    }, 500);

    return () => clearTimeout(handler);
  }, [memo, memoData.data]);

  useEffect(() => {
    if (!memoData.data) return;
    if (debouncedMemo === memoData.data.content) return;

    mutateAsync(debouncedMemo);
  }, [debouncedMemo]);

  return {
    memo,
    debouncedMemo,
    handleMemo: (e: ChangeEvent<HTMLTextAreaElement>) => setMemo(e.target.value),
  };
};
