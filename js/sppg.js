const KEY='sppg_label_from_etiket_lama_v2';
const S3_DEFAULT_LOGO='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHQAAAB1CAIAAAAQpFLVAABMHUlEQVR4nK19d1xTV///zSaDMBI2kb1BEEFxb+tWUFEq7tnaPu7RWqt11adaW62j4qqzTpz4uEUciIoMURBBRtgkZO/k5vfH58nxkgTq8339zh+8QnLvuee8z2ef8/lcEo7jWPtmNpvhA4lEQp/RNx1dAD8Rf7W6Hl3Q0eOs7uromo76IV5pNXKrYdt9nNls/pyeO+rQ7r1U6NR2/vC5k2F1PhQ0IBKJBP3bHb3t2mD2FuMfn2V3mTu60urRHY3c6hYiFLZzsdsblXj//zS+zgdndxp2UUPD7ejRVj+hiRF7s739Hyf/mSuN/S98Y9WoHa3k58zW6oL/8yD+f7WOpIGtHCOOGRFmR+PvXJ5Y9YMRVp1q99JO+vpHBDvp5zOv/0wR8fly43NEQSfE9I8zspIV6HpqR7dZPbUjUdCJsvpHufF/a52P53MG8Dni8jO50EqmWTWq7YiJPf5PAHViS3Q+6M9Xm0TxDaqyoxvtyq7PJPDOm12DxO7t7Sj3H6+2i1cnPXTeld27iCLSaiWsnk40Iv+RlzuytDqngH+kWWIPto8gmUymzkUS3PyZArdzk7aTgVphCg3HcRKJZDQaDQaD0Wg0mUwAKJlMZjAYNBqNQqEgkrRiO2hkMtl2ana5oXNB38llVo0IFJV4W0d3doSjrfK1vaVzniV+MJlMZrNZpVLJZLLW1taqqqqqqqqGhoaWlhaRSKRUKvV6PZAClUrlcDguLi7u7u4eHh4eHh5+fn6+vr7Ozs6Ojo4ODg5UKhVwR9TdkYn2md90zq9Wag19/7liwZZTiLTWybDsdo4+A6AYhikUitevXz969OjFixeVlZVNTU1Go5FKpVKpVBKJRKfTKRQKsTccx00mk8lkMhqNRqMRx3EHBwcPD48uXbrExMR07969Z8+eHh4eDg4OGIaRyWQymfw5/NSR0WYlPT5TFX1aW7tIfU4vny8EEL8DpmQyWaVSPX78+MaNG9nZ2TU1NSaTicFgBAYG+vv7R0ZGRkZG8vl8Fovl4eFBp9NJFk8PwzC9Xq9UKiUSiVgsFgqFeXl59fX15eXlarWaSqXiOM5kMiMjI4cNGzZu3LjIyEgKhYLjONnSOpld51Z8R//avZFkMpmw9oRti9fn60fi/G2fDbDiOI7j+OPHj8+dO3fr1i2xWOzp6dmtW7e+ffvGx8dHRUU5OTkZjcaWlpaWlpb6+voPHz6IxWKZTKbX6zEMI5PJDg4Ozs7OwcHBfD4fZIKzszOJRFIqleXl5QUFBffu3Xv58mVraytI7bCwsIkTJ6akpISEhIAgRsK6I3A7kXi2ApOIDHHu7cD9x9bJ8zqX9EajEUhVJBJduXIlIyOjrKzM29t7+PDhycnJCQkJHA6nqamprKwsNze3qKjo7du39fX1oNMMBgOwF1F3IX1FoVCYTCaPxwsKCoqNje3atWt0dLS/v7/RaHz9+nV2dvaDBw8KCws1Gg2Hw+nbt+/s2bNHjBjBZDJNJhOi4s7RtDsjK3ztXmkHXLvitaOnWoFrS+NIxX/8+PHs2bNnz56VSCT9+vWbPHly7969ORxORUXFs2fP7t69++bNG7lcrlKpqFSqp6enu7u7t7d3WFiYQCDw8PBwcnIC+YvjuF6vV6lUCoWisbERlF5NTU1zc7NCoaBQKI6Ojr6+voMHDx42bFh8fDyFQikvLz979uzNmzeFQiGDwYiMjJw/f/7o0aPZbDaGYRQKhSiR/xFcNNN/vtJKLJA6jiLaNVas5AC6EdlSOI5XVlb+9ddfmZmZGIaNHTs2LS0tJCSkrq7u1q1bWVlZHz58kEgkLi4ugYGBPXr06Nq1a0hIiIeHB5vNdnBwAFFrJbUQFmaz2Wg06vV6tVotl8srKyufPHny+vXr9+/fi0QiBweHoKCg0aNHjx8/PiwsrLW19cGDBydPnszNzTWbzQkJCWvWrOnXrx+dTkeCwspksjv9zq3gdmoQyKojQIm4W33uBFwMw3AcN5vNUqn05MmTf/75p0ajSU1NnT17tp+fX0lJSUZGxoMHD+rq6lxcXOLi4kaNGjVo0CCBQMDlctH0cEuDB5HJZHgQfAZ2Ro+Gb0BPKpXK+vr64uLiR48e5ebmCoVCDofTp0+f6dOn9+rVC8fxO3fu7N69u6CgwMHBYcqUKUuWLAkMDKRQKGDAYe05r3MobAFtBwWyaaDBfEztG/rG6ldAECc0ZBtpNJonT54MGTKEy+Wmp6fn5eUpFIr8/Px58+a5urrS6fTg4OA1a9Y8evRIIpGAj6DX67VarUaj0el0BoNBr9dLpdLGxsaPHz++e/euublZIpHcv3//zZs3cAEMwGAw6HQ6eKhOp9NoNFqtVq/X63Q6tVotFAqvXbs2Y8YMLy8vFovVv3//Q4cO1dXV1dfX7969OyAgANTdsWPHJBIJ3IimiWZEnL5dTEwdNMzqBiJ8dn+yAtrqe4PBYDAYxGLxpk2bXF1dY2JisrKytFptTU3NqlWreDweg8Ho3bv34cOH6+rqtFqtVqtVq9UAKODb2toK8/zjjz9Gjx4dHx/v4+PD4XAOHz5cVlYWGBi4ZMkSjUYDIBqNxhs3bqxYsaKqqspkMul0OoVCAV0B6PBZp9MVFxcvXbrU1dWVTCbHxsYePXpUIpFUVFTMnj2bxWIxmcwZM2ZUVVXBLWjlELi2JNgJaJ947h/x6ugnqwZzMBgMhYWFAwYMcHR0XLt2LdhPhw8fDg4OptFoAwYMuHHjhkKhAEC1lobAev/+fWBg4LJly3Q63Y4dO+bMmbN9+3Z/f3+BQFBeXl5ZWRkaGrp06VKNRqNSqZRKpcFgWLFiBZPJXLt2LY7jOTk5PXv2LCkp0ev1er0eVhoYQqVSqdXqoqKiadOmgRwfMGBAQUGBXq+/du1adHQ0nU6Pjo5+9uyZ3tLA4e4Izc7//S+4dukZt0fqdjE1mUyIo9Vq9cmTJ318fGJjY+/fv28ymcrKyoYPH85kMuPj4//++2+1Wq3T6QBNgLW4uHjJkiUJCQmpqakSiUShUPTq1atv377Nzc0ajUav1z969IjFYh09elSn09XW1sbExKxYsQLAUiqVKpUK+g8LC2tsbNyzZ4+/v39TUxOoOIlE8vz588bGRhAXarUa7rp3796gQYNIJBKXy928ebNUKm1ubp4/fz6bzXZ1dT1+/DhIFRBW0EydysaOUMJMHbC87c221yCCVavVbW1tK1eudHFxQfx17NgxHx8fHx+frVu3NjU1AREBxwHEOTk5/v7+fn5+6enpCxcubGxsVKvV33zzjUAgKCgokMlkUql0xIgR/fv3b2xslMlkDQ0NiYmJK1euhCeCSI2MjExNTfX39z906NC0adMGDx4MFC2VSr/55hsnJ6c5c+ZobJpYLD516lRERASTyRwyZEheXp5arf7rr798fHwcHR1XrVolFosRCROlhF3y6oj4MKsrOpcAtryg1+s1Gk1LS0t6erqzs/PGjRvFYnFDQ8O3337r7OycnJxcWFgI4wPxZyJooalTp3bp0uXx48dtbW35+fk//fTT27dvjx07xmazMzMzVSrVpUuXOBzOnTt3AOjm5ubevXuvWrUKKFGv17969UogEJw+fTolJaVnz57h4eFz584F+P744w8ul8tmsydMmAAyAckfnU4HXF9VVbV8+XJ3d/egoKAjR46oVKpnz57FxMQwGIzk5OSKigqkHk32tLctdFYAWlsLnwMuEVmtVtvY2JiWlubs7HzgwAGZTFZQUDBs2DAPD4/t27dLpVK4DPgURglNq9X26tVr4MCBKpXq5MmT4eHhNBrt+++/z83N5fP569evb2lpGThwII/H27lz5w8//LBp06aysjIiuDiO//333/7+/gUFBefOnYNg2I4dOzQazZUrV7y8vFJTU5OSksaNGwcCpKamZu/evdu3b4f1hiXXaDQ3btxISEhwcnJatmxZW1vb+/fvwfgdNGjQmzdvVCoVkIUtuLawWouFzgnbllTRBxhZXV0d0Ozp06cVCsWDBw/i4uJCQkKuXLmiszS9Xl9XV7ds2bJnz56BGIGJjR8/PjIysrq6uqys7Pbt2z169Ojfv39lZWVkZOTYsWMLCgq8vLy6dOkSFRXVt2/fWbNmlZeXb9q06fz587CoJpNp+/btw4YNa2pqamhoiIiIIJFIt27devz4cVBQEIfD2bJlS1xcHICrVCrnzp3r7OwcGBgYEhJy6tQpHMcBYpPJVFZWNmHCBCaTmZqa2tDQUFlZOWLECAqFMnjw4A8fPsCAbeWnsX2zD65dfO2uBvoMIr+trW3evHk8Hu/ixYsqleo///lPly5dEhMTX7x4AQyF1Pq7d+9iY2OHDRsmFotVKhWQw+nTp3k83qxZs54/f37hwgUejzdixAixWLx9+/adO3c2Nzfn5uZWV1fLZDKDwQBUg+YA8xGLxZWVlaCs9u7dGxkZ+fz58+jo6MjIyDFjxnh7e5PJ5AkTJqjVaplMFhUVNWbMmLKysmnTps2aNQtix1qtFiigpaXlq6++otFo/fr1Ky8vFwqFKSkpFApl2LBh9fX1YNtZQUHEtEPKtYXS9mriT8hNWLlyJY/HO3funMFgePTokbu7+6BBgz58+KBUKsHY+vjx4/r1658+farX6zMzM11dXdesWWOyKDStVrtr1y4/Pz8Oh+Ps7JySkvLx40eDwUA0J5B8JM4Epkq04aApFIqGhoZ///vfBQUFSqXy7du34eHhkyZNkkqlMpls+/btXl5emZmZarVaqVTiOD5jxoyMjAzQtGq1WiqVbtmyhUQiRUdHv337tqWlJS0tjUajffHFF1KpFKQ8gsVo0+yAa4tmJw3HcYPBoFarDQbDzz//7ObmdvToUYg/ubi4jBo1qqGhQaVSwZzVajWMlUKh9O7d+/jx4wsWLGCz2Xfv3gW7DcYqFosLCwurq6uRtAG2QJCBCUU0jeEbaEhBQQNxDD81Nzf3799/woQJ58+fv337tk6nmzt3bmxsbHNzs9FoPHToEJVK3bBhA/SAzLtTp06xWKzw8PCysjKpVJqamkqn01NSUmCNDYTWObI4jtvfQ7PjJre/4MqVK0uWLPn2229XrFhRVlaWkpISHBx88uRJLpeLW4IVOI6r1ephw4YVFhaGhoY2NTXRaDSZTBYaGvrkyRMnJyccx1EYAcMwiGf/d80xDMMwo9EoEomqqqqkUqlSqRSLxWq1mkajsVgsR0dHFxcXLy8vX19fJycniDygIAMKG338+FEikVy/fj0zM3PHjh3/+c9/Hjx4cOfOHZPJ1Ldv35iYmPPnzzOZTKtwQVZW1oIFCyIiIv7++28ajTZ58uQXL16sWbNmzZo1KNSJ/iJw7MRxbPEmylaiTAANptVqc3NzwY9SKBQVFRVJSUmDBg1qbW0FxkE+PpBPVlaWk5PT7Nmzr127tmjRIg8PDwqFcu7cObTtiFxVrVZrMBja2tqePn26Z8+eGTNmxMXFeXl5OTk5sdlsFovl4ODAsDQmk+no6Mjn8wMDAwcPHrx8+fK///67rKwMOkG6FIbR0NAwefJkgUAQGBi4Y8cOiUQyefJkX1/fsrKy0tLSHTt2zJw5c+XKlUVFRUC/Op3u5MmTfD4/JSVFJBKVlJR06dKFyWQeOHBAqVQSjTlb6IigYUSWt0KT+A0Sc9XV1dHR0V988UVTU5NEIpk6dWqvXr2qq6t1Op1KpdLr9bDsN2/eFIlEcrlcLBavXLmSw+H8/vvvMpns+fPn586da2trA4MB+UJSqTQnJ2f16tW9e/f28vJiMpmwuQvBQBSygg/oM4VCodFoDAaDxWI5OTkFBgaOHTs2IyMD9ntAksCDpFJpYWFhWVmZRCLZuHGjo6Pj0aNHb9++HRwczOPx4uLiBAJBaGgouL9arVapVO7cuZPP5y9cuFAul1+6dInFYvF4vKysLDCZOwcX4LIPru0igMiXyWRpaWm+vr75+fkajeaHH36IjIwsKCgAQaxSqdra2sBIdHd3Hzx48P79+ysqKqqrq3v37h0cHFxSUgJSEulojUZTW1t79OjRESNGeHh4cDgcIFImk0mn0xGIZEKjEBqVSqXT6UDI0OBzeHj40qVLX7x4AXvGRCn55s2brl27zpkzRywWR0RE+Pv7X7t2raGh4dmzZxEREYMHDwZ9C0pv7dq1LBZr48aNKpVq7dq1FAolNja2pKQExg/bK3bhArrBrJC1S8XA6SqV6vDhw3Q6/dixY2q1+tSpU76+vn///TeMHhhKq9WuXr3axcVl9erVgwYNYrPZ8fHxP/3008GDB7/99tuamhrkKanV6pqamp07d3br1g1wAVgBWYCJZmlUQqMRGp1OB3AdLA3JDTqd7u3tvWjRordv36KQJoyzpKSkoaGhrKyMRCKtX79eLpdD0GPZsmUuLi4KhcJgMAARNDY2Dh06lMViZWZmisXiESNGkEikGTNmSKVS0OqdkO1/wSXCisBFO7VIhr59+9bHxyctLU2hUJSUlAQHB69evRr0OGhqiAGWlZUFBQWlpKSkpKQIBILhw4f7+Pjcu3cPBcCAA06fPh0bGwu0CTABOkwmE8EE2NFsGt2mMWyag4MDi8Vis9kCgWDbtm1SqRSIF6hEoVB8+PCBSqWuWbNGqVSCzT569OjQ0FDgd7BJ1Gr1q1evvLy8BAJBTU1NUVGRr68vi8U6fvw4iuzg7T03kyWSpdPpMOK3RJpFCheeJJFI0tPT/fz8hEKhTCYbPXo0xFOAQTQaTWFhYUVFBVjaS5YsYTAYwcHBb968USqVra2taGJAsJMnTwZ6RJxOJEMEK2ro18/BF1aIyWQCE4Am7Nmz59OnT5FEAqE5Z84cHo93+PDhvLy8OXPmsNnsXbt24Tj+6tWrQ4cOyWQytVqtUCiOHDmCYVhaWppSqdyzZw+dTg8NDa2qqoK4islkQuAi+9caXLuyA6nyU6dOOTo6njhxQq1W79+/38PD4/79+7CfWF9fP27cOAcHBzabPXTo0BcvXrx588bHx2fMmDHIyAcJq1arb9686efnh07EoB1cW8g6wrETfK1EBCJ/WEgXF5edO3eCOwBGhUKhmD9/PpfLZbFYrq6u3333nUajOX36tIuLC4PBePr0KRz/kUqlU6dOJZFIZ8+elcvlI0eOZDAY06dPh0lZuQIIXL1ebw0ukX5NJhMwclVVVWxs7BdffCGTyerq6gQCwcaNG6VSqVQqrampGTVqVGBg4OnTp7dt2wbB3Ldv3y5evDgkJAQEBUgMhUKxZ88eV1dXIqyArJUktaXTz/wewCUuAzAHWKCwCT937tyGhga096FWq3Nzc69evVpcXNzQ0LBmzRrYx4uKiqqqqkLOS01NjZeXV0xMTE1NTW5urre3t4uLy82bN3Ect+tWwL8dggsfANytW7fy+fy7d++q1eply5bFx8dXVVXJ5XKZTLZ69WoHB4eMjAzYf7106ZKnp+fOnTsLCwtv3ryJGEShUGzfvt3FxYVOpxMNAKJ1ZauvEHC2X3bekLkGyKIDDxQKBcKJDQ0NYKuCCNZqta9fvx46dKibm9umTZtoNNqCBQuUSmVtba1QKATldvDgQTabvXLlSrVa/f3339Pp9P79+wP0yOAjgvvJWrBtgIvRaCwtLQ0NDZ06dapGo8nPz+dyuX/99ZdMJpPJZChAHh0dff369ebm5rq6utjY2G+++Uaj0cB2jsFgUCqV69atc3FxARsA0RTRouoEWbvUavUN1abZteHgRhaLNWHCBJFIBOoE9NvXX38tEAiOHz9+5swZOp1+8uTJ06dP9+jRY86cORAqUSqVAwcO9PT0fPr0aVVVFcRIz507R3TBwQ/+RLlEC4Go0EBa63S6FStWeHh4PHz4UK1Wp6Wlde/eHcQW6H2pVHr16tX4+HgnJ6ft27f/+eefPB7v+PHjSNsqlcoNGza4uLiAerEShZ9DuZ9DpFaYdtQh0YqYNGmSWCxGuFRVVeXk5KhUqlmzZjk7O6elpXE4nKSkpEePHoHOMJlMt27dcnV1TUtLU6lUu3btwjAsISEBOiG6FUjyYlYyAQkEABc8v7S0NI1Gk5ub6+TkdPLkSbQPBs6lXC6vqqpKTk4Gwhw1ahS4wsAsGRkZTk5OLEtD1j4c+OgIpv+JTm05AHqgW/wLpN+Y7du8efOkUikxQlRfX+/p6UmlUh0dHWfPnv3x40dwO+GMj0ajmTx5souLy8OHD4VCoZ+fH4Zhly9fhp9sHTY7phjy+nEcX7t2LY/HA7KdNm1aXFwchI4kEsmjR4+qq6uBZUDgbtq0KTY29uXLlygwBgEa4sRYhIakBBE7K3ztCtxOwEV3IZvM6olEX4NCoWzcuBHCBUAuFy9exDDMzc3t+PHjbW1tMplMoVCAWoOYw927dx0dHVNTU1Uq1bp16zAMGzNmDESUbMH9dISUeEzEaDSSSCSpVJqQkBAbG3v69OnS0tKxY8f+8ssvs2bNwjDsjz/++O6773Acd3Fx8fX19ba0KVOm+Pj4wImVlpaWAQMGCIVCpFXQB7PZzGAw9Hq9mdCIJ2jsxpk6OghDPFtFVF/oA4PB0Ol0qH9kyOM4zmAwTpw4MWbMGDAnIOw7b948MpkslUolEgn6C36/VqudMmVKbm7utWvXBAJBREQEhmHPnj3r2rUrGuSncVrZXiAvYCV37NjBZDJPnDhhMBi++eabyMhIsVgMl12+fFkgEAgEgiVLlnTr1o3FYsXExKSnpyOBIBaLJ06cCDoEYKVa4gBAUKtWrQJxAdSEfAcaQdcTmZ1mz8uwFSZ2PYvly5d7enoS+wfc4ZbQ0NA3b96gwz4ikSgmJsbZ2dnZ2dnLyys8PBwUxo4dO+RyuUQiuXTpEpPJhOMTKSkpZDL5u+++Q/EEnOCwWYOLbGClUhkREREUFCQUCj98+BAWFrZ+/XqwWMHzO336tLe39+LFi/v3779gwYL6+vqWlhYIHahUqoyMDJgDCn0ik5ZOp0dFReXl5XXp0oUoiJGiQ+AiSkTRLyKzW+lGuxKDSqUyGIyHDx+OGDGCanEIiQca4d+ZM2fK5XIA12Qy3b59+/Dhw7BXtH37dgaDMXbs2JaWFqVSKZfLm5ubBw0aFBQU1NraCkD37NmzubkZlqedzDXZ7AuB/L516xaFQpk9e7ZWq923b5+Xl1deXh5oMLAT5HL577//7urqyufzX716BY4cXPD+/fvIyEgajYbOcKNZQVu4cKFarZ4xY4aVkgGwaATjH4Cg0+lOTk4+Pj4xMTEjR4787bfffHx8iFRv6zKQSCQg5G7dusnl8q1bt6KjuET+JZPJNBqNx+NdvXoV+BWse5VK9eeff/L5fDc3t379+gmFQrQVotPp9u7dy2QyMzMzZTJZYGAgl8uF4Al4w4hGrWPpcPjbYDCcPXvWbDaPGzdOq9WeO3cuJCQkKioKiAjon8FgLFiwYOHChSQS6cWLFyTC4eELFy6Ul5cTJaCVVO3evTuFQlm8eLGXlxfwka3QRPK0f//+J06cuH79+o0bN7Kyss6dOxcUFNTW1oZ6s3syGSZCp9NXrFhBpVJDQkJoNBqRYBEzkclk8OkNBgOVSkXj8fT0VKvVHh4e+/fv5/F4xHuHDh3K5/OvX7/O5XKHDRtmMBhu3bqFYRiZTEYC3Ww2W3to4LHU1tZ6eHj4+PjU19c/fPjQ2dl527ZtsDJPnz4dN27c6NGjL1y4UFJSUlRUNGPGjKlTpxqNRtCntbW1Xbt2BSZFljxRoWEY9vr1a+jt8OHDLi4uQL8okkukxMjIyNraWrR/BT7Vtm3biDKaKBPgcSBMqVTqggULFAqFRqN59+4dn8+3DWUgUePi4nLp0iUgW51OJ5VKBw8e7O3tffv2bbCIZDJZRUVFbW2tRqORyWSpqakBAQEqlers2bNsNhskA/E0gcFgaJf0hczb8+fPYxg2ZcoUuVy+fv16V1fXnJwcEOdxcXFdunSBVBA+nx8SEpKVlVVWVqbT6SAynZGRwWaziToHeUoweQaD0draisKPBw4cAM1GjOcCszs4OEydOvXrr7/Oy8tDMVm9Xp+dne3g4EDsmRhXo9PpsFqzZ88WiUQAllwuDwkJASlMtwlRwvUDBw7UaDQApUgkGjp06JEjR+Ry+Zs3bzIyMlJSUry9vRcsWAA+VEZGBoPBePLkSX19vbe3t7Oz89OnT1GICqiBTOQjzLLBd/v2bQzD+vXrRyaT79y5ExwcHBgYaDKZCgsLCwsL9+7d+8svv7i6un711VdUKvXo0aMBAQFgvSmVyhMnTpjNZiRkiQ4o/Ovm5sZms5F+mzNnDtAvkhtEBhSJRMXFxVevXoVgJrQePXosX76cyIBW56I5HM62bdv++OMPR0dH+IbFYvn4+FgpNKJgwXH81atXDx48ANHMZrMPHjxYX18/dOjQxMTEpUuXCoXC9PT0GTNmgHgZNGgQjUZ7+PAhj8cLCAiQyWT5+fkwHjSMdk4EUEdLS0vXrl3JZHJBQUFRURGfz587d65CoZDJZN999x2GYZGRkdHR0SkpKZWVlUOHDl21ahWQocFguHLlChguROuKaBU5ODj06NEDrS2oQb1eX1ZWlpqaymKxUGQLOawMBsPNzQ1OFoE1otVqL1++DNYIMW5Jp9P5fP78+fPhFKmVvz9p0iTkFhIdEBQ/AmYFFlQoFFevXnV0dOzXr9/27dvz8/NVKhV0BdwjlUp79uw5ZMgQuVy+efNmDMOmTp0KvgY6nkMlmuImk4lEItXX11dUVPB4vODg4IsXL8KxTliKL7/8kkQi5eTkvH37trq6uqCgQKFQLFu2zGAwkEgkKpV67tw5jUZj6xEgDU4mkyGtyWzJjCaTySaTKSAg4MiRI7m5ufv27Xvw4AHYNMABNBoNADUTcjzq6urMhBR8Mpns6uqampo6b9680NBQ0EtU6qe0cRzHYQvdbEnXstWBGIbdunWrtbWVy+WazeaYmJjg4OApU6bMnTsXx3EKhWImZHMzGIy4uLjMzEyNRhMdHc1kMsvKyjQaDYPBQPNtJxaAfuE8JezBvHz5EhwEWNuwsLCffvopMzPz6tWr33//vUAgiIyMTExMhHsh1olYwcr7Qo3FYiHokRkLIPbr1+/o0aNHjx4FzwcuMxgM3bt379KlC1ExBgUFEVVZUlLS1atXf/nll/DwcNQb0fDAcZxOp+PtE0CIDYah0Wju378PN/r6+iYlJb169Qp6AzsP0Q2JROrTp49IJKqpqQkKCnJxcWlubkbuKPT5qVIImvDr168xDEtMTDQajbm5uR4eHm5ubmhWGIY5OTn17NkzMTFx1qxZarWay+XCPmheXl5LSwuJREKix0qgwwcgAauJocZisUaNGsXn88HfM5vNRqNx/PjxXC6XCG5MTAyTydRqtWQy2d/ff8+ePQhWuyIVs+TCkWxcajQAuP3JkycTJ04EWQESj0r9VAmISDTdunUjkUjv378fO3asl5dXWVlZY2MjkMV/Ja/VAmq12oqKCgqFEhoa2tbWVllZGRAQ4OLiQrwGKShXV1dfX18YFoVCycvLgwlYESwaFjwVQgq2JjAx8tC9e/fk5GSQuXw+f8yYMUgywgJ7eHhAOqTZbE5JSYmOjjYTUuDMhAACaiaTyWqyyNKABuMB5qNQKDiOCwSC4OBgIrKYhcVxHPfy8uLz+YWFhUwm09/fX6/X19bWIgI3m81kK+0sl8ubmpqYTGZsbCycnvT396fT6WjEthCjNX/27BmR2Ym2LULNbDbL5XIrsjLbOBE0Gi0sLAy6TU5O9vT0hGVDy4Pj+MCBAzEMw3E8KiqKuIQ4YXcVJ2Stq9Vq4siRN/xfzW7ROrW1tZAsaEUZxK5gGZhMZnBwcGVlpdFoTExMxDDs48ePiGJwHP+UzQUYKZVKkUgEhktNTY3RaAwICECRDqy9wEKPwXFcJpPBYTorIWsmWHjwb0tLCyIlvH1BCuQyASnp9Xpw5IAxifQO4NJoNKPRCJSCvrcdHth8IpGIqACJZhlaDJPJpFAo3r59a7sRjvpEcQ8ajRYcHNzY2KjX67lcLoZhNTU1xKVtVxIAYm5yuTwoKMjZ2VkkEmEYFhQUhFvyvYlcTCRGs9lcWlqqUqlwHCfyO3FJ0OfGxkaDwUCn04nQo6FjGAY09eWXX3p4eGRnZ586dQp0EbgJZEu8AsfxPn36eHt79+rVy2w2EztBY0PfQG4B8UviMqBJwfjhcDkaD7GR2jdvb+/79++r1eqIiAg6nV5XV2c0GpFSsS5m0dzcbDKZ3N3dqVSqUCikUqkeHh6IahCUtk9taGgwGo3E3ohDJ/6rUqnq6uqCgoKIXyKaQsKntbV1zZo1Wq2Wz+fjOC4UCh0dHQ8fPgznNiDyP3ToUJPJ5OzsjLVXTejf/7InmVxfXw/iyGxRSsTBW425oaGB2A9aKvQlGrOLi4tcLlcqlUwmk0qlisVisErhgk9VSuCpsLze3t4kEqmtrY1OpwPBE8F9+fIlkUKB9CDUS/ySRMhcJcprHMfz8vLM7RtxGHBxa2urv7//vHnzYmJiIBfdbDZ7enr6+PiIRKJLly65u7tHRUWByUgUGkRcEJTv379XKpXm9ure6umYRXy1traiKSB+FQqFJSUlqE94BJfL1ev1CoUCRBkc3kFLZW0tiMViuAfDMIlEAqEAkI86nQ7HcchukEqlmCXQDixZV1eHtddymE1Dw7p37x46BY/QRA0jaOSGhobLly+LRKK4uDhYmKqqqunTp+/cuXPatGn5+flWaFo9F6GZk5ODpo3Z43f0PYVCAfmGWXJ3IVxw7dq1X3/9FeUDwfBA6EskEvBCIfrxaZ2I48AwTKFQ4DgOtpdUKjVbfCSdTicWi8Vi8aFDh4qKim7fvt3a2trW1oaMR4PBQETWboMHUSiUhw8fglqzeroVpRcUFEilUj8/v5ycnBMnTsBJy8LCwvr6ehKJ9Pz587/++gu8yo7Agq40Gk1WVhZcRhxhR/gqlUqkbFUqlUgkam1tzczMvH///vPnz5uamsRiMRI4GIY1NjZCPAgjKHwSVMQjEYo3AVjOzs5msxn2neCChw8f7ty5U6/Xl5eXm0ympUuXCgQCb2/v7du3h4SEgGa3kq12Rw/Pam5uvn79+oIFCzoic/hGqVReunRp2rRpIpFILBbDEUoul9ulS5eamppx48atXLkSfFy7NAvf0+n0S5cu1dbWAjURJQ/W3vhBZK5SqQwGA1z/999///nnn1qttqamBsOwtLQ0LpeblJS0d+9eEAUYhikUCgjRIQqDbq3FAmbZoEQsbDab9Xr9sGHD5s2b19LSYjQaaTQaMM6aNWtCQ0PNFvsc7RhZqQusfZzBbDZTKJSMjAyxWEyyFFCyMjlJFtuZQqHcvn2bTCbDYctnz57duXNHoVB8//33f/zxR5cuXcyWCJyVMWM2myEHSKVSbdmyBXk3WKf1hOAuoEEYRmpq6tixYxsbG2H9pFJpeHj4pk2b6JYqDRiGoWNEYOeg3toxCIlEAuUAMgV5kxDSnzNnzldffQW8gOP44sWLIaADD0BhESKIWHv6JREsWUj0UavVxFtswcUwrK2tDdSss7PzpEmTHB0dxWKxv7+/o6MjMRhPVFC4ZZdQq9WuWLGivLyc+BRHR0cPDw9bZNGwoWcILTKZzNWrV8fGxgL1sNnsTZs2+fj4gGkEiAGjYxaD2tpaQA0WDaQyCvBA02q1L168cHR0nDp1qpubW25uLnoAmUzm8/m2ssyWOtAkSSTS+fPnN2zYAHqGSFnoxuXLl1+/fv306dOnTp1ydnaOiopavXp1t27dyGTy2bNnJ02alJycPH78+KqqKsxSPsNs8QUgNrhly5aTJ0/ihFMZZrMZKrR0RLwYhrFYLIqlqgWGYU1NTUVFRUOHDp09e7bRaHz37h2aNZAan8+HuB1aEpjpp/q5MDJkJ0CMDjZ6YcQymczJyenWrVuRkZFv377NzMxUKpVgY5LJZB8fHzD1bcG1Iiv0JYZhBw8elEqlP/30k7u7OzA4PAtcIIFAIJVK4bgqVF768ccfCwoKcBx//PhxQkJCUFDQ/fv3QUaZLGlJsEJCoRDSLeEns8VQY7FYaWlpr169wizVbYiLCjJKIBAARnDLmzdvvv322+XLlzs4OPTr16++vh6FKSCs4+zsDOCy2WxrcBEp4Tju5OQEIzObze7u7rAPCuzp7Oy8e/duFotlNpu7du0KPgnJ4l/6+vqisxdW4BJFMG4pq4Ik46lTp0pLS9etWzdgwACosQbft7W1SaXS3Nzc2tra0aNH0+l0qVR69+5duLFnz54SicTd3Z1CocjlcoAPfpJIJPfu3du5c2dpaSnRw4Ygb2Ji4oABAyorK0mWuAfxXkATNoTQjcOGDRs5ciTwe2pqqsFgQHTd3NxMo9G4XC7srXE4HBT2/US5qAHlNjY2Go1GDodjMplA7cBQWCwWYnwmk4lIEqiMTqdb2ZJmgoEVHx9vMBgKCgowgrMAK/ry5cvp06dDQl5iYqKDg0N5efm2bdt8fX27d+9+4sQJNze35OTkCxcu6HQ6Eok0cOBAPp//4sWLgICAlpaWH3/8cdWqVcHBwQaD4enTp0eOHIFSLVaqFSyH6dOnczgcEGKpqalv3rxBbA4DI5PJQUFBmMW0IJFIHA4HcSQIWcDdZDK1tLRwuVwmk/nx40e1Wu3u7k70pKhW9OXm5kaj0erq6hQKhbe3N4ZhdXV16Gr0FzVE8j4+Pu7u7jKZDE2GqNDMZvPAgQOjoqLmzZtntlTEIwpotVp9+/btO3fuODk50el0mUxGp9OZTOaAAQP4fP7ly5eXL1/+r3/9a9++fXQ6fdCgQTdv3uzevfubN2/GjRv34MGDlJQUT09PSOGF8eA2ew0GgyEoKAjKWIBO++6770aOHGk1VAaDAeEUkk0j8h/oibKyMh8fHxqN1tTUZDabBQIBSOH/kqMV/7q5uTk7O8NOMtQsKi0tJXZt+yR4DHAcfAN7VkiHwJeenp7Dhg1LTEy0sr2QxgfhI5fLIUtt0qRJ8+fPv3jx4v79+3v37q3X6xcvXjxq1KigoKDnz58HBQVFRkZSqdS1a9empKSYTKbm5mZk25ltbEFgo759+3p5eWEY5uDgAJalRCLBLJ4YXCYQCKCkG9FRJpPt2KxGo7G+vt7X15dGo1VUVGAYFhISQnxiu3twHAeW0el0xcXFoaGhdDodKtOR2ofpiPjilrOnffr0gUEQfVkYGYlEYrPZTk5O8+bNwzAMAKW3zzRD66TX63k83qJFi0aOHOno6FhYWHjmzJnNmzfDgcmwsLA+ffoYDIZ79+799ttvoaGha9eujYmJAVojE4KW5PYBTAqFAkaC2Wzu0aPH4sWLX79+rdFo0CxgAH369KFQKMSQI9ZebSAKa21t/fDhQ3h4uNlshtwggUBAhOiTOQJq2tXVNTAw0Gg0VlZWRkVF8fl8ENXI/ESwEuUmtKSkJLTlg8YRFBTk6OiIYRiNRsNxfOjQoV5eXmBsDxkyZODAgbbrYTKZhg8fHhoaSqPRxowZc+TIkZEjR96+fRtya4xG4/Pnz+/cuUMikeBEpZeX1/Lly4kaidx+Vx8gdnFxCQsLQ0YRm81+/vw5lUoF0gOGwzBs8ODBlPYF3IjmBFGmVVdX6/X6hIQEhULR3NzM5XJ9fHzQGpNIJLKV7GMwGEDbeXl5LBYrMjJSKBRasRvQFzJyEb34+/tHR0cjrocOBQLBzJkzWSwWjuMGg4HFYiUmJsL1lZWViYmJSUlJYFwjMUcmkwcPHkwikWpqaubMmSOVSj9+/Pif//wnPT29sbExNzc3IiKCw+HU1NR8++23EB5ETyRCDN+jY5aurq6Ojo5EcVxZWdm/f/8VK1ZApJhEInE4nCFDhlgdFEKUR5QVGIY9f/6cTqeHhITU1NS0tbW5ubn5+fkRzc1PA0JyEHZz8/PzzWZzr1692traGhoazJacNBCvGIY1NjZevHgxLS3tzp078CuNRktOTiYKUAzDKioqJk+eHBkZCYqeTqf37dsXhlhTU/P69esBAwbMnj0brBSYjNlsvnPnzsuXL+fNm1dcXGwwGHr37r1169a1a9eOGTMmIyPjhx9+mDVrFo7jT548mTt3bnFxcVNTE5FtERGQCRF0NpuN/FoMw0QiEY/H27p1KxghMOZx48bxeDw0BZJld8NIqD4N8On1+vz8/NDQUE9Pz4qKCrlcHhER4e7uThzGp519tNrR0dEsFquhoaG2tjYpKYlKpebk5PTq1ctkMlGp1MbGxqKioqysLCj8A2fLYDvLZDINGjQIEgHRDOvq6nQ63cyZM81mM1BE9+7dkSCj0+kgJTZs2LBv376amhqNRhMZGYnjONApzHPJkiV8Pn/w4MHwIDKZvHDhwhMnTrS0tDx79mzatGkLFizo06fPkydPaDSah4cHVL/CMAzOAYHtSSYcgCSRSFQqdcuWLS9evMjLy4OfWCzWtGnTINpNJpNfvnyZlZXl4+MDSp7H4zk7O0N2MoZhKpXq9evXI0aMYLFY+fn5GIb17t0bGbn/RRedEUIn3Zqbm2HT+PDhw01NTWFhYSNGjIDT1S9evIiJiXFycmIymV26dLlw4cIvv/zC5XKLiopAICoUin/9619IZsH27YYNG5qbm9++fQtZGXV1dUBEcORg8ODBly5dWrduXXFx8aFDh0aMGLFu3ToPDw903Gby5MkQhEaHdKCf3bt3g43JYrHc3NymTp0aFxe3a9eu+/fvDxgwgMjU0FVMTAzoD+hKrVa3trZGR0ej0zcDBgyAajhwWmf06NEMBoPL5fJ4PDab7ePjExcXd+DAAUhtfPLkCZPJ/Pvvv7Vabc+ePXk83pMnTyD4iyylT9YCEsNOTk4JCQlkMvnOnTsuLi7x8fFlZWVCoZBOpwcEBMDx2I0bN0KGBnhHYN6CZ52ens7j8UACQImVZ8+e0Wi0wMBAoFY4KIaytnJycn7++We1Wv3u3Tuj0bh169a8vDyVSgVSnslkrlu3DkKamMVkBFKYM2dOfHw8SBhwdvbu3evn55eVlRUWFkYUjvABsqdhsvBrQUFBdXV1QkICKM8FCxZAKQJgjqFDh7LZ7KSkpP3792MYFhoaOnny5CFDhkAP9+/fZzAYSUlJQqGwvr7e398fXA8gXhzVW0BxDXTKMTMzk06ne3t7t7W1/fXXXywW6+TJkyjDWqPRrFixgkKhcDgcJpM5c+ZMmUymJZSnnDNnDp1Od3V1LSwsHDNmjEAggGOQcKyxtbWVyWQSZROQ2MqVK6dNmzZ+/PibN2/evXt37ty5Hh4egYGB2dnZULvK6njZhw8f5s2b5+Pj89VXXz18+LCiomL16tW//vrrTz/9BJyLGqw6j8fLz88nViPIyclZtmwZ8P7o0aPlcjksOSqys3PnTkdHx9DQUCcnp48fP6IaESKRaODAgQMHDsRxHPD56quvEG8BDjqdrh24OI4DOs3NzXBc4fz585WVlYGBgePHj4cSDwqFYtOmTQwGY8WKFRkZGZcuXVIoFBKJBILocHtxcTFkd8NBweHDh9+7dw+WTaVSVVZWUtpXd0dCEPQPlUrt2bPnrl278vLybt26tWDBgn79+k2fPn3Xrl3Xrl07derUli1b0tLS5s+ff+7cudzc3AMHDowcORJCWRR7ZXCRqXvx4kUIRQFGkJ2Qnp7u4+Pz+PFjoBuTpQQCnKr77bffqFRqUlISUAYcPc/NzYU6amazOSUlBWoGwO3oEPF/wUUNx3GU9bBgwQIqlTpp0iS5XD5z5kwvL6/CwkKQqmPGjFm0aFFraytkqN65c2fgwIGRkZFNTU0Q6NHr9XA+OSIioqWlBfZFUIWInJwcojlhBTGZTAbDiMlkDho0aMKECWPGjFm8ePGsWbO6d+8eFRUVFhaWkpKyatWq9PT0nj17Qo1LFKi2gtUK3M2bN4MsQonrly9f5vP5QHfQzGbzoUOHMjIyWltbIYtx4cKFFArl8uXLcrkcijN8/fXXfD6/vLy8rq7Ozc0tLCysqqoKwDUSigy12+9C46BSqZMnT8Zx/P79+zU1NcnJyVKp9Pr16/DrH3/8sXnzZi6XW1lZuXTp0mnTpkGixN69e00mE6A2Z86c7t27l5eX79+/H5IWkcEH2tmKeIn4ItG8cePGw4cPr1692s3NTSqVgkfHYDDa2tpaW1sTEhJ+++23/fv3u7u7o61SK1eCTKj9TiaT8/PzUZ652WwWiUTbtm3jcrmQGwU36vX6nJycFStWjB8//uzZs0qlcv369cOHD6fRaCDcy8vLb9y40aNHD19f34sXL7a1tfXp08fLywvxDXJe7CdWG41GhUIBKmjDhg1CoTAxMRFSpUA4yGSyP/74IywszMfHx9vb+8qVK8ePH/f09ISad8BQkOHn4uJy7949OFoLhDB48GCwE+zSF0rUi4yMFIlEKHUREuYrKysrKyshsQZydqGCHkZwW5ByRlsv6Kivv79/cXExmAQqlWr69OmOjo6///47jA1isvDajz179kRERLBYrD59+ly8eLGqqgpSmVUqFTDl4cOHpVJpt27dKBTK9evX9ZbiZ0Qw7YALeWgqleqnn34ik8nR0dEfP37cs2ePg4PDiRMntFotqlkZGxt77969b775ZtSoUbBjmJ2drbcUcFapVL///juNRktMTHz79i0UFHny5AmLxbLaa7ICF+Do3r37sWPHgDdRBQpiuREI8dy6dSs4OBjrYD8J9QbgMpnMn376CW5ct24dg8FIT09va2sDy0ehUOzfv79Pnz51dXVKpbKsrGzTpk0xMTF8Pv/Zs2dggdXU1MTExISGhoLTSCaTo6Ki6urq/iE9FYELJa5UKtWHDx/c3NyoVOqhQ4eg0549eyqVSqlUqtPpDh8+3K1bt7Kysg8fPiQnJ7e1tQEdPXz4ENIKgLKmT59OJpPHjh0LI4Yac8DgVvgSPWnAhcPhDBw48NKlS48fP1YoFKDNobrEo0ePsrKyJk6ciI63dt4VQjk8PPzDhw9HjhyBM+7V1dUaS7t37x6Hw1m0aJFIJKqoqKioqJBKpdXV1ceOHROJRJCnunfvXjqd/sMPP8hksuTkZAzD1q9fj/LzrcElhn8Q5RosBZMXLFhAIpESExObmpoOHDjg4OBw9uxZvaWS3cCBA2fNmgWFKmQy2evXr/v37w/1odAR+5aWFhBYX3755aNHj3g8nlUiiq3+QQCBCeXg4ODp6Tlx4sQpU6a8e/du5syZKSkpXC7XwcGBRHi1UUcS3MpsYDAYqampEAd49+4dqrqg1WqXLFlCo9Gys7P37dvn7e3N4/EWL14MxVigRlpLS0t8fHxgYGBpaWlBQQGTyXR2doZKsLr2xbg/gWsXX/BrCwoKgHgPHDggkUgSExPDw8MVCgXYVc+ePdu+fTvIxJs3b8LbHKBA14cPH4CFdTpdU1PT6NGj4d05xPoJxJy8TvBFeU9kMhlt2dnVh//YoEMMw/z8/CDeiNKa9Hr9qVOnqFQq+BHTpk2bOXMmCARgRJPJdODAARaLtXXrVq1Wu2jRIhKJtHz5cvBN9JYaxkhpGY3GDou2gYOI1jMmJqaxsfHs2bN0Ov3nn3+GWhVAnlKp9Mcff4StpCdPnhQWFvr7+0NBTIOlnGVjY2N6ejqDUM3qc8DFCOeT//HKz2mwVJGRkS9evACaAFCKi4vXrFnT1NS0Z8+eHTt2FBQUtLW1LV++PCIiorKyUi6XKxSKpqam0NDQ7t2719fXv3r1is/ne3l5ocxK+5VC8A4aigOVlpaGhISAKlCpVAMGDPD29i4pKQHSbmlp+fLLL52cnFJSUpydnVevXg1mw7/+9S/iOun1+paWlmXLlkGiDxIL/4iXlaX4P/1qdSXotCFDhqCK8cBYr1+/TkxMHDNmDGg2gHLRokX+/v4XL15E3try5ctZLNapU6eg4AWLxfr111+BxRHlGggFFO2DayYUcgJhtHPnThaL1aVLl7dv3z548IDNZn/55ZcSiQQKLxw6dOjEiRMymWz37t0eHh5cLrdHjx6vX7/es2fPL7/8AnMAi12hUOzevdvd3R2SoToRl7bYdaSyrPZH7PYDspvD4XzzzTdwhBZGpdfri4qKEhISEhISysvLHz16dPPmTTBFzpw5k52djQpH3L9/n8VijR49uq2tDWrV9u7dWyQS6SyvqCAKBBOxUohdyWC2nFgBpTR06FA6nZ6amqrT6RYtWgQV8BUKBSpmAfbv8+fPr127Vl5evm/fPjg+AhYllJqCsMDt27fj4uJA8naOL4olWQFHRNwKX7sEC4H8jIwMqHMM9AWDOXbsmJeXV/fu3Xft2hUVFXX69GmZTIYKCgLQ1dXVMTExjo6O2dnZVVVViYmJzs7OmZmZcIGtREXN2v21AhdR+L179+DNJBcvXhQKhXFxceHh4cXFxagepY5Q+//8+fPu7u5paWnNzc0qlUoikcAgDJaC+5WVlYsWLeLxeGAh/a9USWq/hUPcOLAiWLDnxowZ8+rVKxgkcnyfPn367bffisXiCxcuBAYGcjic+fPnSySSH3/8ERKOQaMoFIrFixeTSKT169dLJJIlS5ZQKJTp06eD7QWGk7n9Edh21kJHYhe3bCCD+lqzZg2ZTIYsgLt377q5uU2cOBGqV+gs5YFNJlNJSUlYWNjkyZPhRSVSqfSrr74CzxiFS3SWAm5Dhgxhs9lWnjfKbSTutXTiI6BESPiVbNlAYzKZCQkJp06dUigUyHQBVQEVIRgMxsGDB/V6/dWrV319fYcNG7Z161YOh7Nv3z6wL9Vq9cWLF9lsdp8+fSQSyYULF9hsdmhoKMSmbb0Ga3ARiB3Bj8IcDQ0N8fHxGIZ9/fXXUK4EAuEoggcnL5cuXRoXFwc5MXq9ftmyZc7OzmfOnBEKhfn5+QhcUBQymezKlStDhw5FThQKotv14qxI2xZfRMs9evSAEl3wLBSXkUgkT58+BXdr/PjxUMpKpVKdO3eOw+GQyeR169ahE86vXr3y9/fv0qVLaWlpVVVVYGAgi8U6e/YsiIuOCmX+M+UirFGAUq1W5+XlcTgcEol08uTJtra2KVOmMJnMgwcPArgQw58/f35iYmJtba1YLAYNu2PHDpFIlJyczGKxlixZAhUgESmBbnnz5s3q1avDw8OtirvahhCtkCUadjQazc/Pb+7cuXfv3gVqRZhCQE4kEkEZfX9//yVLlpw9ezY8PDw4OPjVq1dKpfL48eM///wz2KBQF6FHjx4eHh737t3T6XTDhw8nk8k//PCDUqnUWgpd2YpTa3A7lwxGwtthVCrVgQMHqFSqt7d3Tk5OdXV1v379XF1dofgdBBtfvXoVERERGxvbv39/R0fHHTt2gM/u5OQ0derU8PDwpKQkyNQHLYesGYPBIBKJsrOzN27cOGLECD8/P8j7t0p/RnRKtRS18fDw6NOnz5IlS27cuAGvSQHSI8YiWltbm5qaZDJZVlaWl5cXm81OTEzk8/lcLhfIvLKyEgI6oJybm5vHjx/v4uICBUe/++47KKVnNXKj5bUits1kMnX4mkTi2QMkNEAEL1u27Pjx4926dTtz5oxGo0lLSxOLxWfOnOnRoweQVXFx8e+//y6RSKZPnz569Oja2trx48fL5fKDBw/W1dUtWbLk+fPnISEhra2tAQEBEMqDBoOhUChqtVoikdTV1b17966qqkokEkmlUoVCYTKZqFQqm812dnZ2d3f39PQMDQ0NCAjg8XiQDQ3boBjhRGldXd2uXbsgiDxy5Mhvv/32woUL33//fXJy8tdff33lypW7d+9KJJITJ0706NEDx3EymaxUKpcuXZqVlbVp06aFCxeeOXMGTtJfuXIFIoW2MgqzOTiCYfaqM+Ht7QlkvoG7pdPpWltbR44cyWaz09PTRSJRXl5eWFhYYGDgkydPUG0AlUollUrBVJg+fbqnp2dCQoKXl5e3t3d8fLxUKoXsaZSIbfUscK+BV1DRL9gHAXcTxgPX2DpIaC+gqqoqKSnJ1dV17ty5sFsxa9asurq62bNnczic27dvG43G2trad+/eaSw191tbW9PT0x0cHNatW6dQKG7cuAFvF87OzoYLjDbvhrDbrGWuLdC2DSD+8OHDgAEDuFzuwoULpVJpXl6eQCAICAi4ceMGTBUFBk+fPg2FriorK0eNGjVs2DChUKjX64cOHQq7ezBcrVbb1NRksrhzOkLRPRBwVmU+jYQ3nqGdG7QGYFzrdLodO3ZQKJSjR48qlcqWlhbwrE6fPg21Yrp27QpHDmF32WAwNDQ0TJw4kUqlzp49u7W19eHDh4GBgTwe79SpU2gAHdEfEVbc7galyUaCWH0JdGEymYqKiuLj4zkczoIFC1QqVXZ2tkAg4PP5f/31F+yFAE0dOHCAx+PFx8f/+uuvffr06dOnj9lszs7OdnZ2zsjIACNPp9Ndu3ata9eu79+/b2xsrK6uhntRaM0WVuSSgDLQ6XQymezx48cbN25MT09ftmzZ48ePoQAUh8OB6jMajebx48cuLi6LFi1Sq9XXr1//4YcfwOWFMn+lpaUDBw6kUqlpaWmNjY0PHz4MDg7mcrn79u0zWt721pFmsoueHcq1ghu392YDEOr5+fnR0dEODg6zZs2CIFlISAiHw9m8ebNYLEbvOXn27NmwYcNYLJanp+fly5dxHE9NTY2NjW1sbARwFQrFvHnz3Nzc6uvr165dGx8fX15e3tDQcOLEiby8PKSaAU1YYABFq9Xm5eVt2bKlubn53//+N4vF8vf3/+KLLwICAtzc3C5durR69Wo6nZ6ZmQly5uHDh05OTqtWrQLvAFVBU6vVT548gVTuBQsWiESiBw8edOnSxcHBYcuWLTCLf7RqrcC1ptx/XAor+tXr9SUlJV27dqVQKFOnThWJRO/fvx80aBCZTP7iiy/Ky8vBXAduLS0thQPrxcXFTCbzt99+A3pRKpU1NTW+vr7p6elSqbRXr169e/e+f/9+fHw8k8ncvXs3stj279/fr1+/6urq7OxsJyenLVu2KJXKs2fPent7v3r16uHDhwwGIzMzUy6Xl5WVxcTE9OjRIzc3183NzcfH58SJE1lZWX379vXw8Hj+/DmILNTgrRBMJnPr1q1qtfratWtubm4ODg7wL6LZjlwBu0B/olxb1DtB1grfysrKvn37kkikvn37FhUV1dfXL1q0iMFgCASC8+fPI3xRDBOSC+ClXGCBnjlzhkKhXL16tbS0FCo+eXp6hoSE3LhxQ2V5N5Fer9+0aZO/v39VVdXjx4+pVCqLxTpy5MizZ8/8/Pzu3LkjkUgCAwOheLBer1+1apWvr29xcfHNmzdDQkJgk7Rnz563b9/WEJpQKFy4cCGTyQwJCYF6ohkZGfD6lIMHD4KxbBsF7whQK41lXYW0E+Frty+D5cVdycnJZDI5NDT0ypUrYrH4+PHj8FaQZcuWwbs8AVmj0SgUCtetWxceHh4XFwdvT50wYUJAQIBYLM7MzAQnwsXF5erVq+BHoQ20H374QSAQVFVVFRYW0mg0X19fDw+PAwcOhIaGHjlyRKfTpaWlJSYmQiGxtLS0+Pj41tZWlUolFApzcnJyc3NbWlq0lsK+arU6MzMTXi2Xmpr6/v17sVgMhawDAwOvXbsG/ejbv4yyI51kdYEdyrW94nPoF50jWblypaOjo7u7+7Zt20Qi0du3bydOnMhms3v16oXGqrO8JfX9+/f//ve/X7x4UVhY6O7uvmLFCo1G8+OPP0LCG4/H+/7775FJD4Jl9erVAoGgsrLyw4cPYCqBB8Xlcjds2IDj+J9//snlci9evLh+/XovLy8ocqe2vGEJba+oVKqSkpL58+dzOBwfH5/du3dLpdKSkpIJEybACaWXL18iaWBreNnCittYBO3A7WQdOsHX1N4mlclkx48fDwkJgV3VyspKmUx2+PDhmJgYT0/PefPmvXjxAm3lolZaWrpo0SL4aezYsfAilKFDhwYEBFRUVBC9rBUrVggEgg8fPgiFQi6Xu2nTpoKCgri4OAcHh+nTp5vN5qKiIjab7e7uHhERAUVDUXRRb3mHanl5+ebNmwMDA2k02ujRo/Pz89Vq9aVLl6KiohwdHadNm1ZbW6sjvHrHFoTPx/ofxMI/doQsdmTY5ufnT5kyhc1mR0VFnT9/XqlUVlRUrFq1ys/Pz8/Pb9myZVAhDJmxyGjTarUrVqxYuXKlSqWC3dl169bpLO9J1mg0y5Yt8/X1LS8vb2lp8fT0/P77741G4+3bt/38/IYPH242m+GaM2fOoNfvIStYp9MJhcL9+/fHxMRQqdSgoKC9e/dCdZNly5a5uroGBQXt378fXg5q16ntiOw6wQ2z+h/v1HKw25DhiSYDR0bgiGN6enpxcbFOpysqKlq8eLGbmxtUgXvw4AEy19SWVwkhQ10ikWzfvv3HH38EtgBwN2zYEB8fDwwxaNCgvXv3wqNzcnIeP35MHCpyFEElNDQ0/PrrrzExMTQaLSAgYPPmzR8/fpTL5WfPng0NDWUymV9++SWcsSRuK3QC7ucgg9sGbsyE9M7PlBW2WAPKlZWV8+bNY7PZfD5/zZo1dXV1JpOprKxsxYoVzs7OVCq1d+/eu3fvhgwukMXII0DsTOQMMN20lgK+gAJaV+RTEKOLN2/enDdvnqenJ4VCCQ4O/uWXX+rr61UqVU5ODiRJdevW7dq1a7ASVhs2dsVg5z9ZXWN/g9IudnavtLukJosVAQH/cePGcTgcLy+v9evXw0FMIKWEhATY2hoyZMjvv//+6tUrMH307ZumfdMSTt+gQ0QGy5uXlEplcXHx8ePH09PTBQKBg4ODq6trcnLyxYsXYWHu378/adIkGo0GcgAKwtuaBB3N93+6pl3NcjMh181ueIz4q9mShGk3qIZZ8lIwDINTTAcOHMjOzoZ3CKSmpsbExBgMhtLS0ps3bz569KiystJgMHh5eSUlJcXExISHh/v6+vL5fBaLRdyMQPEn9ESNRgPl/ktLS1+/fp2fn//x40eNRgNFWoYMGZKamuru7q5Wq3Nycv7666/s7GxfX9+ZM2d++eWXPB6PTCajfSYSobwQmlQn3xD/JcLy6XpT+3xk4jOIkFn12AnoVg23lJdXq9UvX748duzY/fv3DQZDfHz81KlTk5KS/Pz89Hp9c3MzpCdAzF+r1VIoFEdHRy6X6+Tk5OXl5eHh4eDgQKFQcByHDXA48tXU1AQnWQ0Gg5OTk7+/f2xsbI8ePfr27QuZwWVlZdevX79y5YpQKAwLC0tLSxs3bhxURULBeNvpdA5l5xd8iuubCPFcOxHJ9utphew/nhbA2ldDAlzKysquXbt27dq1mpoaV1fXnj17Dhs2LD4+XiAQQLGj5ubmxsbGkpKSsrKyuro6kUiErAudTodhGGSR0Wg0iOr6+fl16dIlKCgIStSx2WyJRNLY2PjkyZM7d+6UlpZCCtHkyZMTEhJcXV3RyK32OIiT6hzrzuH6dJmtWLB7s93uPhNcu62lpSU/P//WrVtPnz5taGig0+lBQUE9evSAQkze3t4sFguOmYK+QkEyMpns6uoK4ELyGOQ7KBSK1tbWoqKiZ8+eFRYWCoVCCoUSFRU1ZcqUQYMGBQcHA49SCKXuMHvc2QlwdqfcyTL8F1xb1P4PONo2Yr4H+ox+wnGcRCJBaeXnz58/ePCgvLxcoVCYzWYPDw8+n+/p6enq6uri4iIQCCBHicFgkMlks9lsMBjkcnldXV1TU1NjY2NtbW1zczPUvONyuZGRkcOHDx88eHB0dDTaRbaaxT/O6DP5GC2JLWJ2ZC72v8gXqwtIhDIAtmO1K57Mlrq9ZDK5oaGhpKTk1atXL1++fP/+fVNTk1qtxi0pmUT5aLbklZFIJCaTCaf/4uPjY2NjIavW6sxD5/qjc0ztgtgRCbdbP5NNbc6Onmo7LFtw7T6pIxaz7RO3GNpAnjKZrL6+XigUSiSS5uZmtVqNWd6cAS/95XK5bm5u8GZQonxDmNqeFOkcmk6gsKXQTswquOz/AV2Y4wa8xm7qAAAAAElFTkSuQmCC';
const TEMPLATES={
  'etiket-lama':{name:'SPPG Label Utama',info:'Template utama label SPPG dengan tabel 5 × 3.',count:15,showGizi:true},
  'sppg-2':{name:'SPPG MBG  ',info:'Template SPPG MBG .',count:15,showGizi:true},
  'sppg-3':{name:'SPPG MBG   BATCH',info:'Template SPPG MBG   Batch, ukuran 75 × 50 mm. Cukup isi logo, nama instansi, teks batch, dan jam batas konsumsi.',count:0,showGizi:false}
};
let state={instansi:'',alamat:'',menu:'',s2Menu:'',batasTime:'12:30',alertLeft:'TIDAK UNTUK DIBAWA PULANG',alertRight:'PORSI BESAR',logoData:'',edgeData:'',gizi:Array(15).fill(''),template:'etiket-lama',s3Batch:'Batch',s3Time:'12:00',printQueue:[]};
let typography={top:100,middle:100,bottom:100,family:'default',bold:false,italic:false,underline:false};
let size={width:75,height:50};
function $(id){return document.getElementById(id)}
function esc(s){return String(s??'').replace(/[&<>"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]))}
function today(){const d=new Date();return d.getFullYear()+'-'+String(d.getMonth()+1).padStart(2,'0')+'-'+String(d.getDate()).padStart(2,'0')}
function formatDate(v){const d=new Date((v||today())+'T00:00:00');return d.toLocaleDateString('id-ID',{day:'2-digit',month:'long',year:'numeric'})}
function formatTime(v){return v?(v.replace(':','.')):'........'}
function readLabelSize(){size.width=Math.max(35,+(($('label-width')&&$('label-width').value)||75));size.height=Math.max(25,+(($('label-height')&&$('label-height').value)||50))}
function applyLabelSize(){
  size.width=Math.max(35,+size.width||75);
  size.height=Math.max(25,+size.height||50);
  const w=size.width+'mm';
  const h=size.height+'mm';
  if($('label-width')) $('label-width').value=size.width;
  if($('label-height')) $('label-height').value=size.height;
  const vars={
    '--minum-rs-label-width':w,
    '--minum-rs-label-height':h,
    '--sppg2-label-width':w,
    '--sppg2-label-height':h,
    '--sppg3-label-width':w,
    '--sppg3-label-height':h,
    '--print-label-width':w,
    '--print-label-height':h
  };
  [document.documentElement,document.body,$('sppg2-preview-inline'),$('sppg2-print-target'),$('sppg3-preview-inline'),$('sppg3-print-target')].forEach(el=>{
    if(!el)return;
    Object.entries(vars).forEach(([name,value])=>el.style.setProperty(name,value));
  });
  let style=$('sppg-dynamic-print-size');
  if(!style){
    style=document.createElement('style');
    style.id='sppg-dynamic-print-size';
    document.head.appendChild(style);
  }
  style.textContent=`@media print{@page{size:${w} ${h};margin:0!important}html{width:${w}!important;height:${h}!important}body.sppg-printing{width:${w}!important;height:${h}!important}body.sppg-printing:not(.printing-sppg2):not(.printing-sppg3) #sppg-print-target,body.sppg-printing:not(.printing-sppg2):not(.printing-sppg3) #sppg-print-target .minum-sppg-template,body.sppg-printing.printing-sppg2 #sppg2-print-target,body.sppg-printing.printing-sppg2 #sppg2-print-target .s2-label,body.sppg-printing.printing-sppg3 #sppg3-print-target,body.sppg-printing.printing-sppg3 #sppg3-print-target .s3-label{width:${w}!important;height:${h}!important}}`;
}
function toast(msg){const t=$('toast');if(!t)return;t.textContent=msg;t.className='show';setTimeout(()=>t.className='',1800)}
function showSection(id){document.querySelectorAll('.section-view').forEach(x=>x.classList.remove('active'));$(id)?.classList.add('active');document.querySelectorAll('.top-nav-item').forEach(x=>x.classList.toggle('active',x.dataset.page===id));$('page-title').textContent=id==='print-settings'?'Pengaturan Print':'Label SPPG';if(id==='print-settings')updatePreview();window.scrollTo({top:0,behavior:'smooth'})}
function saveData(){readForm();readLabelSize();localStorage.setItem(KEY,JSON.stringify(state));localStorage.setItem(KEY+'_typography',JSON.stringify(typography));localStorage.setItem(KEY+'_size',JSON.stringify(size));toast('Data Label SPPG tersimpan')}
function loadData(){try{const s=JSON.parse(localStorage.getItem(KEY)||'{}');state={...state,...s,gizi:Array.isArray(s.gizi)?s.gizi.slice(0,15):state.gizi};while(state.gizi.length<15)state.gizi.push('');const t=JSON.parse(localStorage.getItem(KEY+'_typography')||'{}');typography={...typography,...t};const z=JSON.parse(localStorage.getItem(KEY+'_size')||'{}');size={...size,...z}}catch(e){}}
function buildGizi(){const grid=$('sppg-gizi-grid');grid.innerHTML='';const s2=($('template-select')?.value==='sppg-2');const nutrients=['Energi (kkal)','Protein (g)','Lemak (g)','Karbohidrat (g)','Serat (g)'];if($('gizi-field-label'))$('gizi-field-label').textContent=s2?'Data Porsi':'Data Menu & Porsi';if(s2){grid.className='sppg-nutrition-input-grid s2-form-grid';for(let r=0;r<5;r++){const a=document.createElement('div');a.className='s2-form-row';const label=document.createElement('span');label.className='s2-form-row-label';label.textContent=nutrients[r];const i2=document.createElement('input');i2.className='control';i2.id='gizi-'+(r*3+1);i2.placeholder='Porsi Kecil';i2.value=state.gizi[r*3+1]||'';const i3=document.createElement('input');i3.className='control';i3.id='gizi-'+(r*3+2);i3.placeholder='Porsi Besar';i3.value=state.gizi[r*3+2]||'';[i2,i3].forEach(x=>x.addEventListener('input',updatePreview));a.append(label,i2,i3);grid.appendChild(a)}const note=document.createElement('small');note.textContent='Menu Hari Ini diisi terpisah di atas. Nama kandungan gizi (Energi, Protein, Lemak, Karbohidrat, Serat) mengikuti desain dan tidak perlu diisi manual.';grid.appendChild(note)}else{grid.className='sppg-nutrition-input-grid';for(let i=0;i<15;i++){const input=document.createElement('input');input.className='control';input.id='gizi-'+i;input.placeholder=i%3===0?'Nama':i%3===1?'Nilai':'Satuan';input.value=state.gizi[i]||'';input.addEventListener('input',updatePreview);grid.appendChild(input)}}}
function readForm(){state.instansi=$('sppg-instansi').value;state.alamat=$('sppg-alamat').value;state.menu=$('sppg-menu').value;state.s2Menu=$('sppg-s2-menu')?.value??state.s2Menu;state.batasTime=$('sppg-batas-time').value||'12:30';state.alertLeft=$('sppg-alert-left').value;state.alertRight=$('sppg-alert-right').value;state.template=$('template-select').value;state.s3Batch=$('sppg-s3-batch')?$('sppg-s3-batch').value:state.s3Batch;state.s3Time=$('sppg-s3-time')?.value||state.s3Time||'12:00';state.gizi=[...Array(15)].map((_,i)=>$('gizi-'+i)?.value||'')}
function renderLogo(){
  const ids=['sppg-logo-form-preview','sppg-label-logo','print-sppg-label-logo','print-sppg2-logo','preview-sppg2-logo'];
  ids.forEach(id=>{if($(id))$(id).innerHTML=''});
  const key=$('template-select')?.value;
  const isS2=key==='sppg-2';
  const isS3=key==='sppg-3';
  if(state.logoData){
    ids.forEach(id=>{if($(id)){const im=new Image();im.src=state.logoData;$(id).appendChild(im)}});
  }else{
    // Belum ada logo diupload: label SPPG MBG dan SPPG MBG Batch memakai logo BGN bawaan
    ['print-sppg2-logo','preview-sppg2-logo'].forEach(id=>{if($(id)){const im=new Image();im.src=S3_DEFAULT_LOGO;$(id).appendChild(im)}});
    if($('sppg-logo-form-preview')){
      if(isS2||isS3){
        const im=new Image();im.src=S3_DEFAULT_LOGO;
        $('sppg-logo-form-preview').appendChild(im);
      }else{
        $('sppg-logo-form-preview').innerHTML='<span class="logo-placeholder"><i class="fa-regular fa-image"></i><b>Preview Logo</b><small>Klik gambar untuk memperbesar</small></span>';
      }
    }
  }
  if($('sppg-logo-delete-btn'))$('sppg-logo-delete-btn').disabled=!state.logoData;
}
function openLogoModal(){if(!state.logoData){const key=$('template-select')?.value;if(key==='sppg-2'||key==='sppg-3'){$('logo-modal-image').src=S3_DEFAULT_LOGO;$('logo-modal').classList.add('show');$('logo-modal').setAttribute('aria-hidden','false');return}$('sppg-logo-input').click();return}$('logo-modal-image').src=state.logoData;$('logo-modal').classList.add('show');$('logo-modal').setAttribute('aria-hidden','false')}
function deleteLogo(){if(!state.logoData){toast('Belum ada logo yang diupload');return}state.logoData='';$('sppg-logo-input').value='';$('sppg-logo-file-name').textContent='Belum ada logo dipilih';saveData();renderLogo();updatePreview();toast('Logo dihapus')}
function closeLogoModal(e){if(e && e.target!==$('logo-modal'))return;$('logo-modal').classList.remove('show');$('logo-modal').setAttribute('aria-hidden','true')}
function renderEdge(){
  if($('sppg-edge-form-preview')){
    $('sppg-edge-form-preview').innerHTML=state.edgeData?'':'<div class="edge-preview-default"></div>';
    if(state.edgeData){const im=new Image();im.src=state.edgeData;$('sppg-edge-form-preview').appendChild(im)}
  }
  document.querySelectorAll('#sppg3-preview-inline .s3-edge, #sppg3-print-target .s3-edge').forEach(el=>{
    el.style.backgroundImage=state.edgeData?('url("'+state.edgeData+'")'):'';
  });
  if($('sppg-edge-delete-btn'))$('sppg-edge-delete-btn').disabled=!state.edgeData;
}
function getDefaultEdgeUrl(){const raw=getComputedStyle(document.documentElement).getPropertyValue('--s3-edge-default-bg').trim();const m=raw.match(/url\((['"]?)(.*?)\1\)/);return m?m[2]:''}
function openEdgeModal(){const src=state.edgeData||getDefaultEdgeUrl();if(!src){$('sppg-edge-input').click();return}$('edge-modal-image').src=src;$('edge-modal').classList.add('show');$('edge-modal').setAttribute('aria-hidden','false')}
function deleteEdge(){if(!state.edgeData){toast('Belum ada gambar tepi yang diupload');return}state.edgeData='';$('sppg-edge-input').value='';$('sppg-edge-file-name').textContent='Menggunakan gambar tepi bawaan';saveData();renderEdge();updatePreview();toast('Gambar tepi dihapus, kembali ke bawaan')}
function closeEdgeModal(e){if(e && e.target!==$('edge-modal'))return;$('edge-modal').classList.remove('show');$('edge-modal').setAttribute('aria-hidden','true')}
function applyTemplate(){
  const key=$('template-select').value;
  const isS2=key==='sppg-2';
  const isS3=key==='sppg-3';
  document.body.classList.toggle('sppg2-active',isS2);
  document.body.classList.toggle('sppg3-active',isS3);
  const t=TEMPLATES[key]||TEMPLATES['etiket-lama'];
  $('template-info').textContent=t.info;
  $('preview-template-name').textContent=t.name;
  $('gizi-field').style.display=t.showGizi?'block':'none';
  $('s2-form-note').style.display=isS2?'block':'none';
  document.querySelectorAll('.old-template-field').forEach(el=>el.style.display=(isS2||isS3)?'none':'block');
  if($('s3-fields')) $('s3-fields').style.display=isS3?'block':'none';
  if($('sppg3-preview-inline')) $('sppg3-preview-inline').classList.toggle('show',isS3);
  buildGizi();
  $('printable-area-minum-rs').dataset.template=key;
  $('sppg2-preview-inline').classList.toggle('show',isS2);
  $('printable-area-minum-rs').style.display=(isS2||isS3)?'none':'block';$('printable-area-minum-rs').dataset.template=state.template;
  buildPreviewGrid(t.count);
  updatePreview();
}
function buildPreviewGrid(count){const n=$('sppg-label-nutrition');const pn=$('print-sppg-label-nutrition');n.innerHTML='';pn.innerHTML='';if(count===0){n.style.display='none';pn.style.display='none';return}n.style.display='';pn.style.display='';for(let i=0;i<count;i++){const v=state.gizi[i]||'';n.insertAdjacentHTML('beforeend','<div>'+esc(v)+'</div>');pn.insertAdjacentHTML('beforeend','<div>'+esc(v)+'</div>')}}
function updatePreview(){
  readForm();

  const isS2=state.template==='sppg-2';
  const isS3=state.template==='sppg-3';
  document.body.classList.toggle('sppg2-active',isS2);
  document.body.classList.toggle('sppg3-active',isS3);
  const t=TEMPLATES[state.template]||TEMPLATES['etiket-lama'];
  const now=new Date();
  applyLabelSize();

  if($('sppg-today-display')) $('sppg-today-display').value=formatDate(today());
  if($('sppg-s2-date-display')) $('sppg-s2-date-display').value=now.toLocaleDateString('id-ID',{weekday:'long',day:'2-digit',month:'long',year:'numeric'});

  if($('sppg2-preview-inline')) $('sppg2-preview-inline').classList.toggle('show',isS2);
  if($('sppg3-preview-inline')) $('sppg3-preview-inline').classList.toggle('show',isS3);
  if($('printable-area-minum-rs')) $('printable-area-minum-rs').style.display=(isS2||isS3)?'none':'block';
  if($('s2-form-note')) $('s2-form-note').style.display=isS2?'block':'none';
  document.querySelectorAll('.old-template-field').forEach(el=>el.style.display=(isS2||isS3)?'none':'block');
  if($('s3-fields')) $('s3-fields').style.display=isS3?'block':'none';
  if($('template-info')) $('template-info').textContent=t.info;
  if($('preview-template-name')) $('preview-template-name').textContent=t.name;
  if($('gizi-field')) $('gizi-field').style.display=t.showGizi?'block':'none';

  const vals={
    instansi:state.instansi||'',
    alamat:state.alamat||'',
    menu:state.menu||'........',
    date:formatDate(today()),
    time:'Pukul : '+formatTime(state.batasTime)+' WIB',
    left:state.alertLeft||'',
    right:state.alertRight||''
  };

  ['sppg','print'].forEach(prefix=>{
    const map={
      instansi:vals.instansi,alamat:vals.alamat,menu:vals.menu,
      'menu-title':'MENU HARI INI :','batas-label':'BATAS KONSUMSI',
      date:vals.date,time:vals.time,'alert-left':vals.left,'alert-right':vals.right
    };
    Object.entries(map).forEach(([suffix,value])=>{
      const el=$(prefix+'-label-'+suffix);if(el)el.textContent=value;
    });
  });

  buildPreviewGrid(t.count);
  if(isS2) renderSppg2();

  if($('printable-area-minum-rs')){
    $('printable-area-minum-rs').dataset.template=state.template;
    $('printable-area-minum-rs').style.setProperty('--minum-rs-label-width',size.width+'mm');
    $('printable-area-minum-rs').style.setProperty('--minum-rs-label-height',size.height+'mm');
  }
  if($('sppg-print-target')){
    $('sppg-print-target').dataset.template=state.template;
    $('sppg-print-target').style.setProperty('--minum-rs-label-width',size.width+'mm');
    $('sppg-print-target').style.setProperty('--minum-rs-label-height',size.height+'mm');
  }

  applyTypography();
  renderLogo();
  renderEdge();
  if(isS3) renderSppg3();
}
function formatBatch(v){return formatTime(v)+' WIB'}
function renderSppg3(){
  // SPPG MBG   BATCH: satu sumber data dari Form Label SPPG -> Preview -> Cetak.
  const instansi=state.instansi||'NAMA INSTANSI';
  const batchText=(state.s3Batch===''?'':(state.s3Batch||'Batch'));
  const jam=formatTime(state.s3Time||'12:00');
  ['preview','print'].forEach(p=>{
    const i=$(p+'-sppg3-instansi'); if(i) i.textContent=instansi;
    const b=$(p+'-sppg3-batch');    if(b) b.textContent=batchText;
    const t=$(p+'-sppg3-time');     if(t) t.textContent=jam;
    const l=$(p+'-sppg3-logo');
    if(l){l.innerHTML='';const im=new Image();im.src=state.logoData||S3_DEFAULT_LOGO;l.appendChild(im);}
  });
  requestAnimationFrame(fitSppg3);
}
function fitBoxHeight(wrap,el,startSize,minSize){
  if(!el||!wrap||!wrap.clientHeight) return null;
  let s=startSize; el.style.fontSize=s+'mm'; let g=0;
  while(el.scrollHeight>wrap.clientHeight+1 && s>minSize && g++<160){
    s=Math.round((s-0.05)*100)/100; el.style.fontSize=s+'mm';
  }
  return s;
}
function fitBoxWidth(el,startSize,minSize){
  if(!el||!el.clientWidth) return null;
  let s=startSize; el.style.fontSize=s+'mm'; let g=0;
  while(el.scrollWidth>el.clientWidth+1 && s>minSize && g++<200){
    s=Math.round((s-0.1)*100)/100; el.style.fontSize=s+'mm';
  }
  return s;
}
function fitSppg3(){
  // Ukur & kecilkan font pada versi Preview MAUPUN versi Cetak secara independen
  // (yang sedang tersembunyi otomatis di-skip, clientHeight/Width-nya 0), lalu
  // yang berhasil diukur dipakai untuk menyamakan yang satunya. Ini penting saat
  // mode cetak aktif: panel Preview disembunyikan & target cetak yang tampil,
  // jadi target cetak yang harus jadi acuan ukuran hurufnya sendiri.
  const INSTANSI_START=2.6, INSTANSI_MIN=1.6;
  const nama=$('preview-sppg3-instansi'), pn=$('print-sppg3-instansi');
  const sPrev=fitBoxHeight($('preview-sppg3-instansi-wrap'),nama,INSTANSI_START,INSTANSI_MIN);
  const sPrint=fitBoxHeight($('print-sppg3-instansi-wrap'),pn,INSTANSI_START,INSTANSI_MIN);
  if(sPrint==null && sPrev!=null && pn) pn.style.fontSize=sPrev+'mm';
  if(sPrev==null && sPrint!=null && nama) nama.style.fontSize=sPrint+'mm';

  const TIME_START=10.4, TIME_MIN=5;
  const jam=$('preview-sppg3-time'), pj=$('print-sppg3-time');
  const tPrev=fitBoxWidth(jam,TIME_START,TIME_MIN);
  const tPrint=fitBoxWidth(pj,TIME_START,TIME_MIN);
  if(tPrint==null && tPrev!=null && pj) pj.style.fontSize=tPrev+'mm';
  if(tPrev==null && tPrint!=null && jam) jam.style.fontSize=tPrint+'mm';
}
function fitS2Instansi(){
  // Hanya hitung ukuran font pada preview yang sedang terlihat.
  // Target cetak tersembunyi tidak boleh ikut dihitung karena clientWidth=0
  // akan membuat font mengecil dan hasil print berbeda dari Preview Label.
  const preview=$('preview-sppg2-instansi');
  if(preview){
    preview.style.fontSize='1.77mm';
    let guard=0;
    while(preview.scrollWidth>preview.clientWidth && guard<30){
      const current=parseFloat(getComputedStyle(preview).fontSize);
      preview.style.fontSize=Math.max(0.95,current-0.06)+'mm';
      guard++;
    }
  }
  const print=$('print-sppg2-instansi');
  if(print) print.style.fontSize=preview ? getComputedStyle(preview).fontSize : '1.77mm';
}

function renderSppg2(){
  // SPPG MBG  : satu sumber data dari Form Label SPPG -> Preview Pengaturan Print -> Cetak.
  const nutrient=['Energi (kkal)','Protein (g)','Lemak (g)','Karbohidrat (g)','Serat (g)'];

  const bodies=['preview-sppg2-table-body','print-sppg2-table-body'];
  let rows='';
  for(let r=0;r<5;r++){
    const small=state.gizi[r*3+1]||'';
    const large=state.gizi[r*3+2]||'';
    rows+=`<tr><td>${nutrient[r]}</td><td>${esc(small)}</td><td>${esc(large)}</td></tr>`;
  }
  bodies.forEach(id=>{const el=$(id);if(el)el.innerHTML=rows;});

  const menuText=(state.s2Menu||'').trim();
  ['preview-sppg2-menu','print-sppg2-menu'].forEach(id=>{
    const el=$(id);if(el)el.textContent=menuText;
  });

  const instansi=state.instansi||'';
  ['preview-sppg2-instansi','print-sppg2-instansi'].forEach(id=>{
    const el=$(id);if(el)el.textContent=instansi;
  });

  const d=new Date();
  const dateText='Hari, Tanggal: '+d.toLocaleDateString('id-ID',{weekday:'long',day:'2-digit',month:'long',year:'numeric'});
  ['preview-sppg2-date','print-sppg2-date'].forEach(id=>{
    const el=$(id);if(el)el.textContent=dateText;
  });

  // Logo dipasang ke dua tujuan SPPG MBG  .
  ['preview-sppg2-logo','print-sppg2-logo'].forEach(id=>{
    const el=$(id);if(!el)return;
    el.innerHTML='';
    const img=new Image();
    img.src=state.logoData||S3_DEFAULT_LOGO;
    el.appendChild(img);
  });

  requestAnimationFrame(()=>{fitS2Instansi();fitS2Content();});
}
function fitS2Content(){
  // Hanya mengecilkan isi yang benar-benar melebihi batas label. Tidak pernah
  // memperbesar otomatis, sehingga seluruh tanggal/tabel/batch tetap terlihat.
  // Jangan mengukur target cetak yang tersembunyi. Preview dan hasil print
  // harus memakai geometri/content yang sama.
  document.querySelectorAll('#sppg2-preview-inline.show .s2-label').forEach(label=>{
    const content=label.querySelector('.s2-content'); if(!content)return;
    content.style.transform='scale(1)';
    content.style.transformOrigin='top center';
    let scale=1;
    for(let i=0;i<25;i++){
      if(content.scrollHeight <= label.clientHeight-4) break;
      scale-=0.02;
      content.style.transform=`scale(${Math.max(.72,scale)})`;
    }
    const printContent=$('sppg2-print-target')?.querySelector('.s2-content');
    if(printContent){
      printContent.style.transform=content.style.transform;
      printContent.style.transformOrigin=content.style.transformOrigin;
    }
  });
}
function applyTypography(){const root=$('printable-area-minum-rs');root.dataset.labelFontFamily=typography.family;root.classList.toggle('label-user-bold',typography.bold);root.classList.toggle('label-user-italic',typography.italic);root.classList.toggle('label-user-underline',typography.underline);$('font-top').value=typography.top;$('font-middle').value=typography.middle;$('font-bottom').value=typography.bottom;$('font-top-val').textContent=typography.top+'%';$('font-middle-val').textContent=typography.middle+'%';$('font-bottom-val').textContent=typography.bottom+'%';$('font-family').value=typography.family;$('font-bold').checked=typography.bold;$('font-italic').checked=typography.italic;$('font-underline').checked=typography.underline;document.querySelectorAll('.sppg-brand-text,.sppg-address').forEach(e=>e.style.fontSize='calc('+typography.top+'% * 1em)');document.querySelectorAll('.sppg-nutrition > div').forEach(e=>e.style.fontSize='calc('+typography.middle+'% * 1em)');document.querySelectorAll('.sppg-yellow,.sppg-middle-left,.sppg-date,.sppg-time,.sppg-bottom-left,.sppg-bottom-right').forEach(e=>e.style.fontSize='calc('+typography.bottom+'% * 1em)')}
function syncTypography(){typography.top=+$('font-top').value;typography.middle=+$('font-middle').value;typography.bottom=+$('font-bottom').value;typography.family=$('font-family').value;typography.bold=$('font-bold').checked;typography.italic=$('font-italic').checked;typography.underline=$('font-underline').checked;applyTypography();saveData()}
function resetTypography(){typography={top:100,middle:100,bottom:100,family:'default',bold:false,italic:false,underline:false};applyTypography();saveData()}
function setLabelSize(w,h,btn){size={width:w,height:h};$('label-width').value=w;$('label-height').value=h;document.querySelectorAll('.preset-btn').forEach(x=>x.classList.remove('active'));btn?.classList.add('active');updatePreview();saveData()}
function manualSize(){readLabelSize();updatePreview();saveData()}
function preparePrint(){showSection('print-settings');updatePreview()}
function enterPrintMode(){
  if(queuePrintActive) return;
  readLabelSize();
  readForm();updatePreview();
  document.body.classList.add('sppg-printing');
  document.body.classList.toggle('printing-sppg2',state.template==='sppg-2');
  document.body.classList.toggle('printing-sppg3',state.template==='sppg-3');
  if(state.template==='sppg-2'){fitS2Instansi();fitS2Content();}
  if(state.template==='sppg-3'){renderSppg3();fitSppg3();}
}
function exitPrintMode(){if(queuePrintActive)return;document.body.classList.remove('sppg-printing','printing-sppg2','printing-sppg3')}
function printLabel(){
  readLabelSize();saveData();enterPrintMode();
  setTimeout(()=>{window.print();setTimeout(exitPrintMode,500)},100);
}
function uploadLogo(e){const f=e.target.files?.[0];if(!f)return;const r=new FileReader();r.onload=()=>{state.logoData=r.result;$('sppg-logo-file-name').textContent=f.name;saveData();renderLogo();updatePreview();toast('Logo berhasil disimpan')};r.readAsDataURL(f)}
function uploadEdge(e){const f=e.target.files?.[0];if(!f)return;const r=new FileReader();r.onload=()=>{state.edgeData=r.result;$('sppg-edge-file-name').textContent=f.name;saveData();renderEdge();updatePreview();toast('Gambar tepi berhasil disimpan')};r.readAsDataURL(f)}

/* ===== Antrian Print (print queue) ===== */
const QUEUE_ROOT_SELECTOR={'etiket-lama':'#sppg-print-target .minum-sppg-template','sppg-2':'#sppg2-print-target .s2-label','sppg-3':'#sppg3-print-target .s3-label'};
function currentQueueTitle(){
  const tpl=TEMPLATES[state.template]?TEMPLATES[state.template].name:state.template;
  const inst=(state.instansi||'').trim();
  return inst?(tpl+' — '+inst):tpl;
}
function ensureFitted(){
  if(state.template==='sppg-3'){renderSppg3();fitSppg3();}
  else if(state.template==='sppg-2'){fitS2Instansi();fitS2Content();}
}
function addToQueue(copiesOverride){
  readForm();updatePreview();ensureFitted();
  const sel=QUEUE_ROOT_SELECTOR[state.template];
  const root=sel?document.querySelector(sel):null;
  if(!root){toast('Template ini belum didukung Antrian Print');return}
  const copiesInput=$('queue-copies-input');
  let copies=copiesOverride!=null?copiesOverride:parseInt(copiesInput&&copiesInput.value,10);
  if(!copies||copies<1) copies=1;
  copies=Math.min(copies,200);
  const item={id:'q'+Date.now()+Math.random().toString(36).slice(2,7),template:state.template,title:currentQueueTitle(),copies,html:root.outerHTML};
  state.printQueue=state.printQueue||[];
  state.printQueue.push(item);
  saveData();renderQueue();
  toast('Ditambahkan ke antrian ('+copies+' copy)');
}
function renderQueue(){
  const list=$('queue-list'); if(!list) return;
  const q=state.printQueue||[];
  if($('queue-count-badge')) $('queue-count-badge').textContent=q.length+' antrian';
  if(!q.length){ list.innerHTML='<div class="queue-empty" id="queue-empty-msg">Antrian masih kosong.</div>'; return }
  list.innerHTML=q.map(it=>'<div class="queue-item"><div class="queue-item-info"><div class="queue-item-title">'+esc(it.title)+'</div><div class="queue-item-meta">'+it.copies+' copy</div></div><button class="queue-item-remove" type="button" onclick="removeFromQueue(\''+it.id+'\')" title="Hapus dari antrian"><i class="fa-solid fa-xmark"></i></button></div>').join('');
}
function removeFromQueue(id){
  state.printQueue=(state.printQueue||[]).filter(x=>x.id!==id);
  saveData();renderQueue();
}
function clearQueue(){
  if(!(state.printQueue||[]).length) return;
  state.printQueue=[];
  saveData();renderQueue();
  toast('Antrian dikosongkan');
}
let queuePrintActive=false;
function runQueuePrint(pagesHtml){
  if(!pagesHtml.length){toast('Tidak ada yang bisa dicetak');return}
  readLabelSize();applyLabelSize();
  const target=$('queue-print-target');
  target.innerHTML=pagesHtml.map(h=>'<div class="queue-print-page">'+h+'</div>').join('');
  queuePrintActive=true;
  document.body.classList.add('printing-queue');
  setTimeout(()=>{
    window.print();
    setTimeout(()=>{
      document.body.classList.remove('printing-queue');
      target.innerHTML='';
      queuePrintActive=false;
    },500);
  },100);
}
function printQueueAll(){
  const q=state.printQueue||[];
  if(!q.length){toast('Antrian masih kosong');return}
  const pages=[];
  q.forEach(it=>{for(let i=0;i<it.copies;i++)pages.push(it.html)});
  runQueuePrint(pages);
}
function printCopiesDirect(n){
  readForm();updatePreview();ensureFitted();
  const sel=QUEUE_ROOT_SELECTOR[state.template];
  const root=sel?document.querySelector(sel):null;
  if(!root){ printLabel(); return }
  const pages=[]; for(let i=0;i<n;i++) pages.push(root.outerHTML);
  runQueuePrint(pages);
}

/* ===== Shortcut keyboard: Ctrl+P+angka = cetak langsung, Ctrl+Shift+angka = tambah antrian ===== */
let keyCapture=null;
function showKeyCaptureToast(text){
  let el=$('key-capture-toast-el');
  if(!el){ el=document.createElement('div'); el.id='key-capture-toast-el'; el.className='key-capture-toast'; document.body.appendChild(el); }
  el.textContent=text; el.classList.add('show');
}
function hideKeyCaptureToast(){ const el=$('key-capture-toast-el'); if(el) el.classList.remove('show'); }
function updateKeyCaptureToast(){
  if(!keyCapture) return;
  const label=keyCapture.mode==='print'?'Cetak langsung':'Tambah ke Antrian';
  const n=keyCapture.buffer||'1';
  showKeyCaptureToast(label+': '+n+' copy — Enter untuk konfirmasi, Esc batal');
}
function resetKeyCaptureTimeout(){
  if(!keyCapture) return;
  clearTimeout(keyCapture.timeoutId);
  keyCapture.timeoutId=setTimeout(()=>confirmKeyCapture(),3000);
}
function startKeyCapture(mode,initialDigit){
  keyCapture={mode,buffer:initialDigit||'',timeoutId:null};
  updateKeyCaptureToast();
  resetKeyCaptureTimeout();
}
function cancelKeyCapture(){
  if(keyCapture) clearTimeout(keyCapture.timeoutId);
  keyCapture=null;
  hideKeyCaptureToast();
}
function confirmKeyCapture(){
  if(!keyCapture) return;
  const mode=keyCapture.mode;
  const n=parseInt(keyCapture.buffer,10)||1;
  clearTimeout(keyCapture.timeoutId);
  keyCapture=null;
  hideKeyCaptureToast();
  if(mode==='print'){ printCopiesDirect(n); }
  else { addToQueue(n); }
}

document.addEventListener('DOMContentLoaded',()=>{loadData();buildGizi();$('template-select').value=TEMPLATES[state.template]?state.template:'etiket-lama';$('sppg-instansi').value=state.instansi;$('sppg-alamat').value=state.alamat;$('sppg-menu').value=state.menu;if($('sppg-s2-menu'))$('sppg-s2-menu').value=state.s2Menu||'';$('sppg-batas-time').value=state.batasTime;$('sppg-alert-left').value=state.alertLeft;$('sppg-alert-right').value=state.alertRight;if($('sppg-s3-batch'))$('sppg-s3-batch').value=state.s3Batch??'Batch';if($('sppg-s3-time'))$('sppg-s3-time').value=state.s3Time||'12:00';$('current-date').textContent=new Date().toLocaleDateString('id-ID',{weekday:'long',year:'numeric',month:'long',day:'numeric'});if($('sppg-s2-date-display'))if($('sppg-s2-date-display')) $('sppg-s2-date-display').value=new Date().toLocaleDateString('id-ID',{weekday:'long',day:'2-digit',month:'long',year:'numeric'});$('sppg-logo-input').addEventListener('change',uploadLogo);if(state.logoData)$('sppg-logo-file-name').textContent='Logo tersimpan';$('sppg-edge-input').addEventListener('change',uploadEdge);if(state.edgeData)$('sppg-edge-file-name').textContent='Gambar tepi tersimpan';$('template-select').addEventListener('change',()=>{readForm();state.template=$('template-select').value;applyTemplate();updatePreview();saveData()});['sppg-instansi','sppg-alamat','sppg-menu','sppg-s2-menu','sppg-batas-time','sppg-alert-left','sppg-alert-right','sppg-s3-batch','sppg-s3-time'].forEach(id=>$(id)?.addEventListener('input',updatePreview));$('label-width').addEventListener('change',manualSize);$('label-height').addEventListener('change',manualSize);['font-top','font-middle','font-bottom','font-family','font-bold','font-italic','font-underline'].forEach(id=>$(id).addEventListener('input',syncTypography));applyTemplate();updatePreview();renderQueue();});
window.addEventListener('keydown',e=>{
  if(e.key==='Escape'){closeLogoModal();closeEdgeModal();cancelKeyCapture();return}
  if(keyCapture){
    if(/^[0-9]$/.test(e.key)){e.preventDefault();keyCapture.buffer+=e.key;updateKeyCaptureToast();resetKeyCaptureTimeout();return}
    if(e.key==='Enter'){e.preventDefault();confirmKeyCapture();return}
    if(e.key==='Backspace'){e.preventDefault();keyCapture.buffer=keyCapture.buffer.slice(0,-1);updateKeyCaptureToast();resetKeyCaptureTimeout();return}
    return;
  }
  if(e.ctrlKey && !e.shiftKey && !e.altKey && e.key.toLowerCase()==='p'){e.preventDefault();startKeyCapture('print','');return}
  if(e.ctrlKey && e.shiftKey && !e.altKey && /^[0-9]$/.test(e.key)){e.preventDefault();startKeyCapture('queue',e.key);return}
});
window.addEventListener('beforeprint',enterPrintMode);
window.addEventListener('afterprint',exitPrintMode);
